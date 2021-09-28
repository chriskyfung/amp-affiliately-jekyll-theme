---
layout: post
title: Front Matter Guide
date: 2021-07-31 12:05 +0800
last_modified_at: 2021-09-28 15:00 +0800
category: [doc]
tags: [front matter, styles, AMP]
permalink: /front-matter-guide/
redirect_from: [/front-matter/]
image: 
   path: /assets/images/frontend-4342425_730.png
css:
  badge: true
  syntax: true
  custom: >-
    table { font-size: .95rem; margin-bottom: 1.5rem }
    tr:nth-child(odd) { backgroud-color: #e3edf3 }
    td { padding: .5em }
    .plaintext { color: mediumseagreen; }
excerpt: The docs for the front matters that that let you control the post title, date, featured image, CSS styles, etc.
featured: true
---

{% include toc.md %}

* * *

## General Front Matters for A Post

A Jekyll post should contain the front matters as the following example:

```yaml
---
layout: post
permalink: /blog/my-first-post/
title: My first blog post
date: 2020-01-31 07:30 +0000
last_modified_at: 2021-07-31 +0000
category: [category1, category2]
tags: [tag1, tag2, tag3]
excerpt: This is the first blog post for my Jekyll site.
---
```

| Attribute          | Description                                                                                                                                                                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `layout`           | The Jekyll layout file to use.<br>_Options:_ `page`{:.plaintext}, `post`{:.plaintext}, `archive`{:.plaintext}, `category-list`{:.plaintext} and `tag-list`{:.plaintext}.<br>**Note**: `page-right-sidebar`{:.plaintext} and `post-left-sidebar`{:.plaintext} are deprecated. |
| `title`            | The title of the page or post.                                                                                                                                                                                                                                               |
| `date`             | The date here overrides the date from the name of the post file.<br>**Note**: A date is specified in the format `YYYY-MM-DD HH:MM:SS +/-TTTT`{:.plaintext}; hours, minutes, seconds, and timezone offset are optional.                                                       |
| `last_modified_at` | (_Optional_) The date when the post was the last modified.<br>**Note**: A date is specified in the format `YYYY-MM-DD HH:MM:SS +/-TTTT`{:.plaintext}; hours, minutes, seconds, and timezone offset are optional.                                                             |
| `permalink`        | (_Optional_) The custom URL for the page or post, if you need your processed blog post URLs to be something other than the site-wide style. _Default:_ `/year/month/day/title.html`{:.plaintext}.                                                                            |
| `category`         | (_Optional_) One or multiple categories that the post belongs to.                                                                                                                                                                                                            |
| `tags`             | (_Optional_) One or multiple tags that the post associates with.                                                                                                                                                                                                             |
| `excerpt`          | (_Optional_) The short text to show on the card of the list/grid of posts, and use as the meta description of the page or post.                                                                                                                                              |

**💡 See:** [Front Matter \| Jekyllrb](https://jekyllrb.com/docs/front-matter/ "Official Jekyll Documentation")

* * *

## Set Featured Image

You can assign an image (with **730×431** pixels in size) as the featured image of a post in the front matter like this:

```yaml
image:
  path: /assets/images/picture.png
```

| Property | Description                                                                                                                           |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `path`   | (_Required_) Absolute or relative path of a JPG, PNG, or SVG file.                                                                    |
| `hide`   | (_Optional_) Set to `true`{:.plaintext} to not embed the image on the page.                                                           |
| `class`  | (_Optional_) Additional class names for the &lt;amp-img&gt; component, e.g. `shadow-none`{:.plaintext} to remove the box shallow.     |
| `width`  | (_Optional_) Specify the image width (in px). _Default:_ 730 (px).                                                                    |
| `height` | (_Optional_) Specify the image height (in px). _Default:_ 411 (px).                                                                   |
| `fit`    | (_Optional_) The horizontal alignment of the thumbnail in cards and post grid. _Options:_ `left`{:.plaintext} / `right`{:.plaintext}. |

**Note**: The front matter `image` also inherits the properties from [Jekyll Feed](https://github.com/jekyll/jekyll-feed#optional-front-matter) and [Jekyll SEO Tag](https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/advanced-usage.md#customizing-image-output).

### Hide Featured Image on a Page/Post

If you do not want to render the featured image on a post, append a `hide` option to the `image` variable, _e.g._:

```yaml
image:
   path: /assets/images/cover-image.png
   hide: true
```

### Remove Box Shadow from Featured Image

If you want to remove the shadow of the featured image on the post page, append the following class to the `image` variable, _e.g._

```yaml
image:
   path: /assets/images/cover-image.png
   class: shadow-none
```

### Featured Images That Do Not Have an Aspect Ratio of 16:9

If the image is not at 16:9 aspect ratio, you need to define its width and height under the `image` variable, _e.g._:

```yaml
image:
   path: /assets/images/cover-image.png
   width: 640
   height: 480
```

### Show Thumbnail Image in Sidebar Widgets

1. Make a copy of each featured image file in the same folder.
2. Rename the copies to have a filename like `<filename>.thumb.<ext>`, _e.g._ `cover-image.thumb.png`.
3. Rescale it to a height of **150px**.

By default, the thumbnail of featured images is cropped at the center inside the cards of the list/grid of Featured Posts. A new variable for the thumbnail positioning was added to the theme on 2020-10-07. You can now change the image position to the _left_ or _right_ by appending a `fit` option to the `image` variable, _e.g._:

```yaml
image:
   path: /assets/images/cover-image.png
   fit: left
```

* * *

## Pin Featured Posts

You can pin a post to the list/grid of Featured Posts in the theme by the following front matter:

```yaml
featured: true
```

* * *

## Add Custom CSS to HTML &lt;head&gt; Section

In the front matter, you can add your custom CSS styles to the end of the `<style amp-custom>` tag inside the HTML header.

```yaml
css:
  badge: true  # include Bootstrap 4 Badges styles
  syntax: true # include CSS styles for syntax highlighter
  custom: >-
    # Write custom CSS to here
```

For example, you can format the table elements with a zebra-striped design by the following:

```yaml
css:
  custom: >-
    table { font-size: .95rem; margin-bottom: 1.5rem; }
    tr:nth-child(odd) { backgroud-color: #e3edf3; }
    th, td { padding: .5em; }
```

{: style="margin-bottom: auto;" }
**💡 Learn more:**

- [Badges](https://getbootstrap.com/docs/4.0/components/badge/ "Bootstrap 4")
- [Code Block]({% post_url 2017-11-28-code %} "AMP Affiliately Jekyll Theme")
- [How To Create A Zebra Striped Table](https://www.w3schools.com/howto/howto_css_table_zebra.asp "W3Schools")

```yaml
amp:
  addthis: true  # layout level
  iframe: true   # layout level
  script: true   # layout level
  gist: true     # page level
  youtube: true  # page level
```

**💡 Related:** [How to include YouTube Video and Playlist embeds]({% post_url 2017-11-27-media %}#video  "AMP Affiliately Jekyll Theme")

* * *

## Add Custom Codes to HTML <head> Section

In the front matter, you can add your codes to the HTML header using the variable `custom_header`.

```yaml
custom_head: >-
  # Custom meta tags and AMP script components in page level
```

For example, you can specify additional meta tags and AMP components as the followings:

```yaml
custom_head: >-
  <!-- Instructs web crawlers to not index the page and to not crawl any of the links on the page -->
  <meta name="robots" content="noindex, nofollow">

  <!-- Includes the AMP JS library for <amp-accordion> component -->
  <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>

  <!-- Includes the AMP JS library for <amp-audio> component -->
  <script async custom-element="amp-audio" src="https://cdn.ampproject.org/v0/amp-audio-0.1.js"></script>
```

**💡 Learn more**: [Robots meta tag, data-nosnippet, and X-Robots-Tag specifications](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag "Google Search Central")

* * *

## Sidebar Options

### Override Default Sidebar Setting <span class="badge badge-default">v2.0</span>

**Options:** `left`, `right`, and `none`

For example, you can set a left sidebar on a post page by the following:

```yaml
sidebar: left
```

### Options for Resources Widget

#### Display GitHub Metadata for Project Repo

When you use this theme for the website of a Github project repository, it is available to show buttons that link to the repository and a release file in the sidebar.

Follow our [Config Guide]({% post_url 2021-08-02-config-guide %}) to set up your `_config.yml` file.

If a release exists in the repository, an additional button that links to the webpage of the latest release will be shown in the widget.

**Note**: Authentication is required to get your repository data to show the release button. Please follow the docs of [jekyll
/github-metadata](https://github.com/jekyll/github-metadata/blob/master/docs/authentication.md) to set up your personal access token.

##### <span class="badge badge-default">v1.2</span> <sup>(Deprecated)</sup>

Add the following front matter to every page that you want to show the **Resources** Widget.

```yaml
download: true
```

You can replace the second button and point it to a downloadable file by configuring it like this:

```yaml
download:
  url: //.../filename.zip
```

##### <span class="badge badge-success">v2.0</span>

You can globally configure the widget by using the attribute `resources_widget` in the `_config.yml` file. It is not necessary to add `download: true` to the front matter of individual pages for enabling the widget.

Any file download buttons will display separately, and the button that links to the webpage of the latest release will no longer be overridden.

#### Display Download Buttons

##### <span class="badge badge-default">v1.2</span> <sup>(Deprecated)</sup>

A Download button shows on a page when you declare the URL of a download file in the front matter like this:

```yaml
download:
  url: //.../filename.zip
```

This button will substitute the button for linking to the latest release if GitHub metadata is also presented in the widget.

##### <span class="badge badge-success">v2.0</span>

The new version has been redesigned to support creating a list of buttons for multiple files on-page. You need to itemize the `name` and `url` of each file in the front matter, for example:

```yaml
download:
  files:
    - url: ../training-01/labsheet.pdf
      name: Lab Sheet
    - url: ../training-01/lab-files.zip
      name: Lab Files
```

* * *

## On-Page SEO

| Attribute       | Description                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `canonical_url` | (_Optional_) The custom [Canonical URL][google-developers-canonical-url] for the page or post.                                                                         |
| `author`        | (_Optional_) The lookup key for author information to be propagated to JSON-LD structured data. See [Jekyll SEO Tag][jekyll-seo-tag-advanced-usage].                   |
| `description`   | (_Optional_) A brief summary of a web page to be shown in search engine results.<br>**Note**: This will takes priority over existing front matter attribute `excerpt`. |
| `locale`        | (_Optional_) The custom locale to override the site-level locale information for the page or post.                                                                     |
| `image`         | (_Optional_) **Note**: This is inherited by the attribute for setting the [featured image](#set-featured-image) for the page or post.                                  |

💡 Learn more from the [basic usage][jekyll-seo-tag-usage] and [advanced usage][jekyll-seo-tag-advanced-usage] in the Jekyll SEO Tag documentation.

* * *

## Set URL Redirects

| Attribute       | Description                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `redirect_from` | (_Optional_) One or multiple relative URLs that will redirect to the page or post, _e.g._ `/post/2019/10/31/index.html`{:.plaintext} |
| `redirect_to`   | (_Optional_) The destination URL of the redirection, _e.g._ `http://www.github.com`{:.plaintext}                                     |

💡 Learn more about the usage from the [Jekyll Redirect From](https://github.com/jekyll/jekyll-redirect-from) documentation.

* * *

## See Also 📚

- [Front Matter Defaults \| Jekyllrb](https://jekyllrb.com/docs/configuration/front-matter-defaults/ "Official Jekyll Documentation")
- [README.md - amp-affiliately-jekyll-theme](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/blob/master/README.md "GitHub")

[google-developers-canonical-url]: https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls "Google Developers"
[jekyll-seo-tag-usage]: https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md
[jekyll-seo-tag-advanced-usage]: https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/advanced-usage.md
