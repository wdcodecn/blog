# Repository Guidelines

## Project Structure & Module Organization
This repository is a TanStack Start app built with Vite, React 19, and TypeScript. Application code lives in `src/`. Routes are file-based under `src/routes` (for example `src/routes/index.tsx` and `src/routes/__root.tsx`). Shared UI components live in `src/components` and `src/components/ui`, hooks in `src/hooks`, utilities in `src/lib`, and TanStack Query wiring in `src/integrations/tanstack-query`. Static assets are served from `public/`.

Treat `src/routeTree.gen.ts` and the generated `src/paraglide/*` runtime files as build outputs; do not hand-edit them. The repository also includes `coss_ui_llms.txt` at the repository root; keep it in sync with the UI component library metadata and only update it intentionally. Paraglide source messages live under `project.inlang/`.

## Build, Test, and Development Commands
- `npm run dev`: start the local Vite dev server on port `3000`.
- `npm run build`: create a production build in `dist/`.
- `npm run preview`: serve the production build locally.
- `npm run test`: run the Vitest test suite once.
- `npm run lint`: run Biome lint checks.
- `npm run format`: apply Biome formatting.
- `npm run check`: run Biome’s combined formatter and linter checks.

## Coding Style & Naming Conventions
Use TypeScript and React function components. Biome is the formatter and linter; its current config uses tabs for indentation and double quotes in JavaScript/TypeScript. Run `npm run check` before opening a PR.

Follow existing naming patterns:
- Components: PascalCase file names such as `Header.tsx`
- Hooks: `use-*.ts` such as `use-media-query.ts`
- Routes: file names that match URL structure in `src/routes`

Prefer colocating small utilities with their feature, and keep reusable primitives in `src/components/ui`.

## Testing Guidelines
Vitest is configured via the `npm run test` script. Add tests as `*.test.ts` or `*.test.tsx`, ideally next to the module they cover. Prefer Testing Library for component behavior. Focus tests on route behavior, shared UI primitives, and utility logic that can regress easily.

## Commit & Pull Request Guidelines
The repository currently has no commit history, so no established commit format can be inferred yet. Use short, imperative commit subjects such as `Add locale switcher tests`. Keep commits focused.

PRs should include a concise description, testing notes, and screenshots for visible UI changes. If a change affects routing, localization, generated files, or `coss_ui_llms.txt`, call that out explicitly in the PR summary.
