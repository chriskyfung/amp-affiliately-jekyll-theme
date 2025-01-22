---
layout: post
title: Post-Processing
date: 2021-08-15 23:15 +0800
last_modified_at: 2025-01-22 17:01 +0800
categories:
  - feature
tags:
  - styles
  - demo
permalink: /post-processing/
image:
  path: /assets/images/processing_o128.png
  width: "730"
  height: "411"
css:
  badge: true
  syntax: true
  custom: >-
    table { font-size: .95rem; margin-bottom: 1.5rem; }
    tr:nth-child(odd) { backgroud-color: #e3edf3; }
    th, td { padding: .5em; }
    .box { border: 1px solid #e3edf3; padding: 1rem; }
    .plaintext { color: mediumseagreen; }
featured: true
excerpt: The demo and test page of the Anchor Links for headings and the Link Modifier on various Markdown styles.
---

{% include toc.md %}

## Add Anchor Link to H2, H3 And H4 Headings <span>v2.0</span>{:.badge.badge-success}

This theme enables to attach an anchor link to **H2**-**H4** elements inside posts’ content similar to [AnchorJS](https://www.bryanbraun.com/anchorjs/) with no dependencies. See the [Config Guide]({% post_url 2021-08-02-config-guide %}#-add-anchor-link-for-h2-h3-and-h4-headings) if you perfer to disable this feature in your site.

**Examples**:

{% capture headings %}

## H2 Heading

### H3 Heading

#### H4 Heading

##### H5 Heading (_no anchor_)

###### H6 Heading (_no anchor_)

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{% endcapture %}

<section class="card card-block">
{{ headings | markdownify }}
</section>

## Set External Links to Open in a New Tab <span>v2.0</span>{:.badge.badge-success}

Starting from version <span class="badge badge-success">v2.0</span>, this theme has replaced the non-whitelist `jekyll-target-blank.rb` plugin with pure Liquid templating language to modify links. This change ensures compliance with AMP standards and enhances compatibility.

To enable this feature, configure your site settings as described in the [Config Guide]({% post_url 2021-08-02-config-guide %}#-modify-external-links-to-open-in-new-tab). Ensure the `target_blank` configuration is set to `true`.

When enabled, the theme adds `target="_blank"` and `rel="noopener noreferrer"` to all external links. These attributes ensure that links open in a new tab and enhance security by preventing potential security risks associated with `target="_blank"`.

By configuring your external links to open in a new tab, you can improve user experience by maintaining the context of your site while allowing users to explore additional resources.

**Examples**:

{% capture links %}

### regular text link

[external link](https://github.com/chriskyfung/amp-affiliately-jekyll-theme)

### **bold**

[**external link**](https://github.com/chriskyfung/amp-affiliately-jekyll-theme)

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### `code`

[`external link`](https://github.com/chriskyfung/amp-affiliately-jekyll-theme)

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### _italic_

[_external link_](https://github.com/chriskyfung/amp-affiliately-jekyll-theme)

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### _**bold and italic**_

[_**external link**_](https://github.com/chriskyfung/amp-affiliately-jekyll-theme)

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Image in AMP

{% include picture.html source="assets" img="favicon_96x96.png" width="96" height="96" link="https://github.com/chriskyfung/amp-affiliately-jekyll-theme" %}

{% endcapture %}

<section class="card card-block">
{{ links | markdownify }}
</section>
