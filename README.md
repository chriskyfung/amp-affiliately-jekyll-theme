# 🎨 AMP Affiliately Jekyll Theme

**AMP Affiliately** is an AMP-ready Jekyll theme for your blogs and websites.

![Made with Jekyll](https://img.shields.io/badge/Made%20with-Jekyll-1f425f.svg) ![GitHub last commit](https://img.shields.io/github/last-commit/chriskyfung/amp-affiliately-jekyll-theme) [![CodeQL](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/actions/workflows/codeql-analysis.yml) ![Deploy GitHub Pages](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/workflows/Deploy%20GitHub%20Pages/badge.svg) [![Website
 Monitoring](https://img.shields.io/website?down_message=offline&up_message=online&url=https%3A%2F%2Fchriskyfung.github.io%2Famp-affiliately-jekyll-theme%2F)](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/)

## 👀 Live Demo

[![AMP Affiliately Jekyll Theme](/Screenshots/amp-affiliately-theme.png "AMP Affiliately Jekyll Theme Preview")](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/)

[ [Demo Site 🌐](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/) ]

- [💻 📱 Preview the look of the responsive design for smartphone, tablet, and laptop](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/device-look/)
- [📷🔉 Preview media blocks (for images, videos and audios) in AMP](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/media/)
- [🖥️⌨ Preview code blocks and snippet highlighting](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/code/)
- [📝⌨ Preview available Markdown styles](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/2017/11/30/style-guide)

## 🌈 Features

- [AMP-ready](#what-is-amp)
- Easily installable using `remote_theme`
- Easily Customisable
- Sticky Navigation Menu with Submenu on Hover
- Left/Right Sidebar
- Pagination
- [Category and Tag Archives](#enabling-lists-of-categories-and-tags)
- Featured Box/List
- Set Cover/Featured Image on Post Pages
- [Syntax Highlighting for Code](#-codes)
- Multiple Authors
- [Include `amp-img` with `<figure>` and `<figcaption>` wrapper](#-images)
- Support WebP Image Format
- Lightbox (AMP)
- Social Sharing via AddThis (AMP)
- [Include YouTube (AMP) with GA video tracking](#-youtube-videos)
- [Disqus Comments in AMP](#disqus-comments-in-amp)
- [Site Search via Google Custom Search Engine](#google-custom-search-engine)
- Auto-Suggestion Search Bar
- Tracking with [Google Analytics](#google-analytics) and [Google Tag Manager (AMP)](#google-tag-manager)
- Monetize via [Google Adsense](#google-adsense) and Buy Me A Coffee
[Support deploying to Github Pages via Github Action](#deploying-to-github-pages-with-github-actions)

## ✨ New Features in v2.x

- Support building Jekyll with ⚡ AMP Optimizer using Gulp
- Support minifying HTML and inline CSS using Gulp 🗜
- Improve accessibility 👩‍🦽
- Improve the support for IE11
- Support installing Jekyll-Scholar Plugin to format bibliographies
- Set the sorting of post's tags and categories in `_config.yml`
- New block for including Table of Contents to a page/post
- New post-processing for adding anchor links next to H2, H3, and H4 headings inside post content
- New post-processing for inserting `rel` and `target` attributes to outbound links without plugins or dependencies
- Support on-page sidebar options
- Allow configuring **Resources** Widget globally in `_config.yml`
- Support creating multiple download buttons in the sidebar widget
- Allow fully customizing copyright notice in `_config.yml`

* * *

## What is AMP ⚡

AMP stands for [Accelerated Mobile Pages](https://www.ampproject.org/), a Google-backed project designed as an open standard for any publisher to have pages load quickly on mobile devices.

* * *

## Installation 🧰

There are various ways to install the theme:

### 1. Cloning the repository and updating settings

1. Fork this repository and clone the forked repository.
2. Update the `_config.yml` file as per your requirements.
3. Add your posts to the `_posts` directory.
4. Deploy to your server or Github Pages (read **Deploying to GitHub Pages with GitHub Actions** ).

### 2. Set up as a remote theme and updating settings

Read the procedures in the [Config Guide](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/config-guide/#-use-amp-affiliately-theme-as-remote-theme).

* * *

## Configurations 🛠

### Enabling Third-Party Components 🧩

- Read [Google Services](https://chriskyfung.github.io//amp-affiliately-jekyll-theme/config-guide/#-google-services) in the Config Guide. For the following:

- Google Analytics
- Google Adsense
- Google Custom Search Engine
- Google Tag Manager

#### Disqus Comments in AMP 💬

1. Download [this HTML file](https://gitlab.com/chriskyfung/disqus-amp/-/blob/master/public/index.html) and deploy it to another domain or subdomain.
2. Copy the external URL link as the value of `amp_disqus_url` in _config.yml.
3. Use `amp_disqus_height` to configure the height of \<amp-iframe\> if needed (default is `140`).

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

- [Enable showing **FEATURED** and **RECENT POSTS** widgets on your sidebar](https://chriskyfung.github.io//amp-affiliately-jekyll-theme/config-guide/#sidebar-options).
- [Show Github Metadata Widget in Sidebar (v2.0)](https://chriskyfung.github.io//amp-affiliately-jekyll-theme//config-guide/#-github)

* * *

## Writing Posts 📝

You can write posts just as you would in Jekyll, the only difference being that AMP has some strict guidelines on including external content.

You cannot use Markdown format or normal HTML tags. AMP provides its own custom tags for images, videos, etc. For examples,

### 🖼 Images

Use the `picture.html` template to insert an image in the AMP format with automatically serving the image in the **WebP** format.
The template also wraps the image with a `<figure>` tag with an optional caption element.

```ruby
{% include picture.html img="welcome.jpg" height="400" width="800" %}
```

[OPTIONS](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/media/#using-include-picturehtml)

[DEMOS - Image in AMP](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/media/#image-in-amp)

### 📹 YouTube Videos

You need to include the following front-matter variable to enable YouTube embeds.

```yaml
amp:
   youtube: true
```

To embed a single video, use the following tag to include the `youtube.html` template.

```ruby
{% include youtube.html id="<YOUTUBE_VIDEO_UID>" title="Welcome to Watch this Video" %}
```

To embed a playlist, you need to set both the _playlist ID_ and the _ID of the first video within the playlist_.

```ruby
{% include youtube.html id="<YOUTUBE_VIDEO_UID>" \
   playlist="<YOUTUBE_PLAYLIST_UID>" title="Welcome to Watch this Video" %}
```

[DEMOS - YouTube Embeds](https://chriskyfung.github.io/amp-affiliately-jekyll-theme//media/#video)

### 💻 Codes

This theme supports [syntax highlighting](https://jekyllrb.com/docs/liquid/tags/#code-snippet-highlighting) based on [Rouge](http://rouge.jneen.net/), which is the default highlighter in Jekyll 3 and above. All CSS styles for syntax highlighting stores in the `amp-syntax-highlight.css` under the `_includes/css/` directory.

By default, this theme excludes the CSS styles for syntax highlighting. The AMP framework limits the total CSS styles up to 75,000 bytes per AMP page. This keeps light-weight and rendering fast.

To include the stylesheet on-demand, you need to add the following to your post's front matter:

```yaml
css:
  syntax: true
```

[DEMOS - Code Block](https://chriskyfung.github.io/amp-affiliately-jekyll-theme//code)

### 📌 Callout - *beta feature*

A shortcode for creating a colored box, e.g. tips/memo.

```ruby
{% capture label %}
   PUT YOUR MARKDOWN CONTENT HERE...
{% endcapture %}

{% include callout.html content=label %}
```

* * *

## Front Matters

- [Set an Featured Image for a Page/Post](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/front-matter-guide/#set-featured-image)
- [Pin Featured Posts](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/front-matter/#pin-featured-posts)
- [Add Custom Codes to HTML <head> Section](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/front-matter/#add-custom-css-to-html-head-section)
- [Add Custom CSS Styles to HTML <head> Section](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/front-matter/#add-custom-codes-to-html-head-section)
- [Display Download Buttons in a Post's Sidebar](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/front-matter/#display-download-buttons)

* * *

## Using AMP Components ⚡

Some AMP components require you to specify external scripts before using them.
You can specify these scripts in the head.html file in the includes directory after the already imported scripts and then use these components in any post.

[See Full AMP Documentation.](https://www.ampproject.org/docs/)

## Validating Your AMP Pages 🐞

AMP provides a built-in validator to validate your pages. You can access this validator by opening the Developer Console in your browser and appending `#development=1` to the end of any URL of your site, e.g. [`http://localhost:4000/#development=1`](http://localhost:4000/#development=1).

If you have errors on your page, AMP will list those for you in the console. If no errors are on your page, you'll get a message "AMP Validation Successful" on the DevTools console.

* * *

## Using Gulp to Run and Optimize Jekyll Build 🥤

Run the following command to install Gulp, AMP Optimizer, and other node packages in the root directory of your project:

```shell
npm install
```

Build Jekyll locally and run the Gulp pipeline with the following command:

```shell
npm run build
```

* * *
## Deploying to GitHub Pages with GitHub Actions 🚀

This theme includes Jekyll plugins that are not in the whitelist of Github Pages. If you are going to deploy it to your Github Pages, you need to deploy it via Github Action. The Action workflow is configured in the `/.github/workflows/deploy-jekyll.yml`, which uses [helaili/jekyll-action@v2](https://github.com/helaili/jekyll-action) to build the Jekyll site, run AMP Optimizer and HTML minifier using Gulp, and deploy the optimized build to your `gh-pages` branch.

* * *

## 🤝 Contributing

Bug reports and pull requests are welcome on GitHub at <https://github.com/chriskyfung/amp-affiliately-jekyll-theme/>. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

To submit a pull request -

1. Fork/clone the repository.
2. Develop.
3. Create a new branch from the master branch.
4. Open a pull request on Github describing what was fixed or added.

## 💗 Support Me

Would you like to buy me a coffee? I would really appreciate it if you could support me for the theme development.

<a href="https://www.buymeacoffee.com/chrisfungky"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" target="_blank"></a>

## 🙏 Thanks

**AMP Affiliately** is developed based on MIT-licensed [Affiliates](https://github.com/wowthemesnet/affiliates-jekyll-theme) Jekyll theme designed by Sal, [WowThemes.net](https://www.wowthemes.net/).

## ⚖ License

This theme is available as open-source under the terms of the [MIT License](https://opensource.org/licenses/MIT) under the same upstream license.
