---
layout: post
title: Using AMP YouTube Components
date: 2024-11-23 21:30 +0800
last_modified_at: 2024-12-05 10:12 +0800
author: chris
categories:
  - feature
tags:
  - youtube
permalink: /using-amp-youtube/
image:
  path: /assets/images/youtube-6949586.svg
  width: "1920"
  height: "1080"
amp:
  youtube: true
css:
  badge: true
  syntax: true
excerpt: Enhance your website's performance with AMP YouTube components for fast, responsive video embedding and improved user experience.
---

{% include toc.md %}

This Jekyll theme integrates AMP (Accelerated Mobile Pages) components to enhance the performance and user experience of embedded YouTube videos. The AMP YouTube component is specifically designed to ensure fast loading times and a responsive design, making it ideal for modern web development.

## Features

- **Responsive Video Embedding**: The `<amp-youtube>` component automatically adjusts to different screen sizes, ensuring that videos are displayed optimally on all devices.
- **Focused User Experience**: We've set the [`rel=0`][rel=0] parameter to the YouTube Player ensures that related videos shown after the video ends will come from the same channel, maintaining a focused user experience.
- **Enhanced Tracking**: <span>v3.1</span>{:.badge.badge-success} With Google Analytics 4 (GA4) integration, you can track user interactions with your YouTube videos, including play, pause, and completion events. For more details, see the [Analytics Integration](#analytics-integration) section.
- **Playlist Support**: You can embed individual YouTube videos or entire playlists, providing flexibility in content presentation.
- **Privacy-Enhanced Mode**: <span>v3.2</span>{:.badge.badge-success} We've added the [`credentials="omit"`][credentials=omit] attribute to the `<amp-youtube>` component to improve user privacy. This attribute prevents tracking when videos are embedded, offering a more privacy-focused experience.
- **Fallback Support**: For browsers that do not support the AMP YouTube player, a fallback message is provided, allowing users to watch the video directly on YouTube.

[credentials=omit]: https://amp.dev/documentation/components/amp-youtube#credentials-(optional)
[rel=0]: https://developers.google.com/youtube/player_parameters#rel

## Usage

To embed YouTube videos using the `amp-youtube` extension in your Jekyll project, you must include specific frontmatter in your markdown files. This ensures that the your AMP page incorporates the necessary components for video embedding.

### Frontmatter Setup

Add the following frontmatter to your markdown file to enable the `amp-youtube` extension:

```yaml
---
layout: post
title: "Your Post Title"
date: 2024-11-23
amp:
  youtube: true
---
```

### Embedding YouTube Videos

To embed a YouTube video, use the `youtube.html` template in your project. You can customize the embedding by providing the following parameters:

- **id**: The unique identifier for the YouTube video.
- **playlist** (optional): The playlist ID for embedding a playlist.
- **title** (optional): The title of the video for accessibility and tracking.
- **indent** (optional): The leading whitespace for resolving indentation issues with the include tag.

### Examples

#### Embedding a Single Video

```liquid
{% raw %}
{% include youtube.html id="VIDEO_ID" title="VIDEO_TITLE" indent="  " %}
{% endraw %}
```

- Example Video 1:
  {% include youtube.html id="8jumRGDgxiY" title="GSP319 Build a Website on Google Cloud: Challenge Lab | 🐱‍🏍 GCP learning tour" indent="  " %}

- Example Vdieo 2:
  {% include youtube.html id="hkVAY9B0oOI" title="GSP346 Exploring Data with Looker: Challenge Lab | 🐱‍🏍 GCP learning tour" indent="  " %}

#### Embedding a Playlist  

```liquid
{% raw %}
{% include youtube.html id="VIDEO_ID" playlist="PLAYLIST_ID" title="PLAYLIST_TITLE" %}
{% endraw %}
```

- Example Playlist:

  {% include youtube.html id="C49jYtIMAsg" playlist="PLmQ8R1QWYBV72R3JoEWzIH1onqIiai6d0" title="Demos of Qwiklabs Challenge Labs - YouTube" indent="  " %}

## Analytics Integration

The theme supports [Google Analytics 4 (GA4) for tracking video interactions]({% post_url 2024-11-21-google-analytics-4 %}#%EF%B8%8F-video-engagement). The `site_content_postproc.html` template processes AMP YouTube components to configure GA4 tracking. It extracts video IDs from `<amp-youtube>` tags and constructs CSS selectors for these components, enabling detailed analytics on video interactions.

### Tracked Events

- **Video Play**: Triggered when a video starts playing.
- **Video Pause**: Triggered when a video is paused.
- **Video Progress**: Tracks progress milestones at 10%, 25%, 50%, 75%, and 100%.
- **Video Completion**: Triggered when a video finishes playing.

By leveraging the AMP YouTube component, this theme provides a robust solution for embedding videos that are fast, responsive, and analytics-ready, enhancing both performance and user engagement.
