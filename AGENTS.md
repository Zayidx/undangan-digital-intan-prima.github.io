# Repository Guidelines

## Project Structure & Module Organization

This repository is a dependency-free, single-page digital invitation:

- `index.html` contains the page structure, invitation text, accessibility labels, and links to styles/scripts.
- `style.css` defines the mobile-first layout, theme variables, animations, and responsive rules.
- `script.js` handles opening the invitation, scroll reveals, and background parallax.
- `assets/` stores local photos and decorative PNG files.
- `README.md` documents basic use and common content replacements.

Keep new assets in `assets/` and reference them with relative paths. Avoid adding build output or downloaded dependencies to the repository.

## Build, Test, and Development Commands

No package manager or build step is required. Open `index.html` directly for a quick preview, or serve the directory locally:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`. A local server is preferred when checking browser behavior and remote font or image loading. There is currently no automated test command.

## Coding Style & Naming Conventions

Use two-space indentation in HTML, CSS, and JavaScript. Preserve the existing vanilla HTML/CSS/JS approach unless a dependency clearly reduces project complexity.

- Use semantic HTML elements and meaningful Indonesian accessibility text.
- Name CSS classes with lowercase kebab-case, such as `.school-header` or `.tap-hint`.
- Reuse theme values from `:root` before introducing new colors.
- Use `const` by default in JavaScript, camelCase identifiers, and semicolons.
- Keep responsive changes in focused `@media` rules.

Do not reformat unrelated sections. Ensure text files remain UTF-8, especially for Indonesian and Arabic content.

## Testing Guidelines

Manually test changes in current Chromium and, when practical, Firefox. Verify the invitation opens by mouse and keyboard, reveal animations trigger while scrolling, links and assets load without console errors, and the layout remains usable at 360 px and 420 px widths. For content edits, check dates, addresses, phone numbers, image cropping, and special-character rendering.

## Commit & Pull Request Guidelines

Git history is not included in this workspace, so no repository-specific commit convention can be inferred. Use short, imperative subjects, for example `Fix mobile invitation spacing`. Keep each commit focused.

Pull requests should explain the user-visible change, list manual checks performed, and include before/after screenshots for visual updates. Link the relevant issue when one exists and note any new external asset or font dependency.
