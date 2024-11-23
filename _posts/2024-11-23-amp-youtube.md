---
layout: post
title: Using AMP YouTube Components
date: 2024-11-23 21:30 +0800
category: [feature]
tags: [youtube]
permalink: /using-amp-youtube/
image: 
   path: /assets/images/youtube-6949586.svg
amp:
  youtube: true
css:
  badge: true
  syntax: true
  custom: >-
    table { font-size: .95rem; margin-bottom: 1.5rem; }
    tr:nth-child(odd) { backgroud-color: #e3edf3; }
    th, td { padding: .5em; }
    .box { border: 1px solid #e3edf3; padding: 1rem; }
    .plaintext { color: mediumseagreen; }
excerpt: The demo and test page of the Anchor Links for headings and the Link Modifier on various Markdown styles.
---

{% include toc.md %}

This Jekyll theme integrates AMP (Accelerated Mobile Pages) components to enhance the performance and user experience of embedded YouTube videos. The AMP YouTube component is specifically designed to ensure fast loading times and a responsive design, making it ideal for modern web development.

## Features

- **Responsive Video Embedding**: The `<amp-youtube>` component automatically adjusts to different screen sizes, ensuring that videos are displayed optimally on all devices.
- **Playlist Support**: You can embed individual YouTube videos or entire playlists, providing flexibility in content presentation.
- **Enhanced Tracking**: The theme includes configuration for [Google Analytics 4 (GA4)][GA4] to track user interactions with YouTube videos, such as play, pause, and completion events.

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

The theme supports [Google Analytics 4 (GA4) for tracking video interactions]. The `site_content_postproc.html` template processes AMP YouTube components to configure GA4 tracking. It extracts video IDs from `<amp-youtube>` tags and constructs CSS selectors for these components, enabling detailed analytics on video interactions.

### Tracked Events

- **Video Play**: Triggered when a video starts playing.
- **Video Pause**: Triggered when a video is paused.
- **Video Progress**: Tracks progress milestones at 10%, 25%, 50%, 75%, and 100%.
- **Video Completion**: Triggered when a video finishes playing.

## Fallback Support

For browsers that do not support the AMP YouTube player, a fallback message is provided, allowing users to watch the video directly on YouTube.

## Integration Notes

- Ensure that the AMP framework is properly integrated into your project to utilize the `<amp-youtube>` component.
- The `data-param-rel="0"` attribute is used to prevent related videos from showing after the video ends, maintaining a focused user experience.

By leveraging the AMP YouTube component, this theme provides a robust solution for embedding videos that are fast, responsive, and analytics-ready, enhancing both performance and user engagement.

[GA4]: {% post_url 2024-11-21-google-analytics-4 %}
[GA4 video tracking]: {% post_url 2024-11-21-google-analytics-4 %}#%EF%B8%8F-video-engagement
