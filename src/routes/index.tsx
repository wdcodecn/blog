import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardPanel,
	CardTitle,
} from "@/components/ui/card";
import { Kbd } from "@/components/ui/kbd";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="page-wrap min-h-[100vh] py-16 font-mono">
			<div
				className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.05]"
				style={{
					backgroundImage: `linear-gradient(rgba(79, 184, 178, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 184, 178, 0.3) 1px, transparent 1px)`,
					backgroundSize: "24px 24px",
				}}
			/>

			<div className="fixed top-20 right-4 z-0 opacity-20">
				<pre className="text-[10px] text-[var(--lagoon)] leading-none">
					{`┌─────────────────────────────────┐
│  0x1F4BB                        │
│  SYSTEM ONLINE                  │
│  KERNEL: 5.15.0-generic         │
│  UPTIME: 42d 13h 37m             │
│  MEM: 64TB / 128TB              │
└─────────────────────────────────┘`}
				</pre>
			</div>

			<section className="relative z-10 mb-24 text-center">
				<div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-[var(--lagoon)]/30 bg-[var(--lagoon)]/10 px-4 py-2 text-sm text-[var(--lagoon)]">
					<span className="relative flex h-2 w-2">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lagoon)] opacity-75" />
						<span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lagoon)]" />
					</span>
					<span>v1.0.0 &lt;alias&gt; stable</span>
				</div>

				<h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
					<span className="text-[var(--sea-ink)] dark:text-[var(--lagoon)]">
						npm
					</span>
					<span className="text-[var(--sea-ink-soft)]"> install </span>
					<span className="text-[var(--lagoon)]">@tanstack/start</span>
				</h1>

				<p className="mx-auto mb-8 max-w-2xl text-lg text-[var(--sea-ink-soft)]">
					A type-safe full-stack framework for developers who value
					<span className="mx-1 rounded bg-[var(--lagoon)]/20 px-1.5 py-0.5 text-[var(--lagoon)]">
						performance
					</span>
					over convention.
				</p>

				<div className="mb-8 flex flex-wrap justify-center gap-3">
					<Button size="lg" render={<Link to="/" />} className="font-mono">
						<span className="opacity-70">$</span> npm init
					</Button>
					<Button
						size="lg"
						variant="outline"
						render={<Link to="/" />}
						className="font-mono border-[var(--lagoon)]/40 hover:bg-[var(--lagoon)]/10"
					>
						<span className="opacity-70">#</span> read docs
					</Button>
				</div>

				<div className="flex flex-wrap justify-center gap-2 text-xs">
					<Kbd className="font-mono">Ctrl</Kbd>
					<span className="text-[var(--sea-ink-soft)]">+</span>
					<Kbd className="font-mono">K</Kbd>
					<span className="text-[var(--sea-ink-soft)]">→</span>
					<span className="text-[var(--lagoon)]">Search</span>
					<span className="text-[var(--sea-ink-soft)]">|</span>
					<Kbd className="font-mono">?</Kbd>
					<span className="text-[var(--lagoon)]">Help</span>
				</div>
			</section>

			<Separator className="my-12 bg-gradient-to-r from-transparent via-[var(--lagoon)]/30 to-transparent" />

			<section className="relative z-10 mb-20">
				<div className="mb-10 text-center">
					<h2 className="mb-3 text-2xl font-bold text-[var(--sea-ink)] dark:text-[var(--lagoon)]">
						{"//"} FEATURES
					</h2>
				</div>

				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{[
						{
							title: "0x00",
							desc: "Type-safe RPC between client and server with full inference",
							status: "stable",
						},
						{
							title: "0x01",
							desc: "Edge-ready with Vercel, Cloudflare, and Node.js adapters",
							status: "stable",
						},
						{
							title: "0x02",
							desc: "Hot module replacement that actually works",
							status: "stable",
						},
						{
							title: "0x03",
							desc: "File-based routing with zero config",
							status: "beta",
						},
						{
							title: "0x04",
							desc: "Built-in state management and data fetching",
							status: "stable",
						},
						{
							title: "0x05",
							desc: "Server components with selective hydration",
							status: "alpha",
						},
					].map((item) => (
						<Card
							key={item.title}
							className="group relative overflow-hidden border-[var(--lagoon)]/20 transition-all hover:border-[var(--lagoon)]/50"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-[var(--lagoon)]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
							<CardHeader className="relative">
								<div className="mb-2 flex items-center justify-between">
									<CardTitle className="font-mono text-lg text-[var(--lagoon)]">
										{item.title}
									</CardTitle>
									<Badge
										variant={
											item.status === "stable"
												? "secondary"
												: item.status === "beta"
													? "outline"
													: "destructive"
										}
										className="font-mono text-xs"
									>
										{item.status}
									</Badge>
								</div>
								<CardDescription className="font-mono text-sm">
									{item.desc}
								</CardDescription>
							</CardHeader>
							<CardPanel className="relative font-mono text-xs text-[var(--sea-ink-soft)]">
								<span className="text-[var(--lagoon)]">&gt;</span> no runtime
								overhead
							</CardPanel>
						</Card>
					))}
				</div>
			</section>

			<section className="relative z-10 mb-20 rounded-xl border border-[var(--lagoon)]/20 bg-[var(--chip-bg)] p-6 dark:bg-[var(--foam)]/5">
				<div className="mb-4 flex items-center gap-2 text-xs font-mono text-[var(--sea-ink-soft)]">
					<span className="flex h-3 w-3 items-center justify-center rounded-full bg-red-500/20 text-[10px]">
						●
					</span>
					<span className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-500/20 text-[10px]">
						●
					</span>
					<span className="flex h-3 w-3 items-center justify-center rounded-full bg-green-500/20 text-[10px]">
						●
					</span>
					<span className="ml-2">~ src/routes/index.tsx</span>
				</div>
				<pre className="overflow-x-auto text-sm font-mono">
					<code>{`import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  loader: async () => {
    const data = await db.query("SELECT * FROM users")
    return { users: data }
  },
  component: ({ loaderData }) => (
    <div>
      {loaderData.users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  )
})`}</code>
				</pre>
			</section>

			<section className="relative z-10 mb-20">
				<div className="grid gap-8 text-center md:grid-cols-3">
					{[
						{ value: "2^20", label: "Downloads/Week" },
						{ value: "0x1F4E6", label: "GitHub Stars" },
						{ value: "∞", label: "Possibilities" },
					].map((stat) => (
						<div
							key={stat.value}
							className="rounded-lg border border-[var(--lagoon)]/20 bg-[var(--chip-bg)] p-6 dark:bg-[var(--foam)]/5"
						>
							<div className="mb-2 font-mono text-3xl font-bold text-[var(--lagoon)]">
								{stat.value}
							</div>
							<div className="font-mono text-xs text-[var(--sea-ink-soft)]">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</section>

			<Separator className="my-12 bg-gradient-to-r from-transparent via-[var(--lagoon)]/30 to-transparent" />

			<section className="relative z-10 text-center">
				<Card className="inline-block border-[var(--lagoon)]/30 bg-gradient-to-br from-[var(--chip-bg)] to-[var(--lagoon)]/10 dark:from-[var(--foam)]/10">
					<CardPanel className="px-12 py-8">
						<CardTitle className="mb-4 font-mono text-2xl text-[var(--sea-ink)] dark:text-[var(--lagoon)]">
							Ready to ship?
						</CardTitle>
						<CardDescription className="mb-6 font-mono">
							Press <Kbd className="font-mono">Enter</Kbd> to begin
						</CardDescription>
						<Button render={<Link to="/" />} className="font-mono">
							<span className="text-[var(--lagoon)]">●</span> Start Building
						</Button>
					</CardPanel>
				</Card>
			</section>

			<footer className="mt-20 text-center font-mono text-xs text-[var(--sea-ink-soft)]">
				<pre className="inline-block text-left">
					{`┌────────────────────────────────────────┐
│ (c) 2026 TanStack. MIT Licensed.       │
│ BUILD: ${new Date().toISOString().split("T")[0]}    │
└────────────────────────────────────────┘`}
				</pre>
			</footer>
		</div>
	);
}
