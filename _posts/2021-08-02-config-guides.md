---
layout: post
title: Config Guide
date: 2021-08-02 11:25 +0800
category: [guide, config]
tags: [_config.yml]
permalink: /config-guide/
image: 
   path: /assets/images/settings-3311592.svg
css:
  syntax: true
  custom: >-
    table { font-size: smaller; margin-bottom: 1.5rem; }
    tr:nth-child(odd) { backgroud-color: #e3edf3; }
    td { padding: .5em; }
featured: true
download: true
---

{% include toc.md %}

## A. Use AMP Affiliately Theme as Remote Theme

1. Add `jekyll-remote-theme` as an array-value of the key `plugins` in your site's `_config.yml` file, like this:

   ```yaml
   plugins:
      - jekyll-remote-theme
   ```

2. Add `gem "jekyll-remote-theme"` to the Bundler group your **Gemfile**, like this:

   ```ruby
   group :jekyll_plugins do
      gem "jekyll-remote-theme"
      gem "another-jekyll-plugin"
   end
   ```

3. Run `bundle install` to install the plugin before building your site locally.

4. Add `remote_theme: chriskyfung/amp-affiliately-jekyll-theme` to your `_config.yml` file.

5. Add Theme Configuration to your `_config.yml` file.

**Note**: You must update the `jekyll-remote-theme` plugin to `v0.4.2` or higher if you use **Jekyll 4.0+**.

You may also optionally specify a branch, tag, or commit to using by appending an `@` and the Git ref (e.g., `chriskyfung/amp-affiliately-jekyll-theme@v1.2.8`). If you don't specify a Git ref, the master branch will be used.

## B. Theme Configuration

You should include the following in the `_config.yml` file to set up the theme.

| Setting            | Description |
| ------------------ | ----------- |
| `title`            | Your site's title (See also [Jekyll SEO Tag](https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md "jekyll-seo-tag/docs/usage")). Also, used as the text of the first menu item if `repostory` is configured in the `_config.yml` |          |
| `url`           | The web address of your site including the protocol, subdomain, and domain name, e.g. `https://yourdomain.com` or `https://www.yourdomain.com` |
| `baseurl`          | The first route parameter after your domain name in the URL, e.g. `''` if the site is deployed to `www.yourdomain.com` and `/repo-1` if the root is `www.yourdomain.com/repo-1/` |
| `favicon`          | The path to the [favicon](https://stackoverflow.com/questions/4888377/how-to-add-a-browser-tab-icon-favicon-for-a-website) file |
| `logo`             | The path to the (JPG/PNG/SVG) image that will be displayed on the navigation bar |
| `name`             | Your site's name used as the alt text of your logo image. Also, displayed in the copyright notice, if `copyright.owner` is not configured in the `_config.yml`  |
| `copyright` | Your custom setting of copyright notice:<br>`prepend` - The text prepend to the year. _Default:_ `Copyright © `<br>`owner` - The name of the copyright holder. _Default:_ _`site.name`_<br>`link` - The URL to go when clicking on the copyright notice. _Default:_ `/`<br>`append` - The text at the end of the copyright notice. _Default:_ `. All rights reserved.`

### Sidebar Widgets

#### Site-wide Display Featured and Recent Posts in Sidebar

In the `_config.yml` file, add the following to enable showing **FEATURED** and **RECENT POSTS** widgets in your sidebar.

   ```yaml
   sidebar:
      featured: true
      recent_posts: true
   ```

   *Set `false` to disable the widgets as you need.*

#### Show GitHub Repo Information in Sidebar on a Page

When you use this theme for the website of a Github project repository, it is available to show buttons that link to the repository and a release file in the sidebar.

You have to declare the repository name in the `_config.yml` file, like this:

```yaml
repository: <USERNAME>/<PROJECT>
```

Also, add the following front matter to any pages that you want to show the buttons.

```yaml
download: true
```

A sidebar widget named **RESOURCES** with a button link to the GitHub repository will be shown on the page

When releases are present in the repository, an additional button that links to the latest release webpage will be shown in the widget.

**Note**: Authentication is required to get your repository data to show the release button. Please follow the docs of [jekyll
/github-metadata](https://github.com/jekyll/github-metadata/blob/master/docs/authentication.md) to set up your personal access token.

You can also override the link of the second button and point it to a downloadable file by configuring it like this:

```yaml
download:
  url: //.../filename.zip
```

### Anchor Link for H2 and H3 Headings `v1.8`

Attaching an anchor link next to H2 and H3 elements similar to [AnchorJS](https://www.bryanbraun.com/anchorjs/).

Use the following to disable the anchor link feature:

```yaml
anchor_link: false
```

### Set target="_blank" to External Links  `v1.8`

Inserting `class="external"` and appending `rel="noopener noreferrer" target="_blank"` to the <a> tag of every outbound link within the content generated from post markdown.

Use the following to disable this feature,

```yaml
target_blank: false
```

* * *

### SEO Configuration

**AMP Affiliately Theme** uses [Jekyll SEO Tag](https://github.com/jekyll/jekyll-seo-tag) to output machine-readable metadata for search engines and social networks to index and display. The following is recommended to configure in the `_config.yml` file:

| Setting            | Description |
| ------------------ | ----------- |
| `tagline` | A short description used as part of the title tag  |
| `description`      | A longer description used for the description meta tag |
| `locate` |  The locale these tags are marked up in. Default is `en_US`. Takes priority over existing config key lang |

You can learn more about the usage of the SEO tag plugin from [here](https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md "jekyll-seo-tag/docs/usage").

### Global Configuration

| Setting         | Description                 |
| --------------- | --------------------------- |
| `permalink`     | `/:year/:month/:day/:title` |
| `paginate`      | The maximum number of Posts you’d like to be displayed per-page in the generated site, e.g. `10` (See also [Pagination](https://jekyllrb.com/docs/pagination/ "Official Jekyll Documentation")) |
| `paginate_path` | The destination of the pagination pages (See also [Pagination](https://jekyllrb.com/docs/pagination/ "Official Jekyll Documentation")) |
| `timezone`      |  Any entry from the [IANA Time Zone Database](https://en.wikipedia.org/wiki/Tz_database "Wikipedia") is valid, e.g. America/New_York. A list of all available values can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones "Wikipedia") |

**💡 Learn More:**

- [Configuration Options \| Jekyllrb](https://jekyllrb.com/docs/configuration/options/ "Offical Jekyll Documentation")
- [Default Configuration](https://jekyllrb.com/docs/configuration/default/ "Offical Jekyll Documentation")

### Enabling 3rd-party components

#### <i class="fab fa-google"></i> Google Services

##### Google Adsense

- Read the [Ads Settings](/amp-affiliately-jekyll-theme/ads-settings/) documentation

##### Google Analytics

- Set up your _Analytics Tracking ID_ in `_config.yml`.

##### Google Custom Search Engine

- Set up your _gcse ID_ in `_config.yml`.

##### Google Tag Manager

- Set up your _GTM AMP container ID_ in `_config.yml`.

#### <i class="fab fa-github"></i> GitHub Properties