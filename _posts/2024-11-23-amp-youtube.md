---
layout: post
title: Using AMP YouTube Components
date: 2025-10-28 17:10 +0800
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

- **Responsive Layout**: The `youtube.html` include leverages the `amp-youtube` component, which automatically adjusts video dimensions for optimal viewing on any device.
- **Focused User Experience**: The embedded YouTube player is configured with `rel=0` to ensure that related videos suggested after playback are from the same channel.
- **Enhanced SEO with Schema.org**: <span>v3.6</span>{:.badge.badge-info} The include automatically generates `VideoObject` structured data from the parameters provided, helping search engines understand and index video content more effectively.
- **GA4-Ready Analytics**: <span>v3.1</span>{:.badge.badge-success} Integrates with Google Analytics 4 to track key video interactions, such as play, pause, and completion events. See the [Analytics Integration](#analytics-integration) section for more details.
- **Playlist Embedding**: Supports embedding both individual videos and entire YouTube playlists.
- **Privacy-Enhanced Mode**: <span>v3.2</span>{:.badge.badge-success} Includes the `credentials="omit"` attribute to prevent the YouTube player from sending tracking data, offering a more private user experience.
- **Graceful Fallback**: Provides a fallback link for browsers that do not support the `amp-youtube` player, ensuring all users can access the content.

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

To embed a YouTube video, use the `youtube.html` include in your project. You can customize the embedding by providing the following parameters:

- **id**: The unique identifier for the YouTube video.
- **playlist** (optional): The playlist ID for embedding a playlist.
- **title** (optional): The title of the video for accessibility and tracking.
- **description** (optional): <span>v3.6</span>{:.badge.badge-info} A brief summary of the video, used for `VideoObject` schema markup to improve SEO.
- **upload_date** (optional): <span>v3.6</span>{:.badge.badge-info} The date the video was uploaded in `YYYY-MM-DD` format, also for schema markup.
- **indent** (optional): The leading whitespace for resolving indentation issues with the include tag.

### Examples

#### Embedding a Single Video

```liquid
{% raw %}
{% include youtube.html id="VIDEO_ID" title="VIDEO_TITLE" description="A short description of the video." upload_date="YYYY-MM-DD" indent="  " %}
{% endraw %}
```

- Example Video 1:
  {% include youtube.html id="8jumRGDgxiY" title="GSP319 Build a Website on Google Cloud: Challenge Lab | 🐱‍🏍 GCP learning tour" description="This video is a walkthrough of the GSP319 Challenge Lab." upload_date="2020-06-10" indent="  " %}

- Example Vdieo 2:
  {% include youtube.html id="hkVAY9B0oOI" title="GSP346 Exploring Data with Looker: Challenge Lab | 🐱‍🏍 GCP learning tour" description="This video is a walkthrough of the GSP346 Challenge Lab." upload_date="2021-06-10" indent="  " %}

#### Embedding a Playlist  

```liquid
{% raw %}
{% include youtube.html id="VIDEO_ID" playlist="PLAYLIST_ID" title="PLAYLIST_TITLE" description="A short description of the playlist." upload_date="YYYY-MM-DD" %}
{% endraw %}
```

- Example Playlist:

  {% include youtube.html id="C49jYtIMAsg" playlist="PLmQ8R1QWYBV72R3JoEWzIH1onqIiai6d0" title="Demos of Qwiklabs Challenge Labs - YouTube" description="A playlist of demo videos for Qwiklabs Challenge Labs." upload_date="2025-10-16" indent="  " %}

## SEO and Schema Markup

<span>v3.6</span>{:.badge.badge-info} The `youtube.html` include automatically generates `VideoObject` schema.org structured data. This helps search engines understand your video content, which can lead to better visibility in search results, including rich snippets like video carousels.

The `title`, `description`, and `upload_date` parameters are used to populate this schema. Providing accurate and descriptive information in these fields is highly recommended for optimal SEO.

## Analytics Integration

The theme supports [Google Analytics 4 (GA4) for tracking video interactions]({% post_url 2024-11-21-google-analytics-4 %}#%EF%B8%8F-video-engagement). The `site_content_postproc.html` template processes AMP YouTube components to configure GA4 tracking. It extracts video IDs from `<amp-youtube>` tags and constructs CSS selectors for these components, enabling detailed analytics on video interactions.

### Tracked Events

- **Video Play**: Triggered when a video starts playing.
- **Video Pause**: Triggered when a video is paused.
- **Video Progress**: Tracks progress milestones at 10%, 25%, 50%, 75%, and 100%.
- **Video Completion**: Triggered when a video finishes playing.

By leveraging the AMP YouTube component, this theme provides a robust solution for embedding videos that are fast, responsive, and analytics-ready, enhancing both performance and user engagement.
