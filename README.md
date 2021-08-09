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
- Responsive
- [Syntax Highlighting for code](#-codes)
- Cover Images for homepage and blog posts
- Social Sharing via AddThis (AMP)
- Simple Navigation Menu
- Page/Post Sidebar
- Pagination
- Multiple Authors
- Featured Box/List
- [Category and Tag Archives](#enabling-lists-of-categories-and-tags)
- [Include `amp-img` with `<figure>` and `<figcaption>` wrapper](#-images)
- Support WebP image format
- Lightbox (AMP)
- [Include YouTube (AMP) with GA video tracking](#-youtube-videos)
- [Disqus Comments in AMP](#disqus-comments-in-amp)
- [Site Search via Google Custom Search Engine](#google-custom-search-engine)
- Auto-suggestion search bar
- Tracking with [Google Analytics](#google-analytics) and [Google Tag Manager (AMP)](#google-tag-manager)
- Monetize via [Google Adsense](#google-adsense) and Buy Me A Coffee
- Can be easily installed using `remote_theme`
- Easily Customisable
- [Support deploying to Github Pages via Github Action](#deploying-to-github-pages-with-github-actions)

## ✨ New Features in v2.0

- Add anchor links to H2, H3, and H4 headings inside post content
- Insert `rel` and `target` attributes to outbound links without plugins or dependencies
- Support on-page sidebar options
- Allow configuring **Resources** Widget globally in `_config.yml`
- Support creating multiple download buttons in the sidebar widget
- Allow fully customizing copyright notice in `_config.yml`

* * *

## What is AMP ⚡

AMP stands for [Accelerated Mobile Pages](https://www.ampproject.org/), a Google-backed project designed as an open standard for any publisher to have pages load quickly on mobile devices.

* * *

## Installation 🧰

There are different ways to install the theme -

### 1. Cloning the repository and updating settings

1. Fork this repository and clone the forked repository.
2. Update the `_config.yml` file as per your requirements.
3. Add your posts to the `_posts` directory.
4. Deploy to your server or Github Pages (read **Deploying to GitHub Pages with GitHub Actions** ).

### 2. Set up as a remote theme and updating settings

Read the procedures in the [Config Guide](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/config-guide/#-use-amp-affiliately-theme-as-remote-theme).

### Deploying to GitHub Pages with GitHub Actions

This theme includes Jekyll plugins that are not in the whitelist of Github Pages. If you are going to deploy it to your Github Pages, you need to deploy it via Github Action. The Action workflow is configured in the `/.github/workflows/jekyll.yml`, which uses [helaili/jekyll-action@2.0.3](https://github.com/helaili/jekyll-action).  It needs access to a `JEKYLL_PAT` secret set with a Personal Access Token (needs public_repo scope).

* * *

## Configurations 🛠

### Enabling 3rd-party components

- Read [Google Services](https://chriskyfung.github.io//amp-affiliately-jekyll-theme/config-guide/#-google-services) in the Config Guide. For the following:

- Google Analytics
- Google Adsense
- Google Custom Search Engine
- Google Tag Manager

#### Disqus Comments in AMP

1. Download [this HTML file](https://gitlab.com/chriskyfung/disqus-amp/-/blob/master/public/index.html) and deploy it to another domain or subdomain.
2. Copy the external URL link as the value of `amp_disqus_url` in _config.yml.
3. Use `amp_disqus_height` to configure the height of \<amp-iframe\> if needed (default is `140`).

### Enabling Pagination for Blog Posts

1. Make a new folder named `blog` in your _root_ directory.
2. Create an empty HTML file in the new folder and name it `index.html`.
3. Copy the following front matter to the HTML file:

   ```yaml
   ---
   layout: blog-pagination
   ---
   ```

### Enabling Lists of Categories and Tags

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

### Sidebar Widgets

- [Enable showing **FEATURED** and **RECENT POSTS** widgets on your sidebar](https://chriskyfung.github.io//amp-affiliately-jekyll-theme/config-guide/#sidebar-options).
- [Show Github Metadata Widget in Sidebar (v2.0)](https://chriskyfung.github.io//amp-affiliately-jekyll-theme//config-guide/#-github)

* * *

## Writing Posts 📝

You can write posts just as you would in Jekyll, the only difference being that AMP has some strict guidelines on including external content.

You cannot use Markdown format or normal HTML tags. AMP provides its own custom tags for images, videos, etc...

### Examples -

#### 🖼 Images

Use the `picture.html` template to insert an image in the AMP format with automatically serving the image in the **WebP** format.
The template also wraps the image with a `<figure>` tag with an optional caption element.

```ruby
{% include picture.html img="welcome.jpg" height="400" width="800" %}
```

Options:

- **alt**
- **caption** (_support HTML codes_)
- **class** (_e.g._ `text-center`)
- **layout** (_amp-img supported layouts_: `fill`, `fixed`, `fixed-height`, `flex-item`, `intrinsic`, `nodisplay` or `responsive`. _default_: `intrinsic`)
- **lightbox** (_default_: `true`)
- **link** (_assign a URL for the HTML \<a\> tag that wraps the \<amp-img\> tag when the key is present_)
- **source** (`assets`, `projects` or `raw`)
  - _default_ - get image from the `/images/posts/` directory (, or the path configured as the `image_path.default` in `_config.yml`)
  - `assets` - get image from the `/assets/images/` directory (, or the path configured as the `image_path.assets` in `_config.yml`)
  - `projects` - get image from the `/images/projects/` directory (, or the path configured as the `image_path.projects` in `_config.yml`)
  - `raw` - get image from the specified URL

[DEMOS - Image in AMP](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/media/#image-in-amp)

#### 📹 YouTube Videos

You need to include the following front-matter variable to enable YouTube embeds.

```yaml
amp:
   youtube: true
```

To embed a single video, use the following tag to include the `youtube.html` template.

```ruby
{% include youtube.html id="<YOUTUBE_VIDEO_UID>" title="Welcome to Watch this Video" %}
```

- **id** - _required_
- **title** - _optional_

To embed a playlist, you need to set both the _playlist ID_ and the _ID of the first video within the playlist_.

```ruby
{% include youtube.html id="<YOUTUBE_VIDEO_UID>" \
   playlist="<YOUTUBE_PLAYLIST_UID>" title="Welcome to Watch this Video" %}
```

- **id** - _required_
- **playlist** - _required_
- **title** - _optional_

[DEMOS - YouTube Embeds](https://chriskyfung.github.io/amp-affiliately-jekyll-theme//media/#video)

#### 💻 Codes

This theme supports [syntax highlighting](https://jekyllrb.com/docs/liquid/tags/#code-snippet-highlighting) based on [Rouge](http://rouge.jneen.net/), which is the default highlighter in Jekyll 3 and above. All CSS styles for syntax highlighting stores in the `amp-syntax-highlight.css` under the `_includes/css/` directory.

By default, this theme excludes the CSS styles for syntax highlighting. The AMP framework limits the total CSS styles up to 75,000 bytes per AMP page. This keeps light-weight and rendering fast.

To include the stylesheet on-demand, you need to add the following to your post's front matter:

```yaml
css:
  syntax: true
```

[DEMOS - Code Block](https://chriskyfung.github.io/amp-affiliately-jekyll-theme//code)

#### 📌 Callout

A shortcode for creating a colored box, e.g. tips/memo.

```ruby
{% capture label %}
   PUT YOUR MARKDOWN CONTENT HERE...
{% endcapture %}

{% include callout.html content=label %}
```

* * *

### Front Matters

- [Pin Featured Posts](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/front-matter/#pin-featured-posts)
- [Add Custom Codes to HTML <head> Section](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/front-matter/#add-custom-css-to-html-head-section)
- [Add Custom CSS Styles to HTML <head> Section](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/front-matter/#add-custom-codes-to-html-head-section)
- [Display Download Buttons in a Post's Sidebar]((https://chriskyfung.github.io/amp-affiliately-jekyll-theme/front-matter/#display-download-buttons)

#### Set Featured Image for a Page/Post

You can assign an image (with **730×431** pixels in size) as the featured image of a post in the front matter like this:

```yaml
image:
   path: /assets/images/cover-image.png
```

##### Create thumbnail images for display in Featured Boxes/Lists

1. Make a copy of each featured image file in the same folder.
2. Rename the copies to have a filename like `<filename>.thumb.<ext>`, _e.g._ `cover-image.thumb.png`.
3. Rescale it to a height of **150px**.

By default, the thumbnail of featured images is cropped at the center inside the cards of the list/grid of Featured Posts. A new variable for the thumbnail positioning was added to the theme on 2020-10-07. You can now change the image position to the _left_ or _right_ by appending a `fit` option to the `image` variable, _e.g._:

```yaml
image:
   path: /assets/images/cover-image.png
   fit: left
```

##### For images that do not have an aspect ratio of 16:9

If the image is not at 16:9 aspect ratio, you need to define its width and height under the `image` variable, _e.g._:

```yaml
image:
   path: /assets/images/cover-image.png
   width: 640
   height: 480
```

##### Hide Featured Image on a Page/Post

If you do not want to render the featured image on a post, append a `hide` option to the `image` variable, _e.g._:

```yaml
image:
   path: /assets/images/cover-image.png
   hide: true
```

##### Remove Box Shadow from a Featured Image

If you want to remove the shadow of the featured image on the post page, append the following class to the `image` variable, _e.g._

```yaml
image:
   path: /assets/images/cover-image.png
   class: shadow-none
```

* * *

### Using AMP Components

Some AMP components require you to specify external scripts before using them.
You can specify these scripts in the head.html file in the includes directory after the already imported scripts and then use these components in any post.

[See Full AMP Documentation.](https://www.ampproject.org/docs/)

## Validating your page with AMP

AMP provides a built-in validator to validate your pages. You can access this validator by opening the Developer Console in your browser and appending `#development=1` to the end of any URL of your site, e.g. [`http://localhost:4000/#development=1`](http://localhost:4000/#development=1).

If you have errors on your page, AMP will list those for you in the console. If no errors are on your page, you'll get a message "AMP Validation Successful" on the DevTools console.

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
