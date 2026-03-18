import { createFileRoute, Link } from "@tanstack/react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardPanel,
	CardTitle,
} from "@/components/ui/card";
import { Group } from "@/components/ui/group";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="page-wrap min-h-[100vh] py-12">
			<section className="mb-20 text-center">
				<Badge variant="secondary" className="mb-4">
					v1.0 Released
				</Badge>
				<h1 className="mb-6 text-5xl font-bold tracking-tight text-[var(--sea-ink)] md:text-7xl">
					Build Better Apps
					<br />
					<span className="text-[var(--brand)]">Faster Than Ever</span>
				</h1>
				<p className="mx-auto mb-8 max-w-2xl text-lg text-[var(--sea-ink-soft)]">
					A modern full-stack framework built for developers who demand
					performance, type safety, and developer experience.
				</p>
				<div className="flex flex-col justify-center gap-3 sm:flex-row">
					<Button size="lg" render={<Link to="/" />}>
						Get Started
					</Button>
					<Button size="lg" variant="outline" render={<Link to="/" />}>
						View Docs
					</Button>
				</div>
			</section>

			<section className="mb-20">
				<div className="mb-10 text-center">
					<h2 className="mb-3 text-3xl font-bold text-[var(--sea-ink)]">
						Everything You Need
					</h2>
					<p className="text-[var(--sea-ink-soft)]">
						Powerful features to build production-ready applications
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<Card>
						<CardHeader>
							<CardTitle>Type-Safe</CardTitle>
							<CardDescription>
								Full end-to-end type safety with TypeScript out of the box
							</CardDescription>
						</CardHeader>
						<CardPanel>
							<div className="flex h-20 items-center justify-center rounded-lg bg-[var(--chip-bg)]">
								<svg
									className="h-10 w-10 text-[var(--brand)]"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1.5}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
						</CardPanel>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Lightning Fast</CardTitle>
							<CardDescription>
								Optimized for performance with edge-ready deployment
							</CardDescription>
						</CardHeader>
						<CardPanel>
							<div className="flex h-20 items-center justify-center rounded-lg bg-[var(--chip-bg)]">
								<svg
									className="h-10 w-10 text-[var(--brand)]"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1.5}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
						</CardPanel>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Developer Experience</CardTitle>
							<CardDescription>
								Hot reload, error boundaries, and intuitive APIs
							</CardDescription>
						</CardHeader>
						<CardPanel>
							<div className="flex h-20 items-center justify-center rounded-lg bg-[var(--chip-bg)]">
								<svg
									className="h-10 w-10 text-[var(--brand)]"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1.5}
										d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
									/>
								</svg>
							</div>
						</CardPanel>
					</Card>
				</div>
			</section>

			<section className="mb-20 rounded-2xl bg-[var(--chip-bg)] p-8 md:p-12">
				<div className="grid gap-8 text-center md:grid-cols-3">
					<div>
						<div className="mb-2 text-4xl font-bold text-[var(--sea-ink)]">
							50K+
						</div>
						<div className="text-[var(--sea-ink-soft)]">Weekly Downloads</div>
					</div>
					<div>
						<div className="mb-2 text-4xl font-bold text-[var(--sea-ink)]">
							2.5K+
						</div>
						<div className="text-[var(--sea-ink-soft)]">GitHub Stars</div>
					</div>
					<div>
						<div className="mb-2 text-4xl font-bold text-[var(--sea-ink)]">
							150+
						</div>
						<div className="text-[var(--sea-ink-soft)]">Contributors</div>
					</div>
				</div>
			</section>

			<section className="mb-20">
				<div className="mb-10 text-center">
					<h2 className="mb-3 text-3xl font-bold text-[var(--sea-ink)]">
						Meet the Team
					</h2>
					<p className="text-[var(--sea-ink-soft)]">
						The people behind this amazing project
					</p>
				</div>
				<div className="flex flex-wrap justify-center gap-4">
					<Group className="[&>*]:-ml-3 [&>*]:first:-ml-0">
						<Avatar>
							<AvatarImage src="https://i.pravatar.cc/150?img=1" alt="Alice" />
							<AvatarFallback>AC</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarImage src="https://i.pravatar.cc/150?img=2" alt="Bob" />
							<AvatarFallback>BO</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarImage
								src="https://i.pravatar.cc/150?img=3"
								alt="Charlie"
							/>
							<AvatarFallback>CH</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarFallback>+5</AvatarFallback>
						</Avatar>
					</Group>
				</div>
			</section>

			<section className="text-center">
				<Card className="inline-block border-none bg-gradient-to-br from-[var(--brand)] to-[var(--sea-ink)] p-px">
					<CardPanel className="bg-white px-8 py-12 dark:bg-gray-900">
						<h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
							Ready to Get Started?
						</h2>
						<p className="mb-6 text-gray-600 dark:text-gray-300">
							Join thousands of developers building amazing apps
						</p>
						<Button
							size="lg"
							variant="outline"
							className="border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							Start Building Now
						</Button>
					</CardPanel>
				</Card>
			</section>
		</div>
	);
}
