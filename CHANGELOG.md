# AMP Affiliately Jekyll Theme Changelog

## v2.9.0 (2024-03-08)

### Added

- Support set the URL for the privacy policy page in the `_config.yml` file.

- [#44](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/44) Implemented a Cookie Consent Notice.
  - Imported the `amp-consent` extension into the default layout to manage user consent.
  - Developed a sophisticated cookie consent interface, enabling granular consent on a per-purpose basis, located in `_includes/consent/granular-user-consent.html`.
  - Defined the associated CSS styles for the consent interface in `_includes/css/amp_consent.css`.
  - Imported the `amp_consent.css` into the HEAD element of the default layout using the Jekyll include tag, ensuring the styles are loaded at the onset of page rendering.
  - Tmported the `granular-user-consent.html` to the default layout just below the `<body>` tag via the Jekyll include tag, guaranteeing immediate visibility of the consent interface upon page load.

### Changed

- Made the `amp-script` extension mandatory in the default layout. This change is necessary for enabling custom scripts to access and read consent states stored in the local storage.

## Changelog

### Added
- [#44](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/44) Implemented a cookie consent notice banner.
  - Integrated the `amp-consent` extension into the default layout to manage user consent.
  - Developed a granular cookie consent UI, allowing users to provide consent on a per-cookie basis. The UI is created in the `_includes/consent/granular-user-consent.html` file.
  - Defined the associated CSS styles for the granular cookie consent UI in the `_includes/css/amp_consent.css` file.
  - Used Jekyll include tag to import the `amp_consent.css` to the HEAD element of the default layout. This ensures that the CSS styles for the consent UI are loaded at the start of the page load.
  - Used Jekyll include tag to import the `granular-user-consent.html` to the default layout just below the `<body>` tag. This ensures that the consent UI is immediately visible to users when the page loads.

### Changed
- Made the `amp-script` extension mandatory in the default layout. This change is necessary for custom scripts that need to read the stored consent states from the local storage.

## v2.8.0 (2024-01-15)

Release v2.8.0 contains various improvements and fixes for the project. The changes are grouped into the following categories:

### ⬆️ Dependencies

- Update cheerio to fix ReDoS vulnerability
- Update postcss for AMP Optimizer
- Update glob-parent to fix ReDoS vulnerability
- Bump semver from 5.7.1 to 5.7.2
- Bump caniuse-lite from 1.0.30001431 to 1.0.30001576
- Bump decode-uri-component from 0.2.0 to 0.2.2

### 🎨 Style

- Rebuild minified CSS and SCSS files for the theme
- Hide Disqus ads and GitHub sponsor button with CSS
- Format Liquid snippets in the post.html file

### 🐛 Fixes

- Resolve AMP optimizer warning in the continuous integration workflow
- Resolve a conflict caused by the Jekyll Archives plugin in the build process
- Fix the AMP CSS issue and the Iframe issue in AMP
- Fix the potential XSS vulnerability in jQuery

### ✨ Features

- Add AMP Optimizer logs to the gulp task
- Hide the `gh-pages` branch from the Git Graph in VS Code

### 🗑️ Removed/Deprecated

- Remove VigLink affiliate program from the theme
- Remove amp-link-rewriter extension from the theme
- Remove the CodeQL Action from the GitHub Workflows as it is deprecated
- Schedule the deprecation of some gulp modules that are no longer needed

### ♻️ Refactor

- Simplify author logic in the post.html file

### 🔧 Chore

- Update the Front Matter CMS database and the recommended VS Code extensions
- Update the Actions to run on Node 16 instead of Node 12

### 📝 Documentations

- Fix typos and broken links in the README file
- Fix broken links in Config Guide and Media pages
- Remove jekyll-gist from whitelist package list in the Plugin page
- Add the docs for embedding gists by using the `<amp-gist>` components to the Code page

### Related Issue(s)

- [#27](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/27)
- [#45](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/45)
- [#46](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/46)
- [#48](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/48)
- [#49](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/49)
- [#50](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/50)
- [#52](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/52)
