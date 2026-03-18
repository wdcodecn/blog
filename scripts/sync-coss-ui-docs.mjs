import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const repoRoot = process.cwd();
const docsRoot = path.join(repoRoot, "docs/coss_ui");
const docsBaseUrl = "https://coss.com/ui/docs/";
const candidateLlmsPaths = [
	"coss_ui_llms.txt",
	"src/components/ui/coss_ui_llms.txt",
	"src/components/ui/llms.txt",
];

const markdownLinkPattern = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

async function resolveLlmsPath() {
	const explicitPath = process.argv[2];
	if (explicitPath) {
		return path.resolve(repoRoot, explicitPath);
	}

	for (const candidate of candidateLlmsPaths) {
		const absolutePath = path.join(repoRoot, candidate);
		try {
			await access(absolutePath);
			return absolutePath;
		} catch {
			// Try the next candidate.
		}
	}

	throw new Error(
		`Could not find an llms source file. Looked for: ${candidateLlmsPaths.map((item) => `"${item}"`).join(", ")}`
	);
}

function toLocalDocPath(urlString, llmsPath) {
	const url = new URL(urlString);
	if (!url.href.startsWith(docsBaseUrl)) {
		return null;
	}

	const remotePath = url.pathname.replace(/^\/ui\/docs\//, "");
	if (!remotePath.endsWith(".md")) {
		return null;
	}

	return {
		absolutePath: path.join(docsRoot, remotePath),
		relativeToLlms: path
			.relative(path.dirname(llmsPath), path.join(docsRoot, remotePath))
			.split(path.sep)
			.join("/"),
		hash: url.hash,
		downloadUrl: `${url.origin}${url.pathname}`,
	};
}

async function downloadFile(downloadUrl, destinationPath) {
	const response = await fetch(downloadUrl);
	if (!response.ok) {
		throw new Error(`Failed to download ${downloadUrl}: ${response.status} ${response.statusText}`);
	}

	const content = await response.text();
	await mkdir(path.dirname(destinationPath), { recursive: true });
	await writeFile(destinationPath, content, "utf8");
}

async function main() {
	const llmsPath = await resolveLlmsPath();
	const original = await readFile(llmsPath, "utf8");
	const downloads = new Map();
	const downloadedUrls = new Set();
	const failedUrls = new Map();

	for (const match of original.matchAll(markdownLinkPattern)) {
		const urlString = match[2];
		const localDoc = toLocalDocPath(urlString, llmsPath);
		if (!localDoc) {
			continue;
		}

		if (!downloads.has(localDoc.downloadUrl)) {
			downloads.set(localDoc.downloadUrl, localDoc.absolutePath);
		}
	}

	for (const [downloadUrl, destinationPath] of downloads) {
		try {
			await downloadFile(downloadUrl, destinationPath);
			downloadedUrls.add(downloadUrl);
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);
			failedUrls.set(downloadUrl, message);
			console.warn(`Skipped ${downloadUrl}: ${message}`);
		}
	}

	const rewritten = original.replace(markdownLinkPattern, (full, label, urlString) => {
		const localDoc = toLocalDocPath(urlString, llmsPath);
		if (!localDoc || !downloadedUrls.has(localDoc.downloadUrl)) {
			return full;
		}

		return `[${label}](${localDoc.relativeToLlms}${localDoc.hash})`;
	});

	await writeFile(llmsPath, rewritten, "utf8");

	console.log(
		`Downloaded ${downloadedUrls.size} docs into docs/coss_ui and rewrote ${path.relative(repoRoot, llmsPath)}.`
	);
	if (failedUrls.size > 0) {
		console.log(`Left ${failedUrls.size} link(s) as remote URLs because download failed.`);
	}
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
