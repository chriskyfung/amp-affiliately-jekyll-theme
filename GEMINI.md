# Gemini Project Context: AMP Affiliately Jekyll Theme

This document provides essential context for the Gemini AI assistant to work effectively on this theme repository.

## Project Overview

- **Project Name:** AMP Affiliately Jekyll Theme
- **Owner:** Chris KY FUNG
- **Core Purpose:** A reusable, open-source, AMP-ready theme for Jekyll blogs and websites.
- **License:** MIT License

## Core Technologies & Architecture

- **Static Site Generator:** Jekyll (`~> 4.3.x`)
- **Primary Architectural Constraint:** **AMP-first**. All layouts, includes, and styles are designed to be AMP-compliant.
- **Package Management:**
  - **Ruby:** `bundler` (`Gemfile`) for Jekyll and its plugins.
  - **Node.js:** `npm` (`package.json`) for development and build-time tooling.
- **Styling:** SCSS, with source files located in `_sass/`.
- **Build System:** Gulp.js (`gulpfile.mjs`) is used for post-processing the Jekyll build output.

## Build & Development Workflow

The primary development workflow is managed through `npm` scripts defined in `package.json`.

1. **Installation:** `npm install` (which also runs `bundle install`) to install all Node.js and Ruby dependencies.
2. **Local Development:** `npm run serve` (or `npm start`) starts the Jekyll development server with live reload enabled. This is the standard command for local theme development and previewing changes.
3. **Production Build:** `npm run build` executes the full production build process:
    - `bundle exec jekyll build` generates the static site into the `_site` directory.
    - `npx gulp build` runs a series of Gulp tasks on the output, which includes:
        - **AMP Optimization:** Running the `@ampproject/toolbox-optimizer`.
        - **HTML/CSS Minification:** Minifying all CSS and HTML files for performance.
4. **AMP Validation:** `npm run test` runs the `gulp validate` task to check the generated `_site` for AMP compliance.
5. **Deployment:** The theme itself is not deployed as a site. A GitHub Actions workflow in `.github/workflows/jekyll-build.yml` builds and deploys the _documentation and demo site_ to GitHub Pages.

## Development & Content Management

### Content: Documentation & Demos

- **Content Source:** The `_posts` directory serves a dual purpose:
    1. **Theme Documentation:** It contains all the user-facing documentation (e.g., `config-guide.md`, `front-matter-guide.md`) that is rendered and deployed to the theme's GitHub Pages site.
    2. **Demo Content:** The `_posts/theme-sample-posts/` subdirectory is used exclusively for sample posts that demonstrate the theme's features and styles.

### Content Management System (CMS)

- **Tool:** [Front Matter CMS](https://frontmatter.codes/) for VS Code is the primary tool for managing all content (both documentation and demos).
- **Distributed Configuration:** The CMS configuration is split:
  - `frontmatter.json`: The main configuration file defining content types, fields, and preview settings.
  - `.frontmatter/`: This directory contains UI customizations (`ui/external.js`) and a critical library of snippets.
  - The Front Matter CMS schema is located at https://frontmatter.codes/frontmatter.schema.json
  - The Front Matter CMS settings documentation is at https://frontmatter.codes/docs/settings
- **Snippets:** An extensive library of snippets exists in `.frontmatter/config/content/snippets/`. These are the **preferred way** to insert complex elements like AMP components, Jekyll includes, and kramdown syntax to ensure consistency and correctness.

### Developer Utilities

- **CSS to SCSS Conversion:** The `css_to_scss.sh` script is a utility to help convert CSS files into the project's standard SCSS format, streamlining style development.

### Linting

- **Tool:** `markdownlint-cli2`
- **Configuration:** `.markdownlint-cli2.yaml`
- **Key Rules:**
  - `MD013: false`: Line length is not enforced.
  - `MD033: false`: **Inline HTML is allowed and necessary.** This is required for AMP components and Jekyll includes. Do not remove raw HTML from demo posts.
  - `MD034: false`: Bare URLs are permitted.

### Commit Message Conventions

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification, with the addition of Gitmojis. The format is:

`emoji type(scope): subject`

- **Emoji:** A relevant Gitmoji character (e.g., ✨, 🐛, 📝, 🎨, ♻️, ⬆️, 🚑).
- **Type:** A standard conventional commit type (e.g., `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `build`, `ci`).
- **Scope (Optional):** The part of the theme affected (e.g., `layouts`, `sidebar`, `deps`, `scripts`).
- **Subject:** A short, imperative-tense description of the change.

**Examples from Git History:**

- `🐛 fix(layouts): adjust card title margin and list heights`
- `⬆️ chore(deps): update csv gem to version 3.3`
- `📝 docs: fix syntax highlighting link`
- `🎨 style(highlight): change background color to #222`
- `♻️ refactor(scripts): simplify build scripts`

### Key Configuration & Source Files

- `_config.yml`: Main Jekyll configuration for the _demo and documentation site_.
- `_layouts/`, `_includes/`, `_sass/`: The core directories containing the theme's templates, components, and styles.
- `_posts/`: Contains all documentation and demo content for the GitHub Pages site.
- `Gemfile`: Defines Jekyll and its plugin dependencies.
- `package.json`: Defines Node.js development dependencies and `npm` scripts.
- `gulpfile.mjs`: Contains the essential post-processing logic for AMP optimization, minification, and validation.
- `frontmatter.json`: The central configuration for the Front Matter CMS.
- `.frontmatter/`: Contains distributed Front Matter CMS configurations, including UI customizations and a rich snippet library.
- `.markdownlint-cli2.yaml`: Defines the Markdown linting rules.
- `css_to_scss.sh`: A utility script for converting CSS to SCSS.
