# AMP Affiliately Jekyll Theme Changelog

<!-- markdownlint-disable MD024 -->

All notable changes to the AMP Affiliately Jekyll Theme will be documented in this file.

## [3.4.1] - 2025-07-31

### Changed

- **Dependencies**
  - Updated core dependencies:
    - rake (13.2.1 → 13.3.0)
    - public_suffix (6.0.1 → 6.0.2)
    - bigdecimal (3.1.9 → 3.2.2)
    - ffi (1.17.1 → 1.17.2)
    - rexml (3.4.0 → 3.4.1)
    - rouge (4.5.1 → 4.6.0)
    - google-protobuf (4.29.3 → 4.31.1)
    - sass-embedded (1.83.4 → 1.89.2)
    - jekyll-sass-converter (3.0.0 → 3.1.0)
    - json (2.9.1 → 2.13.2)
    - logger (1.6.5 → 1.7.0)
    - faraday-net_http (3.4.0 → 3.4.1)
    - faraday (2.12.2 → 2.13.4)

### Added

- Added `faraday-retry` gem for improved network request handling

## [3.4.0] - 2025-03-04

### Added

- **Consent Management**
  - Conditional rendering of consent UI based on page settings
  - AMP geo support with consent override functionality
  - Per-page control for consent UI visibility via frontmatter

- **YouTube Integration**
  - Consent-based rendering for YouTube embeds
  - AMP image placeholders for YouTube videos

- **iubenda Integration**
  - TCF integration in AMP Cookie Consent embed
  - Remote consent URL using Cloudflare Worker for geo-detection

### Fixed

- Missing `<amp-consent>` issue when `consent_ui: false`
- Consent purposes for Disqus integration
- Links and references in iubenda documentation

### Changed

- Enhanced iubenda documentation with geo-targeting guides
- Improved style guide layout and typography
- Refactored footer configuration links
- Updated featured posts structure

## [3.3.1] - 2025-01-29

### Fixed

- **Iubenda**
  - TCF purposes configuration for consent management
  - Google Consent Mode V2 for AMP Cookie Consent
  - Configure gtag to pass the page location, referrer, and title from the parent window of the iframe for accurate Google Consent Signal

- **Built-in Granular User Consent**
  - Correct typo in functionality label
  - Fix spacing in `consent_type` switch statements

### Added

- **Built-in Granular User Consent**
  - Enhance consent with dynamic domain and state handling

- **GA4**
  - Linker configuration for cross-domain tracking

### Documentation

- **README**
  - Update README with new features in v3.x.x, including Iubenda support, GA4 integration, customizable footer, and improved development experience

- **Config Guide**
  - Add deprecation notices to consent attributes

### Chores

- **_config.yml**
  - Remove unused `amp_optimizer` and commented-out consent settings

## [3.3.0] - 2025-01-25

### Fixed

- **Styles**
  - Rename CSS and SCSS files from `amp-ad-styles` to `amp-ad` for consistency
  - Update `amp-ad` and `amp-iframe` styles for non-built state of ads units and Disqus embed

- **Frontmatter**
  - Update keys for consistency in category naming

### Added

- **Consent Management**
  - `consent_preview` option to control consent display in non-development environments
  - Iubenda consent management system to AMP theme
  - Conditional inclusion of Iubenda styles and templates
  - Site and cookie policy IDs to configuration and create AMP cookie consent embed
  - Update consent handling for ad components based on remote consent URL
  - Update Disqus consent handling for Iubenda cookie solution

- **404 Page**
  - Custom 404 error page with styling

- **SCSS**
  - Update typography and line heights for article posts
  - Refine article post styles and improve typography
  - Enhance table of contents styling
  - Update default background color for callout component

- **Disqus**
  - AMP embed for Disqus comments with dynamic configuration
  - Update Disqus embed script source to use dynamic shortname
  - Custom styles for Disqus comments section

### Documentation

- **Config**
  - Add cookie consent preview attribute to documentation

- **Consent**
  - Blog post introducing Iubenda AMP Cookie Solution in version 3.3.0
  - Update config guide and introduction for Iubenda AMP Cookie Solution
  - Update link to Iubenda documentation for cookie consent customization

### Dependencies

- **Gemfile**
  - Optimize `tzinfo` gem declarations and enhance comments
  - Update platform-specific gem declarations for Windows compatibility
  - Update Ruby version from `3.1.2` to `3.3.6` and gem dependencies
  - Add support for x64-mingw-ucrt platform in sass-embedded

### CI/CD

- **Workflow**
  - Update Ruby version to `3.3.6` in Jekyll build configuration

### Chores

- **VS Code**
  - Disable HTML style validation in settings
  - Remove AMP HTML validator extension and add Markdown Table extension
  - Add VS Code extensions for enhanced Jekyll development

- **Liquid**
  - Add liquid engine configuration for Jekyll

- **Markdownlint**
  - Add markdownlint configuration file and update VSCode settings
  - Fix markdownlint warnings in multiple files

## [3.2.0] - 2024-12-06

### Fixed

- Improved link modification logic for outbound links in `postproc-content.html`
- Corrected filename typo for `jekyll-highlight-tags.json`
- Fixed GA4 configuration logic in `ga4-config.html`
- Corrected conditional logic for GA4 video tracking
- Resolved AMP validation error for `<amp-youtube>` component by using the correct `credentials="omit"` attribute
- Skipped redirect pages during AMP validation
- Corrected image registration logic in `external.js`

### Added

- Streamlined anchor link addition for headings (`h2`, `h3`, `h4`)
- Custom parameter `ampHost` to GA4 for AMP pages
- Enabled GA4 debug mode in development environments
- Non-personalized ads fallback for unknown consent status

### Documentation

- Added new post `2024-11-21-google-analytics-4.md` for GA4 features in AMP
  - Setup instructions, supported features, event tracking, and debugging AMP analytics

- Enhanced comments in GA4 and post-processing templates
  - Updated `_includes/blocks/ga4-config.html`, `_includes/blocks/postproc-content.html`, and `_includes/blocks/site_content_postproc.html`

- Added comprehensive comments to `granular-user-consent.html`

- Enhanced comments in navigation components
  - Updated `_includes/main-nav/navigation.html`, `_includes/youtube.html`, `_includes/main-nav/local-menu.html`, and `_includes/main-nav/global-dropdown.html`

- Added new post `_posts/2024-11-23-amp-youtube.md`
- Updated posts for media embedding instructions
- Advanced configuration and developer traffic filtering for GA4
- Snippet usage instructions and setup guide for Front Matter CMS

### Refactors

- Enhanced readability and maintainability of post-processing content
- Optimized HTML layout for production environment
- Streamlined ad rendering for non-production environments
- Enabled GA4 debug mode for non-production environments
- Updated GA4 configuration for YouTube and outbound link tracking
- Removed unused Google Tag Manager (GTM) IDs from configuration files

### Chores

- Updated Jekyll scripts for live reload
- Bumped dependencies
  - Updated gems: `liquid`, `webrick`, `addressable`, `public_suffix`, `faraday`, `faraday-net_http`, `json`, `logger`, `net-http`, `uri`, `concurrent-ruby`, `i18n`, `jekyll-github-metadata`, `octokit`, `kramdown`, `listen`, `rb-inotify`, `tzinfo`, and `tzinfo-data`

- Updated media post, references, and YouTube embedding instructions
- Updated `frontmatter.json` for enhanced configuration and content management
  - Added `layout`, `author`, SEO description fields, hidden fields for advanced content management, AMP components, custom HTML header, enhanced featured image field, and removed the `draft` field
  - Added permalink placeholder, slug template for accurate preview URLs, `redirect_from` field, and external script for custom card image
  - Enhanced descriptions and visibility of fields
  - Added `clearEmpty` property for content types
  - Added comments and `redirect_to` fields for better content management
  - Improved image rendering logic in `external.js`

- Added detailed snippets for AMP multimedia, Jekyll, and kramdown syntax
- Enhanced snippet usage instructions and setup guide
- Updated image assets and metadata references for better organization and consistency
- Updated `package.json` build scripts
- Added and removed VSCode extensions
- Enhanced Git Graph settings in VSCode for better branch management and visibility

## [3.1.0] - 2024-11-18

### Fixed

- GA4 `outgoing_click` event tracking variables in `default.html`
  - Removed outdated `ga4Event` request
  - Updated variables to use `event_name`, `method`, `link_url`, and `outbound`

- Resolved last modified date format in config guide

- Corrected GA4 event tracking configuration for YouTube videos
  - Changed `request` type from `ga4Event` to `event` for video play, pause, and end triggers
  - Updated event variables for improved tracking accuracy
    - `event_name` set to `video_start`, `video_paused`, and `video_complete` respectively
    - Added `method`, `video_current_time`, `video_duration`, `video_percent`, `video_provider`, `video_title`, and `video_url` to event variables

### Added

- Footer Column Customization
  - Customize the second and third footer columns (col1 and col2) through the _config.yml file
  - Allows setting column titles and defining link lists for improved navigation and organization

- Video percentage played tracking for GA4
  - New event trigger `VideoPercentagePlayed` for tracking video progress at specific intervals
    - Triggers on `video-percentage-played`
    - Tracks `video_current_time`, `video_duration`, `video_percent`, `video_provider`, `video_title`, and `video_url`
    - Records progress at 10%, 25%, 50%, and 75% intervals

### Removed/Deprecated

- Removed AddThis share buttons and related configurations
- Removed `addthis_inline_share_toolbox` styles
- Removed outdated Google Analytics configurations
- Removed `dedsec727.jekyll-run` from `.vscode/extensions.json`

### Refactors

- Refactored conditional check for `site.ga4` in `postproc-content.html`
- Updated example configuration files to use GA4 Measurement ID
- Reorganized useful links in sidebar to include only relevant and up-to-date links
- Added 'About Me' and 'My Projects' links to the useful links sidebar
- Updated post categories for better content organization
  - Removed 'doc' category from '2017-11-27-media.md' and '2017-11-28-code.md'
  - Changed 'ads-settings.md' category from '[feature, doc]' to '[doc]'

- Improved YouTube embed attribute organization
  - Initialized `video_url` at the beginning for consistent URL handling
  - Optimized playlist URL assignment
  - Refined title handling and added `data-vars` attributes
  - Added unique IDs to `amp-youtube` elements for better tracking

- Removed inline GA4 tracking script from YouTube embed
  - Deleted the `amp-analytics` configuration for GA4 tracking, including all triggers and event configurations

- Centralized GA4 configuration to a new include file `_includes/blocks/ga4-config.html`
  - Defined `gtag_id`, `config`, and `trackAnchorClicks` trigger within the new include file
  - Ensured the layout file now includes the GA4 configuration via the new include file for better maintainability and modularity

- Modularized site content processing
  - Created a new include file `_includes/blocks/site_content_postproc.html`
  - Included `{{ include.content }}` to render the main content
  - Added conditional inclusion of GA4 configuration
  - Replaced direct content inclusion with the new include for better modularity and maintainability

- Dynamically included YouTube video events in GA4 configuration
  - Added logic to dynamically generate GA4 trigger configuration for `amp-youtube` components based on video attributes
  - Constructed video URLs and conditionally included GA4 configuration with dynamically generated YouTube video event triggers

- Optimized GA4 tracking for multiple YouTube videos
  - Added dynamic selectors for `amp-youtube` components and configured GA4 triggers
  - Simplified logic to extract `data-videoid` attributes and generate selectors
  - Generated a consolidated list of selectors for efficient event tracking

### Documentation

- Created a new documentation page, "Footer Configuration," providing detailed guidance on customizing footer columns and options
- Updated the "Config Guide" page to include the latest information about footer options
- Updated README and Front Matter Guide to reflect the removal of discontinued AMP AddThis components and services
- Updated README and Config Guide to highlight Google Analytics 4 (GA4)
- Added detailed instructions for outbound link tracking with GA4
- Updated the section on modifying external links to open in a new tab
- Improved structure and clarity of post-processing documentation
- Expanded explanations and examples to provide better guidance for users
- Updated media post with correct AMP validation error format
- Improved guide for embedding audio
- Added example config for local navigation menu items
- Enhanced link tracking and external link behavior sections in the config guide
- Added Code of Conduct for community behavior standards

### Chores

- Updated Jekyll scripts for live reload
  - Added `--livereload` flag to `jekyll` script
  - Added `--livereload` flag to `jekyll:trace` script

- Configured MD046 rule for markdownlint
  - Configured the rule to use the fenced style for code blocks in VS Code settings
  - Ensured consistent and readable markdown documentation

- Updated frontMatter extension settings in VS Code
  - Set `jekyll` as the framework for proper functionality
  - Enhanced start command for better debugging and live reloading by adding `--trace --livereload`

## [3.0.0] - 2024-09-29

### Fixed

- Resolved preload request credentials mismatch for 'logo-plainSVG.svg'
- Resolved CORS policy error by hosting image on the same domain

### Refactors

- Renamed `gulpfile.js` to `gulpfile.mjs` to support ES module syntax
- Added `css_to_scss.sh` script to convert CSS files to SCSS using `sass-convert`
- Updated SCSS files for various AMP components using the new `css_to_scss.sh` script

### Removed/Deprecated

- Uninstalled `trim-newlines` and `gulp-format-md` from dev dependencies
- Removed deprecated `gulp-minify-inline` task from `gulpfile.mjs`
- Removed deprecated `css2scss` task and `@gecka/styleflux` from the gulp pipeline
- Removed overrides for `gulp` dependencies: `glob-watcher`, `minimatch`, `semver`, `set-value`, and `vinyl-fs`

### CI/CD

- Migrated Jekyll build action from deprecated `helaili/jekyll-action` to a new, maintained workflow
- Removed deprecated `deploy-jekyll.yml` workflow file due to `helaili/jekyll-action` deprecation

### Dependencies

- Bumped `@ampproject/toolbox` from 2.9.0 to 2.10.1
- Upgraded `gulp` to version 5.0.0
- Upgraded `amphtml-validator` to version 1.0.38
- Upgraded `gulp-amphtml-validator` to version 1.0.8
- Added `gulp-changed` for improved file change detection
- Replaced `gulp-htmlmin` with `gulp-html-minifier-terser` for better HTML minification
- Updated `package.json` to include new dependencies and set `type` to `module`

### Documentation

- Updated the status badge for CodeQL action
- Updated the status badge for Jekyll build workflow
- Updated README to document the new Jekyll build workflow. Included details on the new workflow steps and configuration

## [2.9.1] - 2024-03-12

### Fixed

- Removed the `data-ampdevmode` attribute from the `<amp-script>` component in non-development environments. This attribute was previously used to enable development-specific features, such as the ability to load scripts from a local server. However, it was found to cause unintended behavior in production environments, such as preventing scripts from running or causing validation errors. By removing this attribute in non-development environments, we ensure that AMP pages are always served with the correct configuration and that scripts are executed as intended.

### Added

- Introduced two new options to the site configuration:
  - `amp_optimizer`: Set to true if you run AMP Optimizer after building the Jekyll site. Defaults to false.
  - `script_hash`: A hash for the `get_stored_consentStates` script. Defaults to empty.

### Documentation

- Corrected a typo in the `.github-sponsors-button` CSS class, resolving an error
- Updated badges that were labeled with incorrect version numbers
- Migrated `<span class="badge ..."">` elements to use the kramdown attribute syntax: `<span>...</span>{:.badge...}`
- Utilized reference links for inline markdown links in cases where lines become excessively long
- Inserted a line break after each badge using `<br>` tags
- Added `<br>` tags to create line breaks before default values
- Enhanced table styling by applying vertical-align: top to `th` and `td` elements
- Introduced two new CSS classes, `.blue` and `.green`, to provide additional styling options
- Appended `.green` to inline code blocks containing the text "true"
- Appended `.blue` to inline code blocks containing non-boolean default values
- Removed the `.plaintext` CSS class to streamline the styling

## [2.9.0] - 2024-03-08

### Added

- Ability to customize the URL for the privacy policy page via the `_config.yml` file

- Implemented a granular Cookie Consent Notice
  - Integrated the `amp-consent` extension to manage user consent
  - Developed a comprehensive cookie consent interface that allows for detailed consent management based on specific purposes
  - Implemented CSS styles for the consent interface
  - Incorporated the consent interface into the default layout, ensuring its visibility upon page load
  - Enabled the consent UI when `consent: true` is set in the `_config.yml` file
  - Provided an option to remove the `data-ampdevmode` attribute from the custom script by setting `consent_dev_mode=false`
  - Implemented blocking of AddThis, Disqus, Google Analytics, and Google AdSense until user consent is obtained

### Chore

- Extended the import of the `amp-script` extension to include cases where the consent UI is enabled, allowing custom scripts to access consent states stored locally
- Updated to the latest official Google Analytics 4 support

## [2.8.0] - 2024-01-15

### Dependencies

- Update cheerio to fix ReDoS vulnerability
- Update postcss for AMP Optimizer
- Update glob-parent to fix ReDoS vulnerability
- Bump semver from 5.7.1 to 5.7.2
- Bump caniuse-lite from 1.0.30001431 to 1.0.30001576
- Bump decode-uri-component from 0.2.0 to 0.2.2

### Style

- Rebuild minified CSS and SCSS files for the theme
- Hide Disqus ads and GitHub sponsor button with CSS
- Format Liquid snippets in the post.html file

### Fixed

- Resolve AMP optimizer warning in the continuous integration workflow
- Resolve a conflict caused by the Jekyll Archives plugin in the build process
- Fix the AMP CSS issue and the Iframe issue in AMP
- Fix the potential XSS vulnerability in jQuery

### Added

- AMP Optimizer logs to the gulp task
- Hide the `gh-pages` branch from the Git Graph in VS Code

### Removed/Deprecated

- Remove VigLink affiliate program from the theme
- Remove amp-link-rewriter extension from the theme
- Remove the CodeQL Action from the GitHub Workflows as it is deprecated
- Schedule the deprecation of some gulp modules that are no longer needed

### Refactor

- Simplify author logic in the post.html file

### Chore

- Update the Front Matter CMS database and the recommended VS Code extensions
- Update the Actions to run on Node 16 instead of Node 12

### Documentation

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
