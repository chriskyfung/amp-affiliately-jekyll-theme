---
layout: post
title: Post-Processing Demo
date: 2021-08-15 23:15 +0800
last_modified_at: 2021-08-22 09:41 +0800
category: [demo]
tags: [link, heading]
permalink: /post-processing/
image: 
   path: /assets/images/processing_o128.png
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

## Add Anchor Link For H2, H3 And H4 Headings

Starting from <span class="badge badge-success">v2.0</span>, it is enable to attach an anchor link to **H2**-**H4** elements inside posts’ content similar to [AnchorJS](https://www.bryanbraun.com/anchorjs/) with no dependencies. See the [Config Guide]({% post_url 2021-08-02-config-guide %}#-add-anchor-link-for-h2-h3-and-h4-headings) if you perfer to disable this feature in your site.

{% capture headings %}

## H2 Heading

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### H3 Heading

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

#### H4 Heading

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

##### H5 Heading (_no anchor_)

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

###### H6 Heading (_no anchor_)

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{% endcapture %}

**Examples**

<section class="card card-block">
{{ headings | markdownify }}
</section>

## Link Modifier

To enable outbound link tracking with Google Analytics in AMP, you need to insert a `data-vars-event-label` attribute to external links.

Starting from <span class="badge badge-success">v2.0</span>, this theme replace the non-whitelist `jekyll-target-blank.rb` plugin with pure Liquid templating language to modify the links.

See the [Config Guide]({% post_url 2021-08-02-config-guide %}#-modify-external-links-to-open-in-new-tab) if you also want to set opening the external links in a new tab.

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

**Examples**

<section class="card card-block">
{{ links | markdownify }}
</section>
