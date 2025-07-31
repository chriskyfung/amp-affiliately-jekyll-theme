# AMP Affiliately Jekyll Theme Changelog

<!-- markdownlint-disable MD024 -->

All notable changes to the AMP Affiliately Jekyll Theme will be documented in this file.

## [3.4.1] - 2025-08-01

### Fixed

- **Layouts**: Adjusted card title margin, list heights, and corrected HTML structure in featured post cards to fix layout misalignments.
- **AMP**: Resolved validation errors for the code block toggle feature by adding missing `role` and `tabindex` attributes.

### Added

- **Development**: Added `markdownlint` scripts for ensuring documentation quality.

### Changed

- **Styling**: Changed the background color for syntax highlighting to improve contrast.

### Refactors

- **Scripts**: Refactored and simplified build scripts in `package.json` for better clarity and maintainability.
- **Scripts**: Created a `test` alias for the AMP validation script.
- **Gulp**: Removed commented-out code from `gulpfile.mjs`.

### Documentation

- **Configuration Guide**: Refined and improved documentation for global settings, installation, navigation, sorting, post-processing, sidebar, social buttons, footer, cookie consent, SEO, and third-party services.
- **README**: Updated and reorganized the main `README.md` file for better clarity.
- **Syntax Highlighting**: Fixed a broken link for the syntax highlighting documentation.

### Dependencies

- Bumped `gulp` from `5.0.0` to `5.0.1`.
- Bumped `@ampproject/toolbox-optimizer` from `^2.9.0` to `^2.10.1`.
- Added the `faraday-retry` gem for improved network request handling.
- Updated core Ruby dependencies:
  - `rake` (13.2.1 → 13.3.0)
  - `public_suffix` (6.0.1 → 6.0.2)
  - `bigdecimal` (3.1.9 → 3.2.2)
  - `ffi` (1.17.1 → 1.17.2)
  - `rexml` (3.4.0 → 3.4.1)
  - `rouge` (4.5.1 → 4.6.0)
  - `google-protobuf` (4.29.3 → 4.31.1)
  - `sass-embedded` (1.83.4 → 1.89.2)
  - `jekyll-sass-converter` (3.0.0 → 3.1.0)
  - `json` (2.9.1 → 2.13.2)
  - `logger` (1.6.5 → 1.7.0)
  - `faraday-net_http` (3.4.0 → 3.4.1)
  - `faraday` (2.12.2 → 2.13.4)
  - `csv` (3.1 -> 3.3)

### Chore

- Ignored `.notes.md` in `.gitignore`.

## [3.4.0] - 2025-03-04

### Added

- **Consent Management**: Implemented conditional rendering of consent UI based on page settings, with AMP geo support and per-page visibility control.
- **YouTube Integration**: Introduced consent-based rendering for YouTube embeds with AMP image placeholders.
- **iubenda Integration**: Added TCF integration in the AMP Cookie Consent embed and a remote consent URL using a Cloudflare Worker for geo-detection.

### Fixed

- **AMP**: Resolved an issue where `<amp-consent>` was missing when `consent_ui: false`.
- **Disqus**: Corrected consent purposes for the Disqus integration.
- **Documentation**: Fixed broken links and references in the iubenda documentation.

### Changed

- **Documentation**: Enhanced iubenda documentation with geo-targeting guides and improved the style guide's layout and typography.
- **Layouts**: Refactored footer configuration links and updated the featured posts structure.

## [3.3.1] - 2025-01-29

### Fixed

- **iubenda**: Corrected TCF purposes configuration, updated to Google Consent Mode v2, and ensured accurate GA4 signal transmission.
- **Consent**: Fixed a typo in the built-in granular user consent label and addressed spacing issues.

### Added

- **Consent**: Enhanced the built-in granular user consent with dynamic domain and state handling.
- **GA4**: Implemented linker configuration for cross-domain tracking.

### Documentation

- **README**: Updated to include new features in v3.x.x, such as iubenda support, GA4 integration, and a customizable footer.
- **Configuration Guide**: Added deprecation notices for legacy consent attributes.

### Chore

- **Configuration**: Removed unused `amp_optimizer` and commented-out consent settings from `_config.yml`.

## [3.3.0] - 2025-01-25

### Added

- **Consent Management**: Introduced a `consent_preview` option, integrated the iubenda CMP, and updated ad/Disqus components to use the remote consent URL.
- **404 Page**: Added a custom-styled 404 error page.
- **Disqus**: Implemented an AMP embed for Disqus with dynamic configuration and custom styles.

### Fixed

- **Styling**: Renamed `amp-ad-styles` to `amp-ad` for consistency and updated styles for ads and Disqus.
- **Frontmatter**: Standardized keys for category naming.

### Changed

- **Styling**: Improved typography, line heights, and table of contents styling for article posts.
- **Dependencies**: Updated Ruby version to `3.3.6`, optimized gem declarations, and added support for the `x64-mingw-ucrt` platform in `sass-embedded`.

### Documentation

- **Consent**: Published a blog post introducing the iubenda AMP Cookie Solution and updated related guides.
- **Configuration**: Added the `consent_preview` attribute to the configuration guide.

### Chore

- **CI/CD**: Updated the Ruby version to `3.3.6` in the Jekyll build workflow.
- **Development**: Updated VS Code settings and extensions to improve the development workflow.
- **Jekyll**: Added a Liquid engine configuration.
- **Linting**: Introduced a `markdownlint` configuration and fixed existing warnings.

## [3.2.0] - 2024-12-06

### Added

- **Headings**: Streamlined anchor link addition for `h2`, `h3`, and `h4` headings.
- **GA4**: Added a custom `ampHost` parameter and enabled debug mode in development environments.
- **Ads**: Implemented a fallback to non-personalized ads for unknown consent status.

### Fixed

- **Links**: Improved outbound link modification logic.
- **GA4**: Corrected configuration logic and video tracking conditions.
- **AMP**: Resolved a validation error for `<amp-youtube>` by using the correct `credentials="omit"` attribute.
- **Build**: Skipped redirect pages during AMP validation.

### Refactors

- **Code Quality**: Enhanced the readability and maintainability of post-processing content.
- **Performance**: Optimized the HTML layout and ad rendering for the production environment.
- **GA4**: Updated GA4 configuration for YouTube and outbound link tracking.

### Documentation

- **GA4**: Created a new post with setup instructions, feature documentation, and debugging guides.
- **YouTube**: Added a new post explaining AMP YouTube embedding.
- **Front Matter CMS**: Added snippet usage instructions and a setup guide.
- **Code Comments**: Enhanced comments in GA4, post-processing, consent, and navigation templates.

### Chore

- **Dependencies**: Updated various gem dependencies.
- **Frontmatter**: Enhanced `frontmatter.json` with new fields, placeholders, and improved image rendering logic.
- **Snippets**: Added detailed snippets for AMP multimedia, Jekyll, and kramdown syntax.

## [3.1.0] - 2024-11-18

### Added

- **Footer**: Introduced options to customize the second and third footer columns via `_config.yml`.
- **GA4**: Implemented video percentage tracking for `10%`, `25%`, `50%`, and `75%` intervals.

### Fixed

- **GA4**: Corrected `outgoing_click` event tracking variables and resolved issues with YouTube event tracking.
- **Documentation**: Resolved an issue with the last modified date format in the configuration guide.

### Removed

- **AddThis**: Removed AddThis share buttons and related configurations.
- **Google Analytics**: Removed outdated Google Analytics configurations.

### Refactors

- **GA4**: Centralized GA4 configuration into a new include file (`_includes/blocks/ga4-config.html`) and modularized site content processing.
- **YouTube**: Improved the YouTube embed attribute organization and removed the inline GA4 tracking script.
- **Layouts**: Reorganized sidebar links and updated post categories for better content organization.

### Documentation

- **Footer**: Created a new documentation page for footer configuration.
- **GA4**: Updated the README and configuration guide to highlight GA4 features and outbound link tracking.
- **Community**: Added a Code of Conduct.

### Chore

- **Jekyll**: Added the `--livereload` flag to Jekyll scripts for a better development experience.
- **Linting**: Configured `markdownlint` to enforce a consistent style for code blocks.

## [3.0.0] - 2024-09-29

### Removed

- **Dependencies**: Uninstalled `trim-newlines` and `gulp-format-md`.
- **Gulp**: Removed deprecated `gulp-minify-inline` and `css2scss` tasks.

### Dependencies

- **NPM**: Upgraded `gulp` to `5.0.0`, `@ampproject/toolbox` to `2.10.1`, and replaced `gulp-htmlmin` with `gulp-html-minifier-terser`.
- **NPM**: Set `"type": "module"` in `package.json`.

### Refactors

- **Gulp**: Renamed `gulpfile.js` to `gulpfile.mjs` to support ES module syntax.
- **Styling**: Added a `css_to_scss.sh` script to convert CSS files to SCSS.

### Chore

- **CI/CD**: Migrated the Jekyll build action from the deprecated `helaili/jekyll-action` to a new workflow.

### Documentation

- **README**: Updated status badges and documented the new Jekyll build workflow.

## [2.9.1] - 2024-03-12

### Fixed

- **AMP**: Removed the `data-ampdevmode` attribute from `<amp-script>` in non-development environments to prevent validation errors.

### Added

- **Configuration**: Introduced `amp_optimizer` and `script_hash` options to the site configuration.

### Styling

- **Tables**: Enhanced table styling by setting `vertical-align: top`.
- **Badges**: Introduced `.blue` and `.green` classes for styling inline code blocks.

### Documentation

- **Styling**: Corrected a typo in the `.github-sponsors-button` CSS class.
- **Badges**: Updated outdated version numbers on badges and migrated `<span>` elements to use kramdown's attribute syntax.

## [2.9.0] - 2024-03-08

### Added

- **Privacy**: Added the ability to customize the privacy policy URL via `_config.yml`.
- **Consent**: Implemented a granular cookie consent notice using `amp-consent`, with options to block components until consent is given.

### Chore

- **AMP**: Extended the import of the `amp-script` extension to allow custom scripts to access locally stored consent states.
- **GA4**: Updated to the latest official Google Analytics 4 support.

## [2.8.0] - 2024-01-15

### Fixed

- **Build**: Resolved an AMP optimizer warning and a conflict with the Jekyll Archives plugin.
- **Security**: Addressed a potential XSS vulnerability in jQuery.

### Added

- **Gulp**: Added AMP Optimizer logs to the gulp task.
- **Git**: Hid the `gh-pages` branch from the Git Graph in VS Code.

### Removed

- **VigLink**: Removed the VigLink affiliate program and the `amp-link-rewriter` extension.
- **CI/CD**: Removed the deprecated CodeQL Action from GitHub Workflows.

### Dependencies

- **NPM**: Updated `cheerio`, `postcss`, `glob-parent`, `semver`, `caniuse-lite`, and `decode-uri-component` to address security vulnerabilities.

### Refactors

- **Layouts**: Simplified the author logic in the `post.html` template.

### Documentation

- **Content**: Fixed typos and broken links in the README, configuration guide, and other documentation files.
- **Gists**: Added documentation for embedding gists using the `<amp-gist>` component.

### Related Issue(s)

- [#27](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/27)
- [#45](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/45)
- [#46](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/46)
- [#48](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/48)
- [#49](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/49)
- [#50](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/50)
- [#52](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/52)
