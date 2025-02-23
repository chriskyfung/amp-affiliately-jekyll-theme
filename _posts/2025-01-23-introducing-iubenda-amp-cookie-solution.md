---
layout: post
title: Introducing iubenda AMP Cookie Solution in Version 3.3.0
date: 2025-01-23 17:01 +0800
permalink: /introducing-iubenda-amp-cookie-solution/
image:
  path: /assets/images/cookie-6116766.svg
  width: "730"
  height: "411"
categories:
  - feature
tags:
  - AMP
  - iubenda
  - Cookie Consent
css:
  badge: true
  custom: |-
    .flex-gallery { display: flex; flex-wrap: wrap; gap: 1rem; }
    .desktop-view-gallery-item { width: min(480px, 100%); }
    .mobile-view-gallery-item { width: 207px; }
    .faq-section h3 { font-size: 1em; font-weight: bold; margin-bottom: 0; }
---

We're excited to introduce a new consent banner option with the [iubenda Privacy Controls and Cookie Solution](https://iubenda.refr.cc/default/u/fumikr?s=sp&t=cp) in version `3.3.0`{:.badge.badge-success} of our Jekyll theme. This update integrates the [iubenda cookie consent on AMP pages](https://www.iubenda.com/en/help/22135-cookie-solution-amp-wordpress), delivering a seamless and compliant user consent experience. As a Google-certified CMP, it offers a reliable alternative to our self-developed consent interface, ensuring full compliance and reliability.

## Key Benefits

- **Google-Certified Compliance**: Rest easy knowing your website meets Google's stringent policy requirements.
- **Effortless Integration**: Get the consent banner up and running with minimal effort.
- **Customizable Options**: Tailor the consent banner to match your website's aesthetic and functional needs.
- **Intuitive User Experience**: Benefit from an easy-to-use, user-friendly consent management interface.

## Screenshots

### Desktop View (1080p)

<div class="flex-gallery">

{% include picture.html img="iubenda-amp-consent-notice-desktop.png" width="1280" height="720" alt="Desktop Consent Notice with Accept, Reject, and Customize Buttons" caption="Desktop Consent Notice" class="desktop-view-gallery-item" source="assets" %}

{% include picture.html img="iubenda-amp-consent-preference-desktop.png" width="1280" height="720" alt="Desktop Consent UI with TCF-Related Preferences on Desktop" caption="Desktop Consent Preferences" class="desktop-view-gallery-item" source="assets" %}

</div>

### Mobile View (412p)

<div class="flex-gallery">

{% include picture.html img="iubenda-amp-consent-notice-mobile.png" width="412" height="915" alt="Mobile Consent Notice with Accept, Reject, and Customize Buttons" caption="Mobile Consent Notice" class="mobile-view-gallery-item" source="assets" %}

{% include picture.html img="iubenda-amp-consent-preference-mobile.png" width="412" height="915" alt="Mobile Consent UI with TCF-Related Preferences" caption="Mobile Consent Preference" class="mobile-view-gallery-item" source="assets" %}

</div>

## Frequently Asked Questions

{% capture faq %}

### Q: Why should I use the iubenda AMP Cookie Solution?

A: The iubenda AMP Cookie Solution is essential for ensuring GDPR compliance. As a Google-certified CMP, it meets the requirements for using Google Analytics and Google AdSense.

Moreover, [iubenda] offers a free-tier option, making it accessible for websites of all sizes. The solution supports the Transparency and Consent Framework (TCF) on AMP, ensuring fast-loading mobile pages and a user-friendly consent banner.

By adopting the iubenda AMP Cookie Solution, you can ensure GDPR compliance and other privacy regulations while accessing cost-effective implementation and comprehensive support for TCF and AMP. This robust and flexible solution simplifies consent management, helping you maintain user trust and regulatory compliance effortlessly.

[iubenda]: https://iubenda.refr.cc/default/u/fumikr?s=sp&t=cp

### Q: How do I customize the consent banner?

A: You can personalize the consent banner by:

- Adjusting the style and position of the floating consent button in your `_config.yml` file, as outlined in our [config guide]({% post_url 2021-08-02-config-guide %}/#iubenda-cookie-consent).
- Logging into your iubenda account and customizing the cookie notice via the [iubenda dashboard](https://www.iubenda.com/en/help/3831-customize-cookie-banner).
- Configuring the settings in the remote consent UI's HTML file as outlined in [iubenda's instructions](https://www.iubenda.com/en/help/22135-cookie-solution-amp-wordpress#websites-not-powered-by-wordpress) and [advanced guide](https://www.iubenda.com/en/help/1205-how-to-configure-your-cookie-solution-advanced-guide).

For more detailed customization options, please refer to the [iubenda documentation](https://www.iubenda.com/en/help/3182-cookie-consent-amp-pages).

{% endcapture %}

<div class="faq-section">
{{ faq | markdownify }}
</div>

## Support

For any issues or questions, please report bugs and issues on [our GitHub repository](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/issues). We appreciate your contributions and feedback!

## See Also

- [Granular User Consent Updates for v3.3.1]({% post_url 2025-02-01-verifying-the-iubenda-cookie-solution %})
- [Verifying iubenda Cookie Solution on AMP Pages]({% post_url 2025-02-01-verifying-the-iubenda-cookie-solution %})
- [Set Up Free Geo-Targeted Cookie Consent on AMP Pages with Iubenda and amp-geo]({% post_url 2025-02-10-setup-free-geo-targeted-cookie-consent-amp-iubenda %})

## References and Further Reading

- [Pricing FAQs - iubenda help](https://www.iubenda.com/en/help/6633-pricing-faqs)
