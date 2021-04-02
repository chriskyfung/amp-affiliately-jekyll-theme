---
layout: post
title: Ads Settings
date: 2021-04-02 11:00:00 +0800
author: chris
category: guide
tags: [Adsense]
permalink: /ads-settings/
image:
  path: /assets/images/web-5771064_730.png
  class: shadow-none
css:
  syntax: true
  custom: >-
    table {
      border: 1px solid #ddd;
      width: 100%
    }
    th {
      background-color: #ccc;
      padding: 5px;
    }
    td {
      padding: 5px;
    }
excerpt: "Ads Styles and Configuration"
---

This theme supports Ads display with Google Adsense using `<amp-ad>` and `<amp-auto-ads>` components.

You have to set up your _Adsense client ID_ in `_config.yml` as below.

```yaml
# Google Ads
adsense:
  client_id: 'ca-pub-xxxxxxxxxxxxxxxx' # Google Adsense client ID
```

The theme will include the following two AMP components to the HTML head:

```html
<script async custom-element="amp-auto-ads" 
  src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"></script>
<script async custom-element="amp-ad" 
  src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
```

## Disable Auto Ads

You can disable and exclude the **Auto Ads** component by configuring `auto_ads: false` as below.

```yaml
# Google Ads
adsense:
  client_id: 'ca-pub-xxxxxxxxxxxxxxxx' # Google Adsense client ID
  auto_ads: false
```

## Manually Insert Ad Units

This theme comes with two pre-defined Ad placements:

1. the space before the content per post
2. the sidebar ads section (if the sidebar presents)

You have to assign your Ad unit IDs as the configuration below:

```yaml
# Google Ads
adsense:
  client_id: 'ca-pub-xxxxxxxxxxxxxxxx' # Google Adsense client ID
  ad_slot:
    before_content: xxxxxxxxxx # Ad Slot that places before content
    sidebar: xxxxxxxxxx # Ad Slot that places to sidebar
```

### Recommended Ad sizes

| Placement      | Width | Height | media >= 1200px |
| -------------- | ----- | ------ | --------------- |
| before content | 100%  | 200px  | width: 730px    |
| sidebar        | 100%  | 250px  | width: 300px    |

## Ad Background

Basically, Adsense Term of Service (TOS) disalllows publishers to modify Ads appearance with CSS.
But it leaves blank spaces on the webpage sometimes, when it cannot suggest any Ads that match wtih the page content.
This is higly undesirable, because it will give very bad user experience.

To make a little nicer, a small icon is set as the background image of each `<amp-ad>` element as shown below.

{% include picture.html img="ad-placement-background-image.png" width="751" height="285" source="assets" alt="Icon displays at the Ad placement" %}

It is styled with the following CSS code:

```css
amp-ad {
  background-image: url('https://icon-library.com/images/b8d82a619c.png');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 50px
}
```

When an Ad unit is successfully loaded and rendered, the entire icon will be covered and will not affect to the Ad appearance.

If you still worry about violating the Adsense Policy, you can exclude the CSS styles by setting the following in the `_config.yml` file.

```yaml
adstyle: false
```

<br>
