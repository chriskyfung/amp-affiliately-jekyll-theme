---
layout: post
title: Set Up Free Geo-Targeted Cookie Consent on AMP Pages with Iubenda and amp-geo
date: 2025-02-10 10:02 +0800
permalink: /setup-free-geo-targeted-cookie-consent-amp-iubenda/
image:
  path: /assets/images/cookie-map-4859127.svg
  width: "1920"
  height: "1080"
css:
  badge: true
  syntax: true
excerpt: Learn how to implement geo-targeted cookie consent on AMP pages for free. Optimize your site for different regions and increase ad revenue.
categories:
  - doc
tags:
  - AMP
  - iubenda
  - Cookie Consent
---

_Do you want to improve your website for visitors from different regions?_ Using geo-detection for cookie consent helps you show the right message and make more money from ads, all while keeping things easy and user-friendly.

Last month, we introduced the Iubenda AMP Cookie Solution in the [release of our AMP Jekyll theme <span class="badge badge-success">v3.3.0</span>]({% post_url 2025-01-23-introducing-iubenda-amp-cookie-solution %}). However, there's a catch: Iubenda's geo-detection feature is only available in their Advanced, Ultimate, and Tailored plans, which start at $24.99 USD.

Here's the good news! This guide will show you a simple way to use `<amp-geo>` and `geoOverride` field within `<amp-consent>` to get geo-targeted consent for free. With these tools, you can manage cookie consent for different regions without spending extra money.

Let's deep into with the step-by-step guide below.

## Geolocation-based Consent Flow

### 1. Configuring amp-geo

The `<amp-geo>` component is essential for detecting a user's geographical location to assist client-side decisions. Here’s how to set it up:

Add the following script to your AMP document's `<head>` to include the `<amp-geo>` component:

```html
<script async custom-element="amp-geo" src="https://cdn.ampproject.org/v0/amp-geo-0.1.js"></script>
```

In the document's `<body>`, configure the `<amp-geo>` component like this:

```html
<amp-geo layout="nodisplay">
  <script type="application/json">
    {
      "AmpBind": true,
      "ISOCountryGroups": {
        "gdpr": ["preset-eea"],
        "uspr": ["us", "us-ca"],
        "lgpd": ["br"]
        // Add other groups here
      }
    }
  </script>
</amp-geo>
```

This configuration sets up the `<amp-geo>` component to detect a user's country location.

- The `AmpBind` field enables storing the detected country code and geo group in an `<amp-state>` component, allowing for [debugging](https://amp.dev/documentation/components/amp-bind#debugging-state).

- The `ISOCountryGroups` field defines geo groups using ISO country codes or preset lists to determine which compliance rules apply.

  **Note:** The geo groups should be mutually exclusive to avoid undetermined behavior.

#### How amp-geo Works

When a user visits the website and the AMP runtime requests the `cdn.ampproject.org/v0/amp-geo-0.1.js` file, the AMP server dynamically injects the country code into the file based on its CDN location. This can be identified by looking for the `xv()` function within the code file:

**Example:**

```js
xv(){return"jp                          "}
```

---

### 2. Setting Up Region-Specific amp-consent

Here’s a sample configuration of `<amp-consent>` for handling different geo groups:

```html
<amp-consent id="iubenda" layout="nodisplay" type="iubenda">
  <script type="application/json">
    {
      "promptUISrc": "{{ site.iubenda.remote_consent_url }}",
      "postPromptUI": "post-consent-ui",
      "geoOverride": {
        "gdpr": {
          "promptUISrc": "{{ site.iubenda.remote_consent_url }}?type=gdpr"
        },
        "uspr": {
          "promptUISrc": "{{ site.iubenda.remote_consent_url }}?type=uspr"
        },
        "lgpd": {
          "promptUISrc": "{{ site.iubenda.remote_consent_url }}?type=lgpd"
        }
        // Add your own geo groups configuration here
      }
    }
  </script>
</amp-consent>
```

The `promptUISrc` field specifies the URL for loading the external consent form via an iframe. The `geoOverride` field uses the `<amp-geo>` component to detect the user's geo group and override the `promptUISrc` for region-specific consent forms.

In this case, you need to override the `promptUISrc` to pass the geo group through the URL for each `geoOverride`. AMP will apply the corresponding values to override the existing `<amp-consent>` configuration.

**Note:** If no geo groups are matched, the `<amp-consent>` component will fall back to using the `promptUISrc` configured outside the `geoOverride` field.

---

### 3. Customizing the Iubenda Cookie Solution Iframe

Within the iframe HTML file, add a script to parse the consent type from the URL's query string:

```html
<script>
  // Parse the consent type from the URL pass through
  const searchParams = new URLSearchParams(window.location.search);
  const consentType = searchParams.get("type");
  const isGdpr = consentType === 'gdpr';
  const isLgpd = consentType === 'lgpd';
  const isUspr = consentType === 'uspr';
  const isOthers = !(isGdpr || isLgpd || isUspr);
</script>
```

This script retrieves the `type` parameter, determines the consent type (GDPR, LGPD, USPR, or others), and stores the result in variables for further use in the configuration.

After that, modify the `_iub.csConfiguration` according to your region-specific consent logic. For example:

```html
<script type="text/javascript">
  var _iub = _iub || [];
  // Your own Privacy Controls and Cookie Solution configuration
  _iub.csConfiguration = {
    enableGdpr: isGdpr || isOthers,
    enableUspr: isUspr,
    enableLdpd: isGdpr || isLgpd,
    banner: {
      rejectButtonDisplay: isGdpr || isLgpd,
      showPurposesToggles: isGdpr,
    }
    // You can add other settings here
  };
</script>
```

This script configures the Iubenda cookie solution based on the parsed consent type. The `_iub.csConfiguration` object is set up to enable GDPR, USPR, or LGPD functionality as needed. It also specifies to display the reject button and the purpose toggles for the GDPR banner.

---

## Limitations and Considerations

- The `<amp-consent>` component does not display cookie notices and privacy widgets for users in the United States. When the Iubenda cookie solution processes an opt-out, `<amp-consent>` perceives it as unnecessary and skips showing the consent UI on AMP pages.
- The Iubenda cookie solution does not support per-purpose consent when its GDPR functionality is disabled, potentially leading to issues with unblocking `amp-analytics`, `amp-ads`, and other components using the `data-block-on-consent-purposes` attribute.

If you have any insights on how to compel `<amp-consent>` to display banners or notices for US users, please share your knowledge.

---

## References and Further Reading

- [AMP Consent Documentation](https://amp.dev/documentation/components/websites/amp-consent#geooverride)
- [Geolocation-Based Consent Flow Examples](https://amp.dev/documentation/examples/user-consent/geolocation-based_consent_flow)
