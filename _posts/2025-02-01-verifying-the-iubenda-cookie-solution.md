---
layout: post
title: Verifying iubenda Cookie Solution on AMP Pages
date: 2025-02-02 20:31 +0800
last_modified_at: 2025-02-19 17:02 +0800
author: chris
permalink: /verifying-iubenda-cookie-solution-amp/
excerpt: Learn how to verify the iubenda Cookie Solution on AMP pages for compliance and user experience with this step-by-step guide.
categories:
  - doc
tags:
  - AMP
  - iubenda
  - Cookie Consent
  - TCF
image:
  path: /assets/images/cookie-magnify-5118694.svg
  width: "730"
  height: "411"
css:
  alert: true
  syntax: true
  custom: |-
    .article-post .alert:first-of-type {
      margin: 1.5rem auto 2.5em auto;
    }
---

{% capture notice %}
Ensuring that the **[iubenda Cookie Solution]({% post_url 2025-01-23-introducing-iubenda-amp-cookie-solution %})** functions correctly is crucial for maintaining compliance with privacy regulations and offering a seamless user experience on your website. By calling the browser and iubenda Cookie Solution's API methods, you can verify its behavior and ensure that user consent is being handled correctly. This guide will talk you through the process step by step.
{% endcapture %}
{% include alert.html type="info" content=notice %}

{% include toc.md %}

## Step-by-Step Guide

### 1. Display the Cookie Solution iframe

To start, you need to display the iubenda Cookie Solution iframe on your website:

- **Use Incognito Mode:** Open a new incognito or private browsing window in your browser to ensure that no previous cookies or consents interfere with your testing.
- **Click the Floating Consent Button:** If your site includes a floating consent button, click it to manually display the Cookie Solution iframe.

### 2. Open Browser Developer Tools

Open your browser's Developer Tools to inspect elements and run JavaScript commands:

- **Google Chrome:** Right-click anywhere on the page and select **Inspect**, or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd>.
- **Mozilla Firefox:** Right-click and choose **Inspect Element**, or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd>.
- **Microsoft Edge:** Right-click and select **Inspect**, or press <kbd>F12</kbd>.

### 3. Inspect the iframe Element

Within the Developer Tools:

- Navigate to the **Elements** or **Inspector** tab.
- Expand the DOM tree to locate the `<iframe>` element that contains the iubenda Cookie Solution.
- **Tip:** You can identify the iframe with the CSS selector `#iubenda > iframe`.

### 4. Invoke API Methods from the Console

With the iframe identified:

- Switch to the **Console** tab in Developer Tools.
- Make sure the console is executing within the context of the iframe. Some browsers provide a context selection dropdown. If not, you may need to adjust your commands to target the iframe appropriately.

## Useful API Methods and Properties

The browser and iubenda Cookie Solution APIs offer several methods to help you verify consent status and user preferences. Here are some key methods and properties you can utilize:

### Using `window.name` Property

When `<amp-consent>` creates the iframe to embed the CMP's prompt, it passes stored consent information from the main AMP page to the iframe. You can access this data using the `window.name` property inside the iframe.

**Usage:**

```javascript
info = JSON.parse(window.name);
```

**Sample Output:**

```json
{
    "clientConfig": null,
    "consentState": "rejected",
    "consentStateValue": "rejected",
    "consentMetadata": {
        "additionalConsent": "1~XX...",
        "gdprApplies": true
    },
    "consentString": "...",
    "promptTrigger": "action",
    "isDirty": false,
    "purposeConsents": {
        "1": 1,
        "3": 1,
        "4": 1
    }
}
```

With `window.name`, you can interpret how the CMP inside the iframe will react according to this initial state.

For more details, refer to the [AMP Consent Integration Guide](https://github.com/ampproject/amphtml/blob/main/extensions/amp-consent/integrating-consent.md#client-information-passed-to-iframe).

### Using `_iub.cs.api` Methods

- #### `isConsentGiven()`

  Checks whether the user has given consent.
  
  **Usage:**
  
  ```js
  _iub.cs.api.isConsentGiven();
  // Returns: true if consent is given, false otherwise
  ```

- #### `getPreferences()`
  
  Retrieves detailed information about the user's consent preferences.
  
  **Usage:**
  
  ```js
  _iub.cs.api.getPreferences();
  // Returns: An object containing consent details
  ```
  
  **Sample Output:**
  
  ```json
  {
    "id": "abcd1234",
    "timestamp": "2023-10-15T10:30:25.123Z",
    "purposes": {
      "1": true,
      "3": false,
      "4": true
    },
    "tcfv2": "...",
    "gac": "1~xx....",
    "ccpa": "1YY-",
    "gppString": "...",
    "uspr": {
      "s": true,
      "sh": true,
      "adv": true
    }
  }
  ```
  
  - **`id`**: A unique identifier for the consent instance.
  - **`timestamp`**: The date and time when the consent was recorded.
  - **`purposes`**: An object indicating consent (true/false) for each purpose by its ID.
  
- #### `isGoogleNonPersonalizedAds()`
  
  Determines whether Google should serve non-personalized ads based on the user's consent.
  
  **Usage:**
  
  ```js
  _iub.cs.api.isGoogleNonPersonalizedAds();
  // Returns: true if only non-personalized ads should be served, false otherwise
  ```
  
- #### `printErrors()`
  
  Prints any errors related to the iubenda Privacy Controls and Cookie Solution in the browser console.
  
  **Usage:**
  
  ```js
  _iub.cs.api.printErrors();
  ```

### Using `__tcfapi` Function

The `__tcfapi` function is a crucial tool that allows websites to interact with the Transparency and Consent Framework (TCF) and manage user consent according to the General Data Protection Regulation (GDPR) requirements.

This function enables you to execute various commands related to user consent and transparency. For more detailed specifications, refer to the [IAB Tech Lab - CMP API v2 Documentation](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20CMP%20API%20v2.md). For more insights on how iubenda CMP implements TCF, refer to the [Complete Guide to iubenda CMP and IAB TCF 2.2](https://www.iubenda.com/en/help/7440-the-complete-guide-to-iubenda-cmp-and-iab-tcf-2-2#collect-consent-to-ad-personalization).

**Example Usage:**

To access the `TCData` object, use the `__tcfapi` function with the `addEventListener` command as shown below:

```js
__tcfapi('addEventListener', 2, (tcData, success) => {
    success && console.log(tcData);
});
```

**Sample Output:**

When you call the `addEventListener` command, you might receive a response like this:

```json
{
  "addtlConsent": "1~XX...",
  "cmpId": 123,
  "cmpStatus": "loaded",
  "cmpVersion": 123,
  "eventStatus": "cmpuishown",
  "gdprApplies": true,
  "isServiceSpecific": true,
  "listenerId": null,
  "publisher": {...},
  "publisherCC": "AA",
  "purpose": {...},
  "purposeOneTreatment": false,
  "specialFeatureOptins": {...},
  "tcString": "...",
  "tcfPolicyVersion": 5,
  "useNonStandardStacks": false,
  "vendor": {...}
}
```

By using the `__tcfapi` function, you can effectively verify user consent within your website, ensuring compliance with GDPR and other privacy regulations.

For additional information, refer to the [Transparency and Consent (TC) String with Global Vendor List Format](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20Consent%20string%20and%20vendor%20list%20formats%20v2.md?form=MG0AV3).

## Additional Insights

### Understanding Consent Purposes

The `purposes` object in the consent preferences contains keys that represent various consent categories. Grasping these categories allows you to tailor your website’s content and functionality according to user preferences.

**Purpose IDs Mapping:**

1. Necessary (ID `1`)
2. Functionality (ID `2`)
3. Experience (ID `3`)
4. Measurement (ID `4`)
5. Marketing (ID `5`)

Understanding these purposes helps you respect user choices and adjust your site's features accordingly. For more details, refer to the [iubenda Advanced Guide](https://www.iubenda.com/en/help/1205-how-to-configure-your-cookie-solution-advanced-guide#per-category-consent).

### Testing and Debugging Tips

- **Clear Cookies:** Before each test, clear your browser's cookies or use incognito mode to reset the consent status.
- **Check for Errors:** Use `printErrors()` to display any errors in the console and monitor for JavaScript issues that might affect API method calls.
- **Verify Across Devices:** Test on various browsers and devices to ensure consistent behavior and compatibility.

## References

- **iubenda Advanced Configuration Guide**  
  [How to Configure Your Cookie Solution - Advanced Guide](https://www.iubenda.com/en/help/1205-how-to-configure-your-cookie-solution-advanced-guide)

- **Invoking API Methods from an iframe**  
  [How to Invoke Cookie Solution API Methods from an iframe](https://www.iubenda.com/en/help/23633-how-to-invoke-cookie-solution-api-methods-from-an-iframe)

- **CodePen Example**
  [iubenda API Methods in Action](https://codepen.io/iubenda/pen/WNGmeyv?editors=1000)

By thoroughly verifying the iubenda Cookie Solution using this tools, you're taking proactive steps toward compliance and demonstrating a commitment to user privacy. Continuously refining your implementation will help provide the best experience possible for your users.

## See Also

- [Introducing iubenda AMP Cookie Solution for v3.3.0]({% post_url 2025-01-23-introducing-iubenda-amp-cookie-solution %})
- [Set Up Free Geo-Targeted Cookie Consent on AMP Pages with Iubenda and amp-geo]({% post_url 2025-02-10-setup-free-geo-targeted-cookie-consent-amp-iubenda %})
