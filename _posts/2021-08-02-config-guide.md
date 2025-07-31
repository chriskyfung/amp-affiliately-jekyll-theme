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

| Attribute | Property       | Description                                                                     |
| :-------- | :------------- | :------------------------------------------------------------------------------ |
| `sidebar` | `featured`     | Set `false` to hide the **FEATURED** posts widget.  _Default:_ `true`{:.green}. |
|           | `recent_posts` | Set `false` to hide the **RECENT POSTS** widget.  _Default:_ `true`{:.green}.   |

* * *

### Social Buttons <span>v2.7</span>{:.badge.badge-success}

Configure the social media links that appear in the footer and other areas. Buttons only appear if a username is provided.

```yaml
social:
  facebook: your_facebook_username
  twitter: your_twitter_username
  linkedin: your_linkedin_username
  pinterest: your_pinterest_username
  github: your_github_username
  medium: your_medium_username
```

* * *

### Footer

For detailed instructions, see the [Footer Configuration guide]({% post_url 2024-11-05-footer-configuration %}). You can customize:

- The **second and third footer columns** with custom titles and link lists.
- The **copyright notice**.
- The **privacy policy link**.

* * *

### Cookie Consent

This theme provides two methods for handling cookie consent.

| Attribute         | Description                                                                                                                                     |
| :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| `consent`         | <span>v2.9</span>{:.badge.badge-success} Set `true`{:.green} to enable a cookie consent UI.  _Default:_ `false`.                                |
| `consent_preview` | <span>v3.3</span>{:.badge.badge-success} Set `false` to disable the consent banner in the development environment.  _Default:_ `true`{:.green}. |

#### 1. Built-In Granular Consent <span>v2.9</span>{:.badge.badge-success}

A basic, customizable consent UI using `amp-consent` and `amp-script`. It allows users to manage consent by category.

| Attribute          | Description                                                                                                              |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------- |
| `consent_dev_mode` | Set `false` to remove the `data-ampdevmode` attribute from the custom script for production. _Default:_ `true`{:.green}. |
| `amp_optimizer`    | **Deprecated since v3.3.1.** This setting is no longer required.                                                         |
| `script_hash`      | **Deprecated since v3.3.1.** The theme now handles script hashing automatically.                                         |

**Note:** This built-in solution is for basic privacy practices and may not meet full GDPR compliance requirements. For more details, see the [Granular User Consent Updates]({% post_url 2025-02-01-verifying-the-iubenda-cookie-solution %}).

#### 2. Iubenda Cookie Solution <span>v3.3</span>{:.badge.badge-success} {#iubenda-cookie-consent}

Integrates [iubenda](https://www.iubenda.com), a Google-certified Consent Management Platform (CMP) for robust GDPR and privacy compliance.

For a full guide, see [Introducing iubenda AMP Cookie Solution]({% post_url 2025-01-23-introducing-iubenda-amp-cookie-solution %}).

| Attribute | Property             | Description                                                                                                                                |
| :-------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `iubenda` | `siteId`             | Your unique Iubenda site ID.                                                                                                               |
|           | `cookiePolicyId`     | Your Iubenda cookie policy ID.                                                                                                             |
|           | `remote_consent_url` | The URL for the remote AMP consent banner.                                                                                                 |
|           | `tp_btn_style`       | Set `true`{:.green} to use the Iubenda-styled floating consent button. _Default:_ `false`.                                                 |
|           | `tp_btn_position`    | Position of the button (`top-left`, `top-right`, `bottom-left`, `bottom-right`). _Default:_ `bottom-left`. (Requires `tp_btn_style: true`) |

To enable geo-targeted consent, add the following: <span>v3.3.2</span>{:.badge.badge-success}

```yaml
amp_geo:
  enabled: true
  consent_override: true
```

**Related:** [Set Up Free Geo-Targeted Cookie Consent with Iubenda]({% post_url 2025-02-10-setup-free-geo-targeted-cookie-consent-amp-iubenda %})

* * *

### SEO

This theme uses the [Jekyll SEO Tag](https://github.com/jekyll/jekyll-seo-tag) plugin for search engine optimization.

| Attribute     | Description                                                       |
| :------------ | :---------------------------------------------------------------- |
| `description` | A longer site description for the meta tag.                       |
| `author`      | Global author information.                                        |
| `locale`      | The locale for metadata markup (e.g., `en_US`). Overrides `lang`. |
| `tagline`     | A short description used in the title tag.                        |

💡 For advanced usage, see the [official documentation][jekyll-seo-tag-usage].

It is highly recommended to set a default image for social sharing cards ([Open Graph] and [Twitter Card]) using [Front Matter defaults]:

```yaml
defaults:
  - scope:
      path: "" # all files
    values:
      image: /assets/images/default-social-card.png
```

[Front Matter defaults]: https://jekyllrb.com/docs/configuration/front-matter-defaults/
[Open Graph]: https://ogp.me/
[Twitter Card]: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image

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
