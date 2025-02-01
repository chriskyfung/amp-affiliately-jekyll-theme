---
layout: post
title: Verifying iubenda Cookie Solution on AMP Pages
date: 2025-02-01 21:02 +0800
permalink: /verifying-iubenda-cookie-solution-amp/
excerpt: Learn how to verify the iubenda Cookie Solution on AMP pages for compliance and user experience with this step-by-step guide.
categories:
  - doc
tags:
  - AMP
  - iubenda
  - Cookie Consent
image:
  path: /assets/images/cookie-magnify-5118694.svg
  width: "730"
  height: "411"
css:
  syntax: true
---

Ensuring that the **iubenda Cookie Solution** functions correctly is crucial for maintaining compliance with privacy regulations and offering a seamless user experience on your website. By invoking the Cookie Solution's API methods directly from the iframe, you can verify its behavior and ensure that user consent is being handled correctly. This guide walks you through the process step by step.

## Step-by-Step Guide

### 1. Display the Cookie Solution iframe

To start, you need to display the iubenda Cookie Solution iframe on your website:

- **Use Incognito Mode:** Open a new incognito or private browsing window in your browser. This ensures that no previous cookies or consents interfere with your testing.
- **Click the Floating Consent Button:** If your site includes a floating consent button, click it to manually display the Cookie Solution iframe.

### 2. Open Browser Developer Tools

Access your browser's Developer Tools to inspect elements and execute JavaScript commands:

- **Google Chrome:** Right-click anywhere on the page and select **Inspect**, or press `Ctrl+Shift+I` (`Cmd+Option+I` on macOS).
- **Mozilla Firefox:** Right-click and choose **Inspect Element**, or press `Ctrl+Shift+I`.
- **Microsoft Edge:** Right-click and select **Inspect**, or press `F12`.

### 3. Inspect the iframe Element

Within the Developer Tools:

- Navigate to the **Elements** or **Inspector** tab.
- Expand the DOM tree to locate the `<iframe>` element containing the iubenda Cookie Solution.
- **Tip:** The iframe pointing to iubenda resources can often be identified by the CSS selector `#iubenda > iframe`.

### 4. Invoke API Methods from the Console

With the iframe identified:

- Switch to the **Console** tab in Developer Tools.
- Ensure that the console is executing within the context of the iframe. Some browsers provide a context selection dropdown. If not, you may need to adjust your commands to target the iframe appropriately.

## Useful API Methods

The iubenda Cookie Solution API offers several methods to help you verify consent status and user preferences. Below are some key methods you can utilize:

### **`isConsentGiven()`**

Checks whether the user has given consent.

**Usage:**

```js
_iub.cs.api.isConsentGiven();
// Returns: true if consent is given, false otherwise
```

### **`getPreferences()`**

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

### **`isGoogleNonPersonalizedAds()`**

Determines whether Google should serve non-personalized ads based on the user's consent.

**Usage:**

```js
_iub.cs.api.isGoogleNonPersonalizedAds();
// Returns: true if only non-personalized ads should be served, false otherwise
```

### **`printErrors()`**

Prints any errors related to the iubenda Privacy Controls and Cookie Solution in the browser console.

**Usage:**

```js
_iub.cs.api.printErrors();
```

## Additional Insights

### Understanding Consent Purposes

The `purposes` object in the consent preferences contains keys that represent various consent categories. Grasping these categories allows you to tailor your website’s content and functionality according to user preferences.

**Purpose IDs Mapping:**

1. **Necessary (ID `1`)**
2. **Functionality (ID `2`)**
3. **Experience (ID `3`)**
4. **Measurement (ID `4`)**
5. **Marketing (ID `5`)**

Understanding these purposes helps you respect user choices and adjust your site's features accordingly. For more details, refer to the [iubenda Advanced Guide](https://www.iubenda.com/en/help/1205-how-to-configure-your-cookie-solution-advanced-guide#per-category-consent).

## Testing and Debugging Tips

- **Clear Cookies:** Before each test, clear your browser's cookies or use incognito mode to reset the consent status.
- **Check for Errors:** Use `printErrors()` to display any errors in the console and monitor for JavaScript issues that might affect API method calls.
- **Verify Across Devices:** Test on different browsers and devices to ensure consistent behavior and compatibility.

## References

- **iubenda Advanced Configuration Guide**  
  [How to Configure Your Cookie Solution - Advanced Guide](https://www.iubenda.com/en/help/1205-how-to-configure-your-cookie-solution-advanced-guide)

- **Invoking API Methods from an iframe**  
  [How to Invoke Cookie Solution API Methods from an iframe](https://www.iubenda.com/en/help/23633-how-to-invoke-cookie-solution-api-methods-from-an-iframe)

- **CodePen Example**
  [iubenda API Methods in Action](https://codepen.io/iubenda/pen/WNGmeyv?editors=1000)

By thoroughly verifying the iubenda Cookie Solution using its API methods, you're taking proactive steps toward compliance and demonstrating a commitment to user privacy. Continually refining your implementation will help provide the best experience possible for your users.

## See Also

- [Introducing iubenda AMP Cookie Solution for v3.3.0]({% post_url 2025-01-23-introducing-iubenda-amp-cookie-solution %})
