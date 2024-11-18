# AMP Affiliately Jekyll Theme Changelog

<!-- markdownlint-disable MD024 -->

## v3.1.0 (2024-11-18)

### 🐛 Fixes

- Fixed GA4 `outgoing_click` event tracking variables in `default.html` [#78](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/78):
  - Removed outdated `ga4Event` request.
  - Updated variables to use `event_name`, `method`, `link_url`, and `outbound`.
- Resolved last modified date format in config guide.
- Corrected GA4 event tracking configuration for YouTube videos [#77](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/77):
  - Changed `request` type from `ga4Event` to `event` for video play, pause, and end triggers.
  - Updated event variables for improved tracking accuracy:
    - `event_name` set to `video_start`, `video_paused`, and `video_complete` respectively.
    - Added `method`, `video_current_time`, `video_duration`, `video_percent`, `video_provider`, `video_title`, and `video_url` to event variables.

### ✨ Features

- Footer Column Customization:
  - Introduced a new feature to customize the second and third footer columns (col1 and col2) through the _config.yml file.
  - Allows setting column titles and defining link lists for improved navigation and organization.
- Added video percentage played tracking for GA4:
  - Introduced a new event trigger `VideoPercentagePlayed` for tracking video progress at specific intervals:
    - Triggers on `video-percentage-played`.
    - Tracks `video_current_time`, `video_duration`, `video_percent`, `video_provider`, `video_title`, and `video_url`.
    - Records progress at 10%, 25%, 50%, and 75% intervals.

### 🗑️ Removed/Deprecated

- Removed AddThis share buttons and related configurations from `_includes/blocks/share-buttons.html`, `_layouts/default.html`, `_layouts/post-left-sidebar.html`, and `_layouts/post.html`.
- Removed `addthis_inline_share_toolbox` styles from `_sass/old_files/main.scss`.
- Removed outdated Google Analytics configurations in `youtube.html` and `default.html`.
- Removed `dedsec727.jekyll-run` from `.vscode/extensions.json`.

### ♻️ Refactors

- Refactored conditional check for `site.ga4` in `postproc-content.html`.
- Updated example configuration files to use GA4 Measurement ID.
- Reorganized useful links in sidebar to include only relevant and up-to-date links.
- Added 'About Me' and 'My Projects' links to the useful links sidebar.
- Updated post categories for better content organization:
  - Removed 'doc' category from '2017-11-27-media.md' and '2017-11-28-code.md'.
  - Changed 'ads-settings.md' category from '[feature, doc]' to '[doc]'.
- Improved YouTube embed attribute organization:
  - Initialized `video_url` at the beginning for consistent URL handling.
  - Optimized playlist URL assignment.
  - Refined title handling and added `data-vars` attributes.
  - Added unique IDs to `amp-youtube` elements for better tracking.
- Removed inline GA4 tracking script from YouTube embed:
  - Deleted the `amp-analytics` configuration for GA4 tracking, including all triggers and event configurations.
- Centralized GA4 configuration to a new include file `_includes/blocks/ga4-config.html`:
  - Defined `gtag_id`, `config`, and `trackAnchorClicks` trigger within the new include file.
  - Ensured the layout file now includes the GA4 configuration via the new include file for better maintainability and modularity.
- Modularized site content processing:
  - Created a new include file `_includes/blocks/site_content_postproc.html`.
  - Included `{{ include.content }}` to render the main content.
  - Added conditional inclusion of GA4 configuration.
  - Replaced direct content inclusion with the new include for better modularity and maintainability.
- Dynamically included YouTube video events in GA4 configuration:
  - Added logic to dynamically generate GA4 trigger configuration for `amp-youtube` components based on video attributes.
  - Constructed video URLs and conditionally included GA4 configuration with dynamically generated YouTube video event triggers.
- Optimized GA4 tracking for multiple YouTube videos:
  - Added dynamic selectors for `amp-youtube` components and configured GA4 triggers.
  - Simplified logic to extract `data-videoid` attributes and generate selectors.
  - Generated a consolidated list of selectors for efficient event tracking.

### 📝 Documentation

- Created a new documentation page, "Footer Configuration," providing detailed guidance on customizing footer columns and options.
- Updated the "Config Guide" page to include the latest information about footer options.
- Updated README and Front Matter Guide to reflect the removal of discontinued AMP AddThis components and services.
- Updated README and Config Guide to highlight Google Analytics 4 (GA4).
- Added detailed instructions for outbound link tracking with GA4.
- Updated the section on modifying external links to open in a new tab.
- Improved structure and clarity of post-processing documentation.
- Expanded explanations and examples to provide better guidance for users.
- Updated media post with correct AMP validation error format.
- Improved guide for embedding audio.
- Added example config for local navigation menu items.
- Enhanced link tracking and external link behavior sections in the config guide.
- Added Code of Conduct for community behavior standards.

### 🛠️ Chores

- Updated Jekyll scripts for live reload:
  - Added `--livereload` flag to `jekyll` script.
  - Added `--livereload` flag to `jekyll:trace` script.
- Configured MD046 rule for markdownlint:
  - Configured the rule to use the fenced style for code blocks in VS Code settings.
  - Ensured consistent and readable markdown documentation.
- Updated frontMatter extension settings in VS Code:
  - Set `jekyll` as the framework for proper functionality.
  - Enhanced start command for better debugging and live reloading by adding `--trace --livereload`.

## v3.0.0 (2024-09-29)

### 🐛 Fixes

- Resolved preload request credentials mismatch for 'logo-plainSVG.svg'.
- Resolved CORS policy error by hosting image on the same domain.

### ♻️ Refactors

- Renamed `gulpfile.js` to `gulpfile.mjs` to support ES module syntax.
- Added `css_to_scss.sh` script to convert CSS files to SCSS using `sass-convert`.
- Updated SCSS files for various AMP components using the new `css_to_scss.sh` script.

### 🗑️ Removed/Deprecated

- Uninstalled `trim-newlines` and `gulp-format-md` from dev dependencies.
- Removed deprecated `gulp-minify-inline` task from `gulpfile.mjs`.
- Removed deprecated `css2scss` task and `@gecka/styleflux` from the gulp pipeline.
- Removed overrides for `gulp` dependencies: `glob-watcher`, `minimatch`, `semver`, `set-value`, and `vinyl-fs`.

### 💚 CI/CD

- Migrated Jekyll build action from deprecated `helaili/jekyll-action` to a new, maintained workflow.
- Removed deprecated `deploy-jekyll.yml` workflow file due to `helaili/jekyll-action` deprecation.

### ⬆️ Dependencies

- Bumped `@ampproject/toolbox` from 2.9.0 to 2.10.1.
- Upgraded `gulp` to version 5.0.0.
- Upgraded `amphtml-validator` to version 1.0.38.
- Upgraded `gulp-amphtml-validator` to version 1.0.8.
- Added `gulp-changed` for improved file change detection.
- Replaced `gulp-htmlmin` with `gulp-html-minifier-terser` for better HTML minification.
- Updated `package.json` to include new dependencies and set `type` to `module`.

### 📝 Documentation

- Updated the status badge for CodeQL action.
- Updated the status badge for Jekyll build workflow.
- Updated README to document the new Jekyll build workflow. Included details on the new workflow steps and configuration.

## v2.9.1 (2024-03-12)

### 🐛 Fixes

- Removed the `data-ampdevmode` attribute from the `<amp-script>` component in non-development environments. This attribute was previously used to enable development-specific features, such as the ability to load scripts from a local server. However, it was found to cause unintended behavior in production environments, such as preventing scripts from running or causing validation errors. By removing this attribute in non-development environments, we ensure that AMP pages are always served with the correct configuration and that scripts are executed as intended.

### ✨ Features

- Introduced two new options to the site configuration:
  - `amp_optimizer`: Set to true if you run AMP Optimizer after building the Jekyll site. Defaults to false.
  - `script_hash`: A hash for the `get_stored_consentStates` script. Defaults to empty.

### 📝 Documentation

- Corrected a typo in the `.github-sponsors-button` CSS class, resolving an error.
- Updated badges that were labeled with incorrect version numbers.
- Migrated `<span class="badge ..."">` elements to use the kramdown attribute syntax: `<span>...</span>{:.badge...}`.
- Utilized reference links for inline markdown links in cases where lines become excessively long.
- Inserted a line break after each badge using `<br>` tags.
- Added `<br>` tags to create line breaks before default values.
- Enhanced table styling by applying vertical-align: top to `th` and `td` elements.
- Introduced two new CSS classes, `.blue` and `.green`, to provide additional styling options.
- Appended `.green` to inline code blocks containing the text "true".
- Appended `.blue` to inline code blocks containing non-boolean default values.
- Removed the `.plaintext` CSS class to streamline the styling.

## v2.9.0 (2024-03-08)

### ✨ Features

- Added ability to customize the URL for the privacy policy page via the `_config.yml` file.

- Implemented a granular Cookie Consent Notice ([#44](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues/44)):
  - Integrated the `amp-consent` extension to manage user consent.
  - Developed a comprehensive cookie consent interface that allows for detailed consent management based on specific purposes.
  - Implemented CSS styles for the consent interface.
  - Incorporated the consent interface into the default layout, ensuring its visibility upon page load.
  - Enabled the consent UI when `consent: true` is set in the `_config.yml` file.
  - Provided an option to remove the `data-ampdevmode` attribute from the custom script by setting `consent_dev_mode=false`.
  - Implemented blocking of AddThis, Disqus, Google Analytics, and Google AdSense until user consent is obtained.

### 🔧 Chore

- Extended the import of the `amp-script` extension to include cases where the consent UI is enabled, allowing custom scripts to access consent states stored locally.
- Updated to the latest official Google Analytics 4 support.

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
