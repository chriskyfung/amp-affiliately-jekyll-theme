---
layout: post
title: Config Guide
date: 2021-08-24 00:01 +0800
last_modified_at: 2025-07-31 21:23:15 +0800
author: chris
categories:
  - doc
tags:
  - _config
permalink: /config-guide/
image:
  path: /assets/images/settings-3311592.svg
  width: "1920"
  height: "1080"
css:
  badge: true
  syntax: true
  custom: |-
    table { font-size: .95rem; margin-bottom: 1.5rem; }
    tr:nth-child(odd) { background-color: #e3edf3; }
    th, td { padding: .5em; vertical-align: top; }
    .box { border: 1px solid #e3edf3; padding: 1rem; }
    .blue { color: #2266ff; }
    .green { color: mediumseagreen; }
    .github-sponsors-button { border: 0; border-radius: 6px; margin-left: 2rem; width: 114px; height: 32px; }
excerpt: Explore our comprehensive config guide to optimize your Jekyll site with the Amp Affiliately theme and enhance your site's performance.
featured: true
---

{% include toc.md %}

* * *

## <i class="fas fa-puzzle-piece fa-fw"></i> Use as a Remote Theme

1. Add `jekyll-remote-theme` to the `plugins` array in your site's `_config.yml`:

    ```yaml
    plugins:
      - jekyll-remote-theme
    ```

2. Add `gem "jekyll-remote-theme"` to your **Gemfile**:

    ```ruby
    group :jekyll_plugins do
      gem "jekyll-remote-theme"
    end
    ```

3. Run `bundle install` to install the plugin.
4. Set the `remote_theme` in your `_config.yml`:

    ```yaml
    remote_theme: chriskyfung/amp-affiliately-jekyll-theme
    ```

    You can optionally specify a branch, tag, or commit (e.g., `...jekyll-theme@v3.3.2`). If you don't, the `master` branch will be used.

**Note**: You must use `jekyll-remote-theme` version `v0.4.2` or higher for Jekyll 4.0+.

* * *

## <i class="fas fa-cogs fa-fw"></i> Global Configuration

These are standard Jekyll configuration options.

| Attribute       | Description                                                                                                                                         |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| `permalink`     | Defines the URL structure for your posts. Default: `/:year/:month/:day/:title`                                                                      |
| `timezone`      | Sets the time zone for your site. Use a valid entry from the [IANA Time Zone Database], like `America/New_York`. See the [full list][wiki-tz-list]. |
| `paginate`      | (_Optional_) The maximum number of posts to display per page for pagination.                                                                        |
| `paginate_path` | (_Optional_) The URL structure for paginated pages (e.g., `/blog/page:num/`).                                                                       |

[IANA Time Zone Database]: https://en.wikipedia.org/wiki/Tz_database "Wikipedia"
[wiki-tz-list]: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones "Wikipedia"

**💡 Learn More:**

- [Jekyll Configuration Options](https://jekyllrb.com/docs/configuration/options/)
- [Jekyll Default Configuration](https://jekyllrb.com/docs/configuration/default/)
- [Render Paginated Posts]({% post_url 2021-08-24-plugins %}#-jekyll-paginate)

* * *

## <i class="fas fa-paint-roller fa-fw"></i> Theme Configuration

Configure the core look and feel of your site.

| Attribute | Description                                                                                                                                                                                              |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`   | Your site's title. This is also used as the link text for the home button in the navigation bar when the `repository` variable is set.                                                                   |
| `url`     | The full web address of your site (e.g., `https://www.yourdomain.com`).                                                                                                                                  |
| `baseurl` | The subpath of your site. When deploying to a GitHub Project page, this should be your repository name (e.g., `/my-repo`). If the site is at the root of a domain, leave this as an empty string (`''`). |
| `favicon` | The path to your site's [favicon](https://en.wikipedia.org/wiki/Favicon) file.                                                                                                                           |
| `logo`    | The path to your logo image (JPG/PNG/SVG) for the navigation bar. This is also used for [Jekyll SEO Tag] structured data.                                                                                |
| `name`    | Your site's name, used as alt text for the logo and in the copyright notice if not otherwise specified.                                                                                                  |

**Note**: Regarding `title` and `url`, please also review the documentation for [Jekyll Feed] and [Jekyll SEO Tag].

[Jekyll Feed]: https://github.com/jekyll/jekyll-feed "GitHub"
[Jekyll SEO Tag]: https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md "GitHub"
[jekyll-seo-tag-usage]: https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md "GitHub"

* * *

### Navigation Bar

Customize the navigation menu items and buttons.

```yaml
nav:
  buttons:
    # ... Settings for menu buttons
  global:
    # ... Settings for global/domain-level menu items
  local:
    # ... Settings for local/site-level menu items
```

#### Menu Buttons <span>v2.7</span>{:.badge.badge-success}

| Attribute | Property      | Description                                                                                                                                      |
| :-------- | :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `buttons` | `gh_sponsors` | Set `true`{:.green} to show the **GitHub Sponsors** button in the navigation bar. Requires `social.github` to be configured. _Default:_ `false`. |

Example **GitHub Sponsors** buttons

<div class="github-sponsors-button">
   <a class="gh-style btn btn-block" style="margin: 2px 0" aria-label="Sponsor @{{ site.social.github }}" target="_top" href="https://github.com/sponsors/{{ site.social.github }}?o=esb">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-heart icon-sponsor color-fg-sponsors">
        <path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>
      </svg>
      <span>Sponsor</span>
   </a>
</div>

#### Global Menu Items

Use these settings for menu items that should appear across multiple sites on the same domain (e.g., a link back to a main portfolio page).

| Attribute | Property   | Description                                                                                                                                         |
| :-------- | :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| `global`  | `home`     | <span>v2.0</span>{:.badge.badge-success} Set `false` to disable the **HOME** menu item.  _Default:_ `true`{:.green}.                                |
|           | `menu`     | <span>v2.0</span>{:.badge.badge-success} Set `true`{:.green} to include menu items from `_includes/main-nav/global-menu.html`.  _Default:_ `false`. |
|           | `dropdown` | <span>v1.7.2</span>{:.badge.badge-success} Set `false` to exclude global dropdowns.  _Default:_ `true`{:.green}.                                    |

<span>v2.0</span>{:.badge.badge-success} If `home` is enabled, you can further customize it:

| Attribute | Property | Key        | Description                                                                                                |
| :-------- | :------- | :--------- | :--------------------------------------------------------------------------------------------------------- |
| `global`  | `home`   | `location` | Position of the **HOME** button.  _Options:_ `menu-start` or `menu-end`.  _Default:_ `menu-start`{:.blue}. |
|           |          | `text`     | The text for the home menu item.  _Default:_ `Home`{:.blue}.                                               |

#### Local Menu Items

These items appear only on the current site.

| Attribute | Property           | Description                                                                                                                                         |
| :-------- | :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| `local`   | `max_title_length` | <span>v2.0</span>{:.badge.badge-success} The maximum character length for the site title in the navigation bar. _Default_: `40`{:.blue}.            |
|           | `items`            | <span>v1.7.2</span>{:.badge.badge-success} An array of menu items, each with a `name` and `url`.                                                    |
|           | `menu`             | <span>v1.7.2</span>{:.badge.badge-success} Set `true`{:.green} to include menu items from `_includes/main-nav/local-menu.html`. _Default:_ `false`. |

Example for `local.items`:

```yaml
nav:
  local:
    items:
      - name: About
        url: /about
      - name: Contact
        url: /contact/
```

* * *

### List Sorting <span>v2.3</span>{:.badge.badge-success}

| Attribute         | Description                                                                                     |
| :---------------- | :---------------------------------------------------------------------------------------------- |
| `sort_categories` | Set `false` to disable alphabetical sorting of a post's categories. _Default:_ `true`{:.green}. |
| `sort_tags`       | Set `false` to disable alphabetical sorting of a post's tags. _Default:_ `true`{:.green}.       |

* * *

### Post-Processing <span>v2.0</span>{:.badge.badge-success}

These options modify post content after it's generated.

| Attribute      | Description                                                                                                                                                     |
| :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `anchor_link`  | Set `true`{:.green} to add anchor links to H2, H3, and H4 headings within posts, similar to [AnchorJS]. See the [demo][anchor-links-demo].  _Default:_ `false`. |
| `target_blank` | Set `true`{:.green} to add `target="_blank"` and `rel="noopener noreferrer"` to all [external links][outbound-links] in posts.  _Default:_ `false`.             |

[AnchorJS]: https://www.bryanbraun.com/anchorjs/
[anchor-links-demo]: {% post_url 2021-08-15-postprocessing %}#add-anchor-link-to-h2-h3-and-h4-headings-v20
[outbound-links]: {% post_url 2021-08-15-postprocessing %}#set-external-links-to-open-in-a-new-tab-v20

* * *

### Sidebar Options

#### <i class="fas fa-layer-group fa-fw"></i> Site-Wide Display Featured And Recent Posts Sidebar Widgets <span>v1.6</span>{:.badge.badge-success}

| Attribute | Property       | Description                                                             |
| --------: | -------------- | ----------------------------------------------------------------------- |
| `sidebar` |                |                                                                         |
|           | `featured`     | Add **FEATURED** widget to sidebar.<br> _Default:_ `true`{:.green}.     |
|           | `recent_posts` | Add **RECENT POSTS** widget to sidebar.<br> _Default:_ `true`{:.green}. |

- Set `false` to disable the widgets as you need

* * *

### Social Buttons

You can configure the links for social buttons by the following attributes.

#### <span>v2.7</span>{:.badge.badge-success}

The social button will only show if the corresponding attribute is configured.

```yaml
# Soical Buttons
social:
   facebook: your_facebook_username
   twitter: your_twitter_username
   linkedin: your_linkedin_username
   pinterest: your_pinerest_username
   github : your_github_username
   medium: your_medium_username
```

* * *

### Footer Options

For detailed instructions on how to customize your site's footer, visit our [Footer Configuration] page. This guide explains how to personalize the second and third footer columns by setting titles and link lists in the `_config.yml` file. It also provides information on configuring other footer options like copyright notices and privacy policy links.

By following this guide, you can significantly enhance your site's navigation and usability, ensuring that important information is easily accessible to your visitors. Improving your site's footer not only boosts the overall user experience but also contributes to a more professional and polished appearance. Check out the [Footer Configuration] page to make the most of these features.

[Footer Configuration]: {% post_url 2024-11-05-footer-configuration %}

* * *

### Cookie Consent

Our Jekyll theme offers two cookie consent settings: Simple Granular User Consent and Iubenda Cookie Solution. Here are the essential settings:

|         Attribute | Description                                                                                                                                           |
| ----------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
|         `consent` | <span>v2.9</span>{:.badge.badge-success}<br> Set to `true`{:.green} to enable the cookie consent user interface.<br> _Default:_ `false`.              |
| `consent_preview` | <span>v3.3</span>{:.badge.badge-success}<br> Set to `false` to disable cookie consent in the development environment.<br> _Default:_ `true`{:.green}. |

#### Built-In Granular User Consent <span>v2.9</span>{:.badge.badge-success}

A customizable consent UI developed using `amp-consent` and `amp-script` components. It enables granular consent control by categorizing cookies into essential, functional, analytics, and advertising. The UI features a preference modal, allowing users to efficiently manage their consent options per purpose.

|          Attribute | Property           | Description                                                                                                                                                               |
| -----------------: | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `consent_dev_mode` |                    | _Default:_ `true`{:.green}.<br> Set to `false` to remove the `data-ampdevmode` attribute from the custom script.                                                          |
|    `amp_optimizer` |                    | **Deprecated from v3.3.1**{:.badge.badge-default}<br> _Default:_ `false`.<br> Set to `true`{:.green} if you use AMP Optimizer post Jekyll site build.                     |
|      `script_hash` | <br> `consent_gsc` | **Deprecated from v3.3.1**{:.badge.badge-default}<br> The script hash of the custom JavaScript `#get_stored_consentStates`.<br> Read more: [Calculating the script hash]. |

[Calculating the script hash]: https://amp.dev/documentation/components/amp-script#calculating-the-script-hash "Documentation: <amp-script> - amp.dev"

**Note:** This implementation represents a basic privacy practice and does not fulfill GDPR compliance requirements.

For more details, check out the [Granular User Consent Updates for v3.3.1]({% post_url 2025-02-01-verifying-the-iubenda-cookie-solution %}) page.

#### Iubenda Cookie Consent <span>v3.3</span>{:.badge.badge-success} {#iubenda-cookie-consent}

Integrates the Google-certified Consent Management Platform (CMP), crucial for GDPR and privacy compliance. Supports the Transparency and Consent Framework (TCF) and Accelerated Mobile Pages (AMP), offering customizable consent options and an optimized user interface. By incorporating this solution, you ensure industry-standard compliance and enhance user trust, vital for modern websites.

For more information, visit the [Introducing iubenda AMP Cookie Solution]({% post_url 2025-01-23-introducing-iubenda-amp-cookie-solution %}) page.

| Attribute | Property             | Description                                                                                                                                                                                           |
| --------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `iubenda` |                      |                                                                                                                                                                                                       |
|           | `siteId`             | Your site’s unique ID code, used to share preferences among the same website/app.                                                                                                                     |
|           | `cookiePolicyId`     | Your cookie policy’s unique ID code, used to manage and customize the cookie banner/consent banner.                                                                                                   |
|           | `remote_consent_url` | Specify the URL for the remote AMP consent banner to be loaded.                                                                                                                                       |
|           | `tp_btn_style`       | Set to `true`{:.green} to enable the Iubenda icon and style for the floating consent button.<br> _Default:_ `false`.                                                                                  |
|           | `tp_btn_position`    | Define the position of the Iubenda style consent button.<br> _Default:_ `bottom-left`.<br> Other options:`top-left`, `top-right`, and `bottom-right`<br> (effective only if `tp_btn_style` is `true`) |

<span>v3.3.2</span>{:.badge.badge-success}  \
To implement geo-targeted cookie consent with Iubenda and `<amp-geo>`, you can add the following settings to the `_config.yml` file.`

```yaml
# amp-geo settings
amp_geo:
  enabled: true
  consent_override: true
```

**Related:** [Set Up Free Geo-Targeted Cookie Consent on AMP Pages with Iubenda and amp-geo]({% post_url 2025-02-10-setup-free-geo-targeted-cookie-consent-amp-iubenda %})

* * *

### SEO Configuration

**AMP Affiliately Theme** uses [Jekyll SEO Tag](https://github.com/jekyll/jekyll-seo-tag) to output machine-readable metadata for search engines and social networks to index and display. The following is recommended to configure in the `_config.yml` file:

|     Attribute | Description                                                                                              |
| ------------: | -------------------------------------------------------------------------------------------------------- |
|      `author` | Global author informaiton                                                                                |
| `description` | A longer description used for the description meta tag                                                   |
|      `locate` | The locale these tags are marked up in. Default is `en_US`. Takes priority over existing config key lang |
|     `tagline` | A short description used as part of the title tag                                                        |

💡 Learn more about the usage of the SEO tag plugin from [here][jekyll-seo-tag-usage].

**Note**: Regarding to `author` and `description`, please alse read the documentation of [Jekyll Feed] and [Jekyll SEO Tag].

Moreover, it is a good idea to set a default image using [Front Matter defaults],
provide a default [Open Graph] image (`og:image`) and [Twitter Card] image (`twitter:image`) to all of your posts and pages.

[Front Matter defaults]: https://jekyllrb.com/docs/configuration/front-matter-defaults/
[Open Graph]: https://developers.facebook.com/docs/sharing/webmasters/
[Twitter Card]: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image

Here is a basic example from [Jekyll SEO Tag's Advanced usage](https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/advanced-usage.md#author-information):

```yaml
defaults:
  - scope:
      path: ""
    values:
      image: /assets/images/default-card.png
```

* * *

### Options For Third-Party Components

#### <i class="fab fa-google fa-fw"></i> Google Services

##### <i class="far fa-chart-bar fa-fw"></i> Google Analytics

Google Analytics 4 (GA4) provides robust tracking capabilities to help you understand user interactions on your site. The following attributes and configurations are essential for effectively implementing GA4 with AMP:

| Attribute | Description                                                                                                                |
| --------: | -------------------------------------------------------------------------------------------------------------------------- |
|     `ga4` | <span>v2.6.1</span>{:.badge.badge-success}<br> Your (`G-`{:plaintext} ) Measurement ID 💡. [Find your GA4 Measurement ID] |

[Find your GA4 Measurement ID]: https://support.google.com/analytics/answer/12270356 "GA4 Measurement ID - Analytics Help"

For more information about the use of GA4 in this theme, please refer to our [Google Analytics 4 for AMP Features] page.

[Google Analytics 4 for AMP Features]: {% post_url 2024-11-21-google-analytics-4 %}

##### <i class="fab fa-searchengin fa-fw"></i> Google Custom Search Engine (CSE)

| Attribute | Description                                         |
| --------: | --------------------------------------------------- |
|  `cse_id` | Your Search Engine ID 💡 [Find your Google CSE ID] |

[Find your Google CSE ID]: https://support.google.com/programmable-search/answer/12499034 "Search engine ID - Programmable Search Engine Help"

- **Note:** Essential to feature the site's search function

##### <i class="fas fa-ad fa-fw"></i> Google Adsense

| Attribute | Property    | Description                                                                                                                |
| --------: | ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| `adsense` |             |                                                                                                                            |
|           | `client_id` | Your Google Adsense client ID, which starts with `ca-pub-`                                                                 |
|           | `auto_ads`  | Set `false` to disable [Auto ads] in Adsense<br> _Default:_ `true`{:.green}.                                               |
|           | `ad_slot`   | `before_content` - Slot ID of ad unit that places before content<br> `sidebar` - Slot ID of ad unit that places to sidebar |
| `adstyle` |             | Set `false` to not apply custom styles to indicate empty Ad containers.<br> _Default:_ `true`{:.green}.                    |

[Auto ads]: https://support.google.com/adsense/answer/9261805

💡 Read the [Ads Settings]({% post_url 2021-04-02-ads-settings %}) documentation

##### <i class="fas fa-expand fa-fw" style="transform: rotate(45deg)"></i> Google Tag Manager (GTM)

| Attribute | Description               |
| --------: | ------------------------- |
|     `gtm` | Your GTM AMP container ID |

* * *

#### <i class="fab fa-github fa-fw"></i> GitHub

#### <i class="fab fa-github-square fa-fw"></i> Show Github Metadata Widget in Sidebar <span>v1.2</span>{:.badge.badge-success}

This theme supports rendering GitHub Metadata by using the [jekyll-github-metadata] plugin. When you associate it with a GitHUb project repo, a sidebar widget named **RESOURCES** with a button link to the GitHub repository will be shown on the page.

[jekyll-github-metadata]: https://github.com/jekyll/github-metadata

You have to declare the repository name in the `_config.yml` file, like this:

|          Attribute | Description                                                                                                                              |
| -----------------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
|       `Repository` | <span>v1.2</span>{:.badge.badge-success}<br> Declare The Repository Name in the `<Username>/<Project>`.                                  |
| `resources_widget` | <span>v2.0</span>{:.badge.badge-success}<br> Enable side-widely display **Resourece** widget in sidebar.<Br> _Default:_ `true`{:.green}. |
