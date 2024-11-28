---
layout: post
title: Google Analytics 4 for AMP Features
date: 2024-11-21 11:22 +0800
last_modified_at: 2024-11-28 21:11 +0800
category:
  - feature
tags:
  - analytics
permalink: /google-analytics-4/
image:
  path: /assets/images/analytics-3201151.svg
  width: "730"
  height: "431"
css:
  badge: true
featured: true
excerpt: Integrate GA4 with AMP in Jekyll for real-time analytics. Track user interactions, page views, and video engagement seamlessly with enhanced insights.
---

{% include toc.md %}

## Introduction

**Google Analytics 4 (GA4)** is the latest version of Google's analytics platform, offering enhanced tracking and insights capabilities. One of the standout strengths of this AMP-based Jekyll theme is its seamless integration with GA4, enabling you to monitor user interactions and optimize your content based on real-time data. This powerful feature ensures you have access to comprehensive analytics without sacrificing the performance benefits of AMP.

## 🔧 Setting Up GA4 for AMP

To set up GA4 with your AMP pages, follow these steps:

1. **Obtain Your Measurement ID**: Ensure you have set up your GA4 property and obtained the Measurement ID (`G-XXXXXXX`).
2. **Configure Your Site's Settings**: Add the GA4 Measurement ID to your site's settings as described in the [Config Guide]({% post_url 2021-08-02-config-guide %}#-google-analytics).

By following these steps, you'll be able to start tracking user interactions on your AMP pages with GA4.

## 🌟 Registering Custom Parameter in GA4

### 🌐 Cache vs. Non-Cache Analysis

To gain a deeper understanding of how users interact with AMP pages served from the cache versus your own domain, you need to register the custom parameter `ampHost` in your Google Analytics 4 (GA4) property. Follow these steps to set it up:

1. Go to your GA4 property in the Google Analytics dashboard.
2. Navigate to the "Admin" section.
3. Under the "Property" column, click on "Custom Definitions".
4. Click on "Create Custom Dimension".
5. Enter `ampHost` as the name and select the appropriate scope (e.g., Event).
6. Save the custom dimension.

By following these steps, you will have successfully registered the custom parameter `ampHost` in your GA4 property, enabling you to track where your AMP page is served.

For more detailed instructions, you can refer to the [Google Analytics 4 documentation](https://support.google.com/analytics/answer/13707678?hl=en) and this [Stack Overflow page](https://stackoverflow.com/questions/76622349/how-is-the-configuration-of-google-analytics-4-with-amp).

## ✨ Supported Features

**Important**: Please be aware that the current GA4 configuration for AMP does not support the automatic capture of [GA4 Enhanced Measurement events][GA4 Enhanced measurement events].

[GA4 Enhanced measurement events]: https://support.google.com/analytics/answer/9216061?sjid=7071883456625746694-AP

### 👀 Page View Tracking

The theme enables GA4 to track page views on AMP pages, providing essential insights into user behavior and engagement.

### 🧿 Event Tracking <span>v3.1</span>{:.badge.badge-success}

The theme supports detailed event tracking, including the following configurations:

#### ↗️ Outbound Link Clicks

When GA4 is configured, a click event named `outgoing_click` is sent whenever a user clicks an external link. This feature provides insights into which external links are most engaging and which partnerships drive the most traffic.

**Event Details**:

- **Event name**: `outgoing_click`
- **Page location**: The URL of the webpage where the link is clicked (e.g., `https://www.yourdomain.com/about/`).
- **Page title**: The HTML title of the webpage where the link is clicked (e.g., `About Us`).
- **Link URL**: The URL of the clicked link (e.g., `https://www.example.com`), if the outbound link element includes the `data-vars-event-label` attribute.
- **Outbound**: Indicates if the click was on an outbound link. Value: `true`.

**Note**: This theme does not support the `link_classes`, `link_domain`, and `link_id` parameters available in GA4 for non-AMP pages. To overcome the limitations of GA4 for AMP, our theme implements a workaround for the `link_url` parameter.

During the site build process, this theme automatically updates each external link within your post content by adding a `data-vars-event-label` attribute and copying the URL from the `href` attribute. This modification creates a data variable for the `<amp-analytics>` component, allowing it to capture and pass the URL of the clicked link as the `link_url` parameter.

#### ⏯️ Video Engagement

The theme tracks user engagement with YouTube embedded videos inserted using `amp-youtube` components. User interactions are captured through various events, providing valuable insights into how users interact with your video content.

**Event Details**:

- **Video Play**: Triggered when a video starts playing.
  - **Event name**: `video_start`

- **Video Pause**: Triggered when a video is paused.
  - **Event name**: `video_paused`

- **Video Percentage Played**: Triggered at specific percentages of video playback (10%, 25%, 50%, 75%).
  - **Event name**: `video_progress`

- **Video Ended**: Triggered when a video finishes playing.
  - **Event name**: `video_complete`

The events capture comprehensive video details such as:

- **Current Time**: The current playback time in seconds.
- **Duration**: The total length of the video in seconds.
- **Percentage Played**: The percentage of the video that has been watched, calculated dynamically as `(Current Time / Duration) * 100`.
- **Provider**: Always `youtube`.
- **Title**: The title of the video, captured dynamically and passed to GA4 as the `video_title` parameter if the `amp-youtube` component includes the `data-vars-video-title` attribute (e.g., `Video published on Jan 2024`).
- **URL**: The original URL of the video, captured dynamically and passed to GA4 as the `video_url` parameter if the `amp-youtube` component includes the `data-vars-video-url` attribute (e.g., `https://www.youtube.com/watch?v=XXXXXXXXXXX`).

**Note**: This theme does not support the `visible` (boolean) parameter found in GA4 for non-AMP pages. For more information, please refer to the [GA4 Analytics dimensions and metrics](https://support.google.com/analytics/table/13948007?hl=en#query=visible).

For accurate data capture and enhanced video engagement tracking, we recommend using our `youtube.html` template to [embed YouTube videos] on your pages. This ensures that `<amp-youtube>` components include data variables with properly formatted values derived from the `id` and `title` parameters provided by the `include` tag.

[embed YouTube videos]: {% post_url 2024-11-23-amp-youtube %}

### Debugging AMP Analytics

Use Google's debugging tools to troubleshoot and resolve issues with your AMP analytics setup.

## References

For more detailed instructions and information, refer to these reliable sources:

- [Tag setup for AMP  \|  gtag.js  \|  Google for Developers](https://developers.google.com/tag-platform/gtagjs/amp?technology=gtagjs)
- [Documentation: \<amp-analytics\> - amp.dev](https://amp.dev/documentation/components/amp-analytics)
