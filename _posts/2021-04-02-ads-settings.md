---
layout: post
title: Ads Settings
date: 2021-04-02 11:00:00 +0800
last_modified_at: 2025-02-13 12:02 +0800
author: chris
categories:
  - doc
tags:
  - Adsense
  - _config
  - styles
  - AMP
permalink: /ads-settings/
image:
  path: /assets/images/web-5771064_730.jpg
  width: "730"
  height: "411"
css:
  syntax: true
  custom: |-
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
excerpt: Ads Styles and Configuration
---

{% include toc.md %}

This theme supports Ad display with Google Adsense using `<amp-ad>` and `<amp-auto-ads>` components.

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

---

## Disable Auto Ads

You can disable and exclude the **Auto Ads** component by configuring `auto_ads: false` as below.

```yaml
# Google Ads
adsense:
  client_id: 'ca-pub-xxxxxxxxxxxxxxxx' # Google Adsense client ID
  auto_ads: false
```

---

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

---

## Ad Background

In general, Adsense Term of Service (TOS) disallows publishers to modify Ads appearance with CSS.
But it leaves blank spaces on the webpage sometimes, when it cannot suggest any Ads that match with the page content.
This is highly undesirable because it will give a very bad user experience.

To make it a little nicer, a small icon is set as the background image of each `<amp-ad>` element as shown below.

{% include picture.html img="ad-placement-background-image.png" width="751" height="285" source="assets" alt="Icon displays at the Ad placement" %}

It is styled with the following CSS code:

```css
amp-ad {
  background-image: url('https://chriskyfung.github.io/amp-affiliately-jekyll-theme/assets/images/b8d82a619c.png');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 50px
}
```

When an Ad unit is successfully loaded and rendered, the entire icon will be covered and will not affect the Ad appearance.

If you still worry about violating the Adsense Policy, you can exclude the CSS styles by setting the following in the `_config.yml` file.

```yaml
adstyle: false
```

---

## Learn More

- [About Accelerated Mobile Pages (AMP) - Google AdSense Help](https://support.google.com/adsense/answer/9187239?hl=en)
- [Set up Auto ads on your AMP site - Google AdSense Help](https://support.google.com/adsense/answer/9261309?hl=en)
- [Create an AMP-compatible display ad unit - Google AdSense Help](https://support.google.com/adsense/answer/9274230?hl=en)
- [Show anchor ads on your AMP site - Google AdSense Help](https://support.google.com/adsense/answer/11418825?hl=en)

---

## Additional Reading

- [Google consent management requirements for serving ads in the EEA, the UK, and Switzerland (for publishers) - Google AdSense Help](https://support.google.com/adsense/answer/13554116?hl=en)
- [Publisher integration with the IAB Europe TCF - Google AdSense Help](https://support.google.com/adsense/answer/9804260?hl=en)
- [Google’s Additional Consent technical specification - Google AdSense Help](https://support.google.com/adsense/answer/9681920?hl=en)
- [Troubleshooting IAB EU TCF v2.2 implementation - Google AdSense Help](https://support.google.com/adsense/answer/9999955?hl=en)
- [Limited ads - Google AdSense Help](https://support.google.com/adsense/answer/14210870?hl=en)
- [Tag an ad request for EEA, the UK, and Switzerland users for restricted data processing - Google AdSense Help](https://support.google.com/adsense/answer/9009582?hl=en)
- [Ads personalization settings in Google’s publisher ad tags - Google AdSense Help](https://support.google.com/adsense/answer/7670312?hl=en&sjid=9046462003459522894-NC)
- [Restricted data processing settings in Google’s publisher ad tags - Google AdSense Help](https://support.google.com/adsense/answer/9598414?hl=en&sjid=9046462003459522894-NC)
