---
layout: post
title: Front Matter
date: 2021-07-31 12:05 +0800
category: [guide, config]
tags: [front matter]
permalink: /front-matter/
image: 
   path: /assets/images/frontend-4342425_730.png
css:
  syntax: true
  custom: >-
    table { font-size: smaller; margin-bottom: 1.5rem; }
    tr:nth-child(odd) { backgroud-color: #e3edf3; }
    td { padding: 0 15px; }
featured: true
---

## For a Page/Post

### General front matters for a blog post

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

| Parameter          | Description                                                          |
| ------------------ | ---------------------------------------------------------------------|
| `layout`           | Specify the Jekyll layout file to use. _Options:_ `page`, `page-right-sidebar`, `post`, `post-left-sidebar`, `archive`, `category-list` and `tag-list`  |
| `permalink`        | If you need your processed blog post URLs to be something other than the site-wide style (default `/year/month/day/title.html`), then you can set this variable and it will be used as the final URL. |
| `title`            | The title of a page/post                                             |
| `date`             | A date here overrides the date from the name of the post file. A date is specified in the format `YYYY-MM-DD HH:MM:SS +/-TTTT`; hours, minutes, seconds, and timezone offset are optional. |
| `last_modified_at` | (_Optional_) Specify a date when the post was the last modified      |
| `category`         | Specify one or more categories that the post belongs to              |
| `tags`             | Similar to categories, one or multiple tags can be added to a post.  |
| `excerpt`          | (_Optional_) To custom the short text to show on the card of a post list/grid     |

**💡 Learn more:** [Front Matter \| Jekyllrb](https://jekyllrb.com/docs/front-matter/ "Official Jekyll Documentation"){:.external}

### Set featured image

You can assign an image (with **730×431** pixels in size) as the featured image of a post in the front matter like this:

```yaml
image:
  path: /assets/images/picture.png
```

| Parameter | Description                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| `path`    | (_Required_) Absolute or relative path of a JPG, PNG or SVG file                                            |
| `hide`    | (_Optional_) Set to `true` to not embed the image on the page                                               |
| `class`   | (_Optional_) Additional class names for the &lt;amp-img&gt; component                                             |
| `width`   | (_Optional_) Specify the image width (in px). _Default:_ 730 (px)                                           |
| `height`  | (_Optional_) Specify the image height (in px). _Default:_ 411 (px)                                          |
| `fit`     | (_Optional_) The horizontal alignment of the thumbnail in cards and post grid. _Options:_ `left`/`right` |

### Pin featured posts

You can pin a post to the list/grid of Featured Posts in the theme by the following front matter:

```yaml
featured: true
```

### Add custom CSS to HTML <head> section

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
    table { font-size: smaller; margin-bottom: 1.5rem; }
    tr:nth-child(odd) { backgroud-color: #e3edf3; }
    td { padding: 0 15px; }
```

{: style="margin-bottom: auto;" }
**💡 Learn more:**

- [Badges](https://getbootstrap.com/docs/4.0/components/badge/ "Bootstrap 4"){:.external}
- [Code Block](/code/ "AMP Affiliately Jekyll Theme")
- [How To Create A Zebra Striped Table](https://www.w3schools.com/howto/howto_css_table_zebra.asp "W3Schools"){:.external}

```yaml
amp:
  addthis: true  # layout level
  iframe: true   # layout level
  script: true   # layout level
  gist: true     # page level
  youtube: true  # page level
```

**💡 Related:** [How to include YouTube Video and Playlist embeds](/amp-affiliately-jekyll-theme/media/#video  "AMP Affiliately Jekyll Theme")

### Add custom codes to HTML <head> section

In the front matter, you can add your codes to the HTML header using the variable `custom_header`.

```yaml
custom_head: >-
  # Custom meta tags and AMP script components in page level
```

For examples, you can specify additional meta tags and AMP components as the followings:

```yaml
custom_head: >-
  <!-- Instructs web crawlers to not index the page and to not crawl any of the links on the page -->
  <meta name="robots" content="noindex, nofollow">

  <!-- Includes the AMP JS library for <amp-accordion> component -->
  <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>

  <!-- Includes the AMP JS library for <amp-audio> component -->
  <script async custom-element="amp-audio" src="https://cdn.ampproject.org/v0/amp-audio-0.1.js"></script>
```

**💡 Learn more**: [Robots meta tag, data-nosnippet, and X-Robots-Tag specifications](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag "Google Search Central"){:.external}

## For GitHub Project Pages Only

### Display download buttons in a post's sidebar

When you use this theme for the Github Pages of a Github project repository, it is available to show a download button or links to the repository in the sidebar of a Post.

To display the button to the project repository, declare the repository name in your `_config.yml`.

```yaml
repository: <USERNAME>/<PROJECT>
```

Also, appending the `download` variable to the post's front matter.

```yaml
download: true
```

If a release exists in the repository, an additional button that links to the latest release will be shown.

**Note**: Authentication is required to get your repository data in order to show the release button. Please follow the docs of [jekyll
/github-metadata](https://github.com/jekyll/github-metadata/blob/master/docs/authentication.md) to set up your personal access token.

You can also override the latest release button by defining a URL under the `download` variable, _e.g._:

```yaml
downlod:
  url: //.../filename.zip
```

## Further Readings

- [Front Matter Defaults \| Jekyllrb](https://jekyllrb.com/docs/configuration/front-matter-defaults/ "Official Jekyll Documentation"){:.external}
- [README.md - amp-affiliately-jekyll-theme](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/blob/master/README.md "GitHub"){:.external}
