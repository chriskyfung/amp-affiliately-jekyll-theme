# 🎨 AMP Affiliately Jekyll Theme

This project offers an AMP-ready Jekyll theme for your blogs and websites.

![Made with Jekyll](https://img.shields.io/badge/Made%20with-Jekyll-1f425f.svg) ![GitHub last commit](https://img.shields.io/github/last-commit/chriskyfung/amp-affiliately-jekyll-theme) [![Deploy Jekyll site to Pages](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/actions/workflows/jekyll-build.yml/badge.svg?branch=master)](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/actions/workflows/jekyll-build.yml) [![Website Monitoring](https://img.shields.io/website?down_message=offline&up_message=online&url=https%3A%2F%2Fchriskyfung.github.io%2Famp-affiliately-jekyll-theme%2F)](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/) [![GitMCP](https://img.shields.io/endpoint?url=https://gitmcp.io/badge/chriskyfung/amp-affiliately-jekyll-theme)](https://gitmcp.io/chriskyfung/amp-affiliately-jekyll-theme)

## 👀 Live Demo

[![AMP Affiliately Jekyll Theme](/Screenshots/amp-affiliately-theme.png "AMP Affiliately Jekyll Theme Preview")](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/)

### 🌐 [Demo Site](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/) ↗

- 💻 📱 [Preview the look of the responsive design for smartphone, tablet, and laptop](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/responsive-web-design/) ↗
- 📷🔉 [Preview media blocks (for images, videos and audio) in AMP](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/media/) ↗
- 🖥️⌨ [Preview code blocks and snippet highlighting](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/code/) ↗
- 📝⌨ [Preview available Markdown styles](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/style-guide/) ↗

## 🌈 Features

- [AMP-ready](#what-is-amp-)
- [Easily installable using `remote_theme`](#2-set-up-as-a-remote-theme-and-updating-settings)
- Easily Customisable
- Responsive Web Design
- Sticky Navigation Menu with Submenu on Hover
- [Left/Right Sidebar](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/front-matter-guide/#sidebar-options) ↗
- [Pagination](#enabling-pagination-for-blog-posts-)
- [Category and Tag Archives](#enabling-lists-of-categories-and-tags-)
- [Featured Box/List](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/front-matter-guide/#pin-featured-posts) ↗
- [Set Cover/Featured Image on Post Pages](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/front-matter-guide/#set-featured-image) ↗
- [Syntax Highlighting for Code](#-codes)
- Multiple Authors
- [Include `<amp-img>` with `<figure>` and `<figcaption>` wrapper](#-images)
- Support WebP Image Format
- Lightbox (AMP)
- [Include YouTube (AMP) with GA video tracking](#-youtube-videos)
- [Disqus Comments in AMP](#disqus-comments-in-amp-)
- [Site Search via Google Custom Search Engine](#enabling-third-party-components-)
- Auto-Suggestion Search Bar
- Tracking with [Google Analytics](#enabling-third-party-components-) and [Google Tag Manager (AMP)](#enabling-third-party-components-)
- Monetize via [Google Adsense](#enabling-third-party-components-) and Buy Me A Coffee
- [Support deploying to Github Pages via Github Action](#deploying-to-github-pages-with-github-actions-)

### ✨ New Features in `v3.x.x`

- **Advanced Consent Management:** Granular, geo-targeted cookie consent support via `amp-consent` and `amp-geo`, with seamless [iubenda](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/introducing-iubenda-amp-cookie-solution/) integration. 🍪
- **Enhanced Analytics:** Deep [Google Analytics 4 (GA4) integration](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/google-analytics-4/) with outbound link and video engagement tracking. 📊
- **Customizable Footer:** Easily configure footer columns directly from `_config.yml`. 📝
- **Improved UX & Styling:** A custom 404 page, refined typography, and enhanced styling for ToC and callouts. 🎨
- **Modernized Build & Styling:** Migrated to the modern Sass module system (`@use`). The build process features a fully integrated asset pipeline where `npm run build` handles everything from SCSS compilation and minification to Jekyll site generation and final HTML optimization. The Gulp-based system is refactored for robustness, uses ES modules, provides better logging, and conditionally generates sourcemaps. Separated theme variables into a dedicated partial (`_theme-vars.scss`) to prevent CSS duplication. 🔨
- **Better Developer Experience:** Live reload for local development and deep VS Code integration with [Front Matter CMS](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/front-matter-cms/). 👨‍💻

### ✨ New Features in `v2.x.x`

- Support building Jekyll with ⚡ AMP Optimizer using Gulp 🥤
- Support minifying HTML and inline CSS using Gulp 🥤
- Improve accessibility 👩‍🦽
- Improve the support for **IE11**
- Support installing **Jekyll-Scholar** Plugin to format bibliographies
- Set the sorting of post tags and categories in `_config.yml`
- New block for including **Table of Contents** to a page/post
- New post-processing for adding anchor links next to H2, H3, and H4 headings inside post content
- New post-processing for inserting `rel` and `target` attributes to outbound links without plugins or dependencies
- Support on-page sidebar options
- Allow configuring **Resources** Widget globally in `_config.yml`
- Support creating multiple **Download** buttons in the sidebar widget
- Allow fully customizing copyright notice in `_config.yml`
- (`v2.7`) Show/hide the **GitHub Sponsors** button in the navigation bar
- (`v2.7`) Add support of social buttons for Twitter and Linkedin
- (`v2.8.0`) Add AMP Optimizer logs to the Gulp task 🥤

* * *

## What is AMP ⚡

**AMP** stands for [Accelerated Mobile Pages](https://www.ampproject.org/) ↗, a Google-backed project designed as an open standard for any publisher to have pages load quickly on mobile devices.

* * *

## Installation 🧰

There are various ways to install the theme:

### 1. Cloning the repository and updating settings

1. Fork this repository and clone the forked repository.
2. Update the `_config.yml` file as per your requirements.
3. Add your posts to the `_posts` directory.
4. Deploy to your server or Github Pages (read **Deploying to GitHub Pages with GitHub Actions** ).

### 2. Set up as a remote theme and updating settings

Read the procedures in the [Config Guide](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/config-guide/#-use-amp-affiliately-theme-as-remote-theme) ↗.

* * *

## Configurations 🛠️

### Enabling Third-Party Components 🧩

- Read **Google Services** in the [Config Guide](https://chriskyfung.github.io//amp-affiliately-jekyll-theme/config-guide/#-google-services) ↗. For the following:

  - Google Analytics 4
  - Google Adsense
  - Google Tag Manager
  - Google Custom Search Engine

#### Disqus Comments in AMP 💬

1. Download [this HTML file](https://gitlab.com/chriskyfung/disqus-amp/-/blob/master/public/index.html) ↗ ![GitLab Last Commit](https://img.shields.io/gitlab/last-commit/chriskyfung%2Fdisqus-amp?ref=master&path=public%2Findex.html) and deploy it to another domain or subdomain.
2. Copy the external URL link as the value of `amp_disqus_url` in _config.yml.
3. Use `amp_disqus_height` to configure the height of `<amp-iframe>` if needed (default is `140`).

### Enabling Pagination for Blog Posts ⏪⏩

1. Make a new folder named `blog` in your _root_ directory.
2. Create an empty HTML file in the new folder and name it `index.html`.
3. Copy the following front matter to the HTML file:

   ```yaml
   ---
   layout: blog-pagination
   ---
   ```

### Enabling Lists of Categories and Tags 📁🔖

1. In your root directory, create a folder named `category` and `tag`, respectively.
2. New a file and name it to `index.html` in your `category` and/or `tag` folder(s).
3. Copy the following front matters to the corresponding `index.html`:

   - For `category/index.html`,

      ```yaml
      ---
      layout: category-list
      title: List of Categories
      ---
      ```

   - For `tag/index.html`

      ```yaml
      ---
      layout: tag-list
      title: List of Tags
      ---
      ```

### Sidebar Widgets 🧙‍♂️

- [Enable showing **FEATURED** and **RECENT POSTS** widgets on your sidebar](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/config-guide/#sidebar-options) ↗
- [Show GitHub Metadata Widget in Sidebar (v2.0)](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/config-guide/#-github) ↗

* * *

## Writing Posts 📝

You can write posts just as you would in Jekyll, the only difference being that AMP has some strict guidelines on including external content.

You cannot use Markdown format or normal HTML tags. AMP provides its own custom tags for images, videos, etc. For examples,

### 🖼 Images

Use the `picture.html` include to insert an image in the AMP format for automatically serving the image in the **WebP** format.
This include also wraps the image with a `<figure>` tag with an optional caption element.

```ruby
{% include picture.html img="welcome.jpg" height="400" width="800" %}
```

[OPTIONS](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/media/#using-include-picturehtml) ↗

[DEMOS - Image in AMP](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/media/#image-in-amp) ↗

### 📹 YouTube Videos

You need to include the following front-matter variable to enable YouTube embeds.

```yaml
amp:
   youtube: true
```

To embed a single video, use the following tag to insert the `youtube.html` include. It supports `title`, `description`, and `upload_date` parameters for generating `VideoObject` schema markup, which is beneficial for SEO. You can also specify the thumbnail quality using the `thumb_quality` parameter (e.g., `mq`, `hq`, `sd`, `maxres`).

```ruby
{% include youtube.html id="<YOUTUBE_VIDEO_UID>" title="Welcome to Watch this Video" description="A short description of the video." upload_date="YYYY-MM-DDThh:mm:ssZ" thumb_quality="hq" %}
```

To embed a playlist, you need to set both the _playlist ID_ and the _ID of the first video within the playlist_.

```ruby
{% include youtube.html id="<YOUTUBE_VIDEO_UID>" playlist="<YOUTUBE_PLAYLIST_UID>" title="Welcome to Watch this Video" %}
```

[DEMOS - YouTube Embeds](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/media/#youtube-videos) ↗

### 💻 Codes

This theme supports [syntax highlighting](https://jekyllrb.com/docs/liquid/tags/#code-snippet-highlighting) based on [Rouge](https://rouge-ruby.github.io/docs/), which is the default highlighter in Jekyll 3 and above. All CSS styles for syntax highlighting are located in the `amp-syntax-highlight.css` under the `_includes/css/` directory.

By default, this theme excludes the CSS styles for syntax highlighting. The AMP framework limits the total CSS styles up to 75,000 bytes per AMP page. This keeps lightweight and rendering fast.

To include the stylesheet on-demand, you need to add the following to your post's front matter:

```yaml
css:
  syntax: true
```

[DEMOS - Code Block](https://chriskyfung.github.io/amp-affiliately-jekyll-theme//code) ↗

### 📌 Callout <sub>_beta_</sub>

A shortcode for creating a colored box, e.g. tips/memo.

```ruby
{% capture label %}
   PUT YOUR MARKDOWN CONTENT HERE...
{% endcapture %}

{% include callout.html content=label %}
```

* * *

## Front Matters

For detailed guidance on front matter variables for posts and pages, please refer to the official [**Front Matter Guide**](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/front-matter-guide/) ↗.

* * *

## Using AMP Components ⚡

Some AMP components require you to specify external scripts before using them.
You can specify these scripts in the `head.html` file in the includes directory after the already imported scripts and then use these components in any post.

See [Full AMP Documentation](https://www.ampproject.org/docs/) ↗ to learn more.

## Validating Your AMP Pages 🐞

AMP provides a built-in validator to validate your pages. You can access this validator by opening the Developer Console in your browser and appending `#development=1` to the end of any URL of your site, e.g. [`http://localhost:4000/#development=1`](http://localhost:4000/#development=1).

If you have errors on your page, AMP will list those for you in the console. If no errors are on your page, you'll get a message "AMP Validation Successful" on the DevTools console.

* * *

## Development & Build 🛠️

This theme uses **npm** to manage development dependencies and **Gulp.js** to automate parts of the build process, including AMP optimization and asset minification.

### Installation

First, install all the required Node.js and Ruby dependencies. From the root of the project, run:

```shell
npm install
```

This command will also automatically run `bundle install` to install the necessary Ruby gems.

### Key npm Scripts

- **`npm run serve`**: The primary command for local development. It starts a Jekyll server with live reload, so you can see your changes instantly.
- **`npm run build`**: Creates a complete, production-ready build. This script compiles SCSS, minifies CSS, builds the site with Jekyll (`JEKYLL_ENV=production`), and finally optimizes and minifies the HTML output.
- **`npm run build:dev`**: Creates a complete development build. It performs the same steps as `npm run build` but without the production-specific optimizations.
- **`npm run test`**: Runs the Gulp `validate` task to check the generated `_site` for AMP compliance, ignoring a default set of files. This is the command used for CI checks.
- **`npm run test:dev`**: Runs a full AMP validation on all generated files without ignoring any.
- **`npm run css:build`**: A utility script that compiles SCSS and optimizes/minifies the resulting CSS using PostCSS. This is automatically run as part of the `build` and `build:dev` scripts.
- **`npm run watch:all`**: A convenient script for developers that watches all SCSS and CSS files and recompiles them automatically on change.

* * *

## Deploying to GitHub Pages with GitHub Actions 🚀

This theme includes Jekyll plugins that are not in the whitelist of Github Pages. Therefore, to deploy it to your Github Pages, you need to use a custom Github Actions workflow to publish your site. The Action workflow is configured in the `/.github/workflows/jekyll-build.yml`. The workflow is triggered on pushes to the `master` branch and leverages GitHub Actions to:

1. Build the Jekyll Site: Installs Ruby and Jekyll to build the site.
2. Optimize AMP and Minify HTML: Runs AMP Optimizer and HTML minifier with gulp.js.
3. Deploy to GitHub Pages: Publishs the built site to GitHub Pages.

* * *

## 🤝 Contributing

Bug reports and pull requests are welcome on GitHub at <https://github.com/chriskyfung/amp-affiliately-jekyll-theme/> ↗. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) ↗ code of conduct.

To submit a pull request -

1. Fork/clone the repository.
2. Develop.
3. Create a new branch from the master branch.
4. Open a pull request on Github describing what was fixed or added.

## 💗 Support Me

Would you like to buy me a coffee? I would really appreciate it if you could support me for the theme development.

<a href="https://www.buymeacoffee.com/chrisfungky"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" target="_blank"></a>

## 🙏 Acknowledgement

This project is developed based on the MIT-licensed [Affiliates](https://github.com/wowthemesnet/affiliates-jekyll-theme) ↗ Jekyll theme designed by Sal, [WowThemes.net](https://www.wowthemes.net/) ↗.

## ⚖️ License

This theme is available as open-source under the terms of the [MIT License](https://opensource.org/licenses/MIT) ↗ under the same upstream license.
