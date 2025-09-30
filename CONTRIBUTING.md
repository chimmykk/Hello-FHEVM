# Contributing to this project

Thanks for your interest in contributing! This repository is a TypeScript + React documentation site powered by Vocs and Tailwind CSS.

- Main config files: `vocs.config.tsx`, `tsconfig.json`, `tailwind.config.js`
- Package manager: pnpm (a `pnpm-lock.yaml` is present)
- Key scripts (from `package.json`):
  - `pnpm dev` → `vocs dev`
  - `pnpm build` → `vocs build`
  - `pnpm preview` → `vocs preview`

## Getting started

1. Fork the repo and create your feature branch from `main`.
2. Prerequisites:
   - Node.js LTS (v18+ recommended)
   - pnpm (recommended): https://pnpm.io/installation
3. Install dependencies:
   ```bash
   pnpm install
   ```
   If you prefer npm or yarn (not recommended for commits to this repo), use at your own risk:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Run the docs locally:
   ```bash
   pnpm dev
   ```
   The dev server URL will be printed in the terminal.

## Making changes

- Place or edit documentation content under `pages/` and `public/` as appropriate.
- Update navigation in `sidebar.ts` if you add new sections.
- Shared UI/layout lives in `layout/`, `layout.tsx`, and `components/`.
- Keep TypeScript types accurate; the project uses `tsconfig.json`.
- Tailwind styles can be edited in `styles.css` and configured via `tailwind.config.js`.

## Code style

- Use TypeScript and modern ES syntax.
- Prefer React function components and hooks.
- Keep components small and focused. Co-locate small utilities next to their usage when practical.
- Formatting: If you have an editor formatter (e.g., Prettier), use it with default settings. Aim for consistent style.

## Commits and branches

- Branch naming: `feature/<short-name>`, `fix/<short-name>`, or `docs/<short-name>`.
- Commit messages: follow Conventional Commits where possible, e.g.:
  - `feat: add new example page`
  - `fix: correct sidebar link`
  - `docs: update README with setup steps`

## Running a production build

Before opening a PR, verify the site builds:
```bash
pnpm build
pnpm preview
```
Open the preview URL to sanity-check content and styling.

## Accessibility and content guidelines

- Use clear headings and concise language.
- Prefer code blocks with proper language fences for syntax highlighting.
- Add alt text for images in `public/` and ensure contrast is readable.
- Keep examples minimal but executable where applicable.

## Submitting a pull request

1. Ensure your branch is up-to-date with `main`.
2. Verify local build succeeds and there are no TypeScript errors.
3. Push your branch and open a PR:
   - Describe the change and rationale.
   - Include screenshots or GIFs for visual changes.
   - Link related issues if applicable.
4. Address review feedback; keep commits focused. Squash before merge if requested.

## Reporting issues

- Use a descriptive title and steps to reproduce.
- Include environment info (OS, Node, and how you ran the project).
- Add logs or screenshots when relevant.

## Questions

If you’re unsure about anything, feel free to open a draft PR or start a discussion in your issue. Thanks again for contributing!
