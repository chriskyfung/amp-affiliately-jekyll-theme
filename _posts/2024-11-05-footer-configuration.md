---
layout: post
title: Footer Configuration
date: 2024-11-05 16:01 +0800
author: chris
categories:
  - doc
tags:
  - _config
permalink: /footer-configuration/
image:
  path: /assets/images/footer-331115.svg
  width: "1920"
  height: "1080"
css:
  badge: true
  syntax: true
  custom: |-
    table { font-size: .95rem; margin-bottom: 1.5rem; }
    th { background-color: #f8f9fa; font-weight: 600; }
    th, td { padding: .5em; border-top: 1px solid #dee2e6; }    .box { border: 1px solid #e3edf3; padding: 1rem; }
    .blue { color: #2266ff; }
    .green { color: mediumseagreen; }
    .github-sponsors-button { border: 0; border-radius: 6px; margin-left: 2rem; width: 114px; height: 32px; }
excerpt: Learn how to customize your footer configuration with YAML in Front Matter CMS for enhanced usability and compliance.
---

{% include toc.md %}

* * *

Starting from version <span>v3.1.0</span>{:.badge.badge-success}, our theme's footer has been enhanced to allow customization of the second and third columns (`col1` and `col2`) directly through the `_config.yml` file. Additionally, we provide configurable options for copyright notices and privacy policy links that were available in previous versions.

## Footer Columns Configuration

### Configuration Example

To define the titles and link lists for `col1` and `col2`, add the following YAML configuration in your `_config.yml` file:

```yaml
# Footer Features
footer:
  col1:
    title: Resources
    items:
      - name: Design Guidelines
        url: /resources/design-guidelines/
      - name: Style Guide
        url: /resources/style-guide/
      - name: Media Library
        url: /resources/media-library/
  col2:
    title: Documentation
    items:
      - name: Getting Started
        url: /docs/getting-started/
      - name: API Reference
        url: /docs/api-reference/
      - name: Plugin Guide
        url: /docs/plugin-guide/
      - name: Configuration
        url: /docs/configuration/
```

### Detailed Breakdown

- **`col1` Configuration:**
  - **title:** Sets the column title.
  - **items:** Defines a list of links for the column.
    - **name:** The display name of the link.
    - **url:** The target URL for the link.

- **`col2` Configuration:**
  - **title:** Sets the column title.
  - **items:** Defines a list of links for the column.
    - **name:** The display name of the link.
    - **url:** The target URL for the link.

## Bottom Bar Configuration

In addition to configuring the footer columns, the following bottom bar settings are available for customization:

### Copyright Notice

|   Attribute | Property  | Description                                                                                                                                |
| ----------: | --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `copyright` |           | Your custom setting of copyright notice:                                                                                                   |
|             | `prepend` | <span>v2.0</span>{:.badge.badge-success}<br> The text prepend to the year.<br> _Default:_ `Copyright ©`{:.blue}.                          |
|             | `owner`   | The name of the copyright holder.<br> _Default:_ _`site.name`_.                                                                            |
|             | `link`    | The URL to go when clicking on the copyright notice.<br> _Default:_ `/`.                                                                   |
|             | `append`  | <span>v2.0</span>{:.badge.badge-success}<br> The text at the end of the copyright notice.<br> _Default:_ `. All rights reserved.`{:.blue}. |

**Default format:**

```html
{% raw %}
{{ prepend }}{{ CURRENT YEAR }} <a href="{{ link }}">{{ owner }}<a>{{ append }}
{% endraw %}
```

> Copyright © 2024 [Chris KY FUNG's Blog](https://chriskyfung.github.io). All rights reserved.

**Example 1:**

```yaml
copyright:
   prepend: "© 2020-"
   owner: "Chris KY FUNG"
   link: https://github.com/chriskyfung/
```

> © 2020-2024 [Chris KY FUNG](https://github.com/chriskyfung/). All rights reserved.

**Example 2:**

```yaml
copyright:
   prepend: "GitHub ©"
   owner: ""
   append: ""
```

> Github © 2024

### Privacy Policy Link

|        Attribute | Property  | Description                                                                                                                                      |
| `privacy_policy` | `url`     | <span>v2.8.1</span>{:.badge.badge-success}<br> The URL to go when clicking on the privacy policy link.<br> _Default:_ `/privacy-policy`{:.blue}. |
