---
layout: post
title: Granular User Consent Updates for v3.3.1
date: 2025-01-31 09:01 +0800
permalink: /built-in-granular-user-consentamp-consent/
image:
  width: "360"
  height: "213"
  path: /assets/images/built-in-granular-cookie-consent-banner_cover.png
  hide: true
excerpt: Upgrade your AMP Jekyll Theme with version 3.3.1! Enjoy simplified granular user consent, faster loading times, and seamless performance across all devices. 🚀
categories:
  - feature
tags:
  - AMP
  - Cookie Consent
css:
  custom: |-
    .center { margin: auto auto; }
    .mobile-view-gallery-item { width: 207px; }
    .round-modal amp-img { border-radius: 8px; }
    .round-button amp-img { border-radius: 50%; }
---

We're excited to announce the release of version 3.3.1 of our AMP Jekyll Theme, which brings a major upgrade to our built-in granular user consent feature. This update makes it easier than ever by eliminating the need to calculate the script hash of custom JavaScript for each site domain and include it in the `_config.yml` file.

### Key Improvements

- **Simplified Configuration**
  - No more need to include the script hash in the `_config.yml` file.
  - The universal script hash is now automatically included via the `default` layout of our theme.

## Benefits of the Enhanced Granular User Consent

### Full AMP Design

Enjoy the benefits of a fully accelerated mobile page (AMP) design, which ensures lightning-fast loading times and smooth performance on any device. This built-in user consent feature optimizes your website's speed and responsiveness, giving your audience a better browsing experience.

### No Third-Party Solution Required

This user consent feature is a client-side solution that removes the need for a Consent Management Platform (CMP). It reduces reliance on external services, simplifies your tech stack, and eliminates the need for third-party integrations.

### Open-Source and Customizable

As a free and open-source solution, it offers the flexibility to adapt and modify the design, functionality, and settings to meet your specific needs, ensuring a personalized user experience.

## Features of the Built-in Cookie Consent Banner

1. **Granular Cookie Management**
   - Give users detailed control over their cookie preferences.
   - Let users easily select which cookies they consent to, enhancing transparency and trust.

2. **Responsive and Mobile-Friendly**
   - Ensure compatibility with all devices, providing a consistent experience whether on desktop or mobile.

3. **User-Friendly Interface**
   - Offer a simple and intuitive interface that makes user interaction and consent management easy.

<!-- Insert screenshot of the consent banner (desktop) here -->
{% include picture.html img="assets/images/built-in-granular-cookie-consent-banner_desktop_830x151.png" width="830" height="151" alt="Screenshot of the consent banner (desktop)" caption="Desktop view" class="center text-center" source="raw" %}

### Consent Banner

Our built-in consent solution can provide your audience with clear and granular control over their cookie preferences. When a new visitor arrives, a straightforward two-button consent banner appears at the bottom of the site window.

<!-- Insert screenshot of the consent banner (mobile) here -->
{% include picture.html img="assets/images/built-in-granular-cookie-consent-banner_mobile_360x740.png" width="360" height="740" alt="Screenshot of the consent banner (mobile)" caption="Mobile view" class="center text-center mobile-view-gallery-item" source="raw" %}

**Description:**

- The banner has a clear title "Cookie Consent" with a cookie icon.
- A message informs users about the use of cookies to enhance their browsing experience.
- Two action buttons:
  - "Accept All": Users can accept all cookies.
  - "Preferences": Users can manage their cookie preferences in detail.

This banner, the first layer of the consent UI, offers users a quick consent option and opens the preference modal for more detailed choices about their data privacy.

### Consent Preference Modal

The consent preference modal, the second layer of the consent UI, allows users to have granular control over their cookie preferences.

<!-- Insert screenshot of the consent preference modal here -->
{% include picture.html img="assets/images/built-in-granular-consent-preference-modal_345x337.png" width="345" height="337" alt="screenshot of the consent preference modal" caption="Default state (Essential only)" class="center text-center round-modal" source="raw" %}

**Description:**

- Users can choose from four cookie categories: "Essential," "Functionality," "Analytics," and "Advertising."
  - The "Essential" option is checked by default, while the other three options are unchecked.
- At the bottom of the modal, there are two buttons:
  - "Accept": Users can accept the selected cookies.
  - "Decline": Users can decline the selected cookies.

This consent preference modal ensures transparency and empowers users to make informed choices about their data privacy.

### Custom JavaScript for Consent State Management

To further enhance the user experience, we use an `amp-script` component to add custom JavaScript that retrieves the stored consent state from the site cookie. When users open the consent preference modal from the consent banner, the checkboxes are automatically checked to reflect the stored consent state, making it easy for users to manage their preferences without confusion.

### Floating Button for Revisiting Consent Banner

<!-- Insert screenshot of the floating button here -->
{% include picture.html img="assets/images/built-in-granular-consent-floating-button_48x48.png" width="48" height="48" alt="screenshot of the floating button" class="round-button" source="raw" %} A handy floating button lets site visitors easily revisit the consent banner and manage their cookie preferences at any time.

**Description:**

- A circular button a cookie icon remains visible at the bottom left of the screen as users navigate the site, providing constant access to cookie management options.
- Users can click on the button to open the consent banner, giving them control over their data privacy at all times.

This floating button enhances user convenience and ensures transparency.

## Summary and Important Notice

Embrace our feature-rich, easy-to-use, and fully customizable solution that empowers you to manage cookie consent with confidence and ease.

**Important Notice:** This consent UI is not GDPR compliant and is not Google-certified. It is not recommended for sites that display advertisements, especially personalized ads from ad networks like Google AdSense.

## References

- [Documentation: \<amp-consent\> - amp.dev](https://amp.dev/documentation/components/websites/amp-consent)
- [Example: Client Side User Consent Flow - amp.dev](https://amp.dev/documentation/examples/user-consent/client_side_user_consent_flow/)
- [Example: Granular User Consent - amp.dev](https://amp.dev/documentation/examples/user-consent/granular_user_consent/)
