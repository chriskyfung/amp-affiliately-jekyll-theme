---
layout: post
title: "Introducing the New Alert Component: Highlight Key Information with Style"
date: 2025-09-10 18:09 +0800
permalink: /introducing-alert-component/
author: chris
categories:
  - feature
tags:
  - component
  - markdown
  - styles
  - demo
image:
  path: /assets/images/alert.svg
  width: "730"
  height: "411"
css:
  alert: true
  syntax: true
excerpt: Learn how to use the new Bootstrap-style alert component in our Jekyll theme to draw attention to important messages. This guide covers contextual types, customization, and best practices for AMP sites.
---

In web design, effectively communicating important information is key to a great user experience. Whether you need to display a success message, a critical warning, or a simple piece of information, visual cues can make all the difference. That's why we're excited to introduce the new **Alert component** to the AMP Affiliately Jekyll Theme.

This powerful and flexible component makes it easy to add stylish, Bootstrap-aligned alerts to your AMP pages, ensuring your messages are both seen and understood.

## What is the Alert Component?

The `alert` component is a simple Jekyll `include` that allows you to create beautiful, responsive, and AMP-compliant notification boxes. It's designed to be lightweight and versatile, supporting various colors, titles, and complex content through Markdown.

## Getting Started: Enabling the Stylesheet

To keep your pages fast and lightweight, the CSS for the alert component is only loaded on pages where it's needed. To enable it, simply add the following to your page's front matter:

```yaml
css:
  alert: true
```

## How to Use the Alert Component

Using the component is as simple as including the `alert.html` file with a few parameters.

### Basic Usage

Here is the basic Liquid syntax:

```liquid
{% raw %}{% include alert.html
  type="primary"
  title="Optional Title"
  content="Your markdown content here."
%}{% endraw %}
```

**Parameters:**

- `type`: Sets the contextual color scheme. Defaults to `primary`.
- `title`: An optional title for the alert box.
- `content`: The main message for your alert.

### Contextual Alert Types

The component supports 8 contextual types, each with a distinct color to match the tone of your message.

- **`type`**: Can be `primary` (default), `secondary`, `success`, `danger`, `warning`, `info`, `light`, or `dark`.

**Examples:**

{% include alert.html type="primary" title="Primary" content="A simple primary alert—check it out!" %}
{% include alert.html type="secondary" title="Secondary" content="A simple secondary alert—check it out!" %}
{% include alert.html type="success" title="Success" content="A simple success alert—check it out!" %}
{% include alert.html type="danger" title="Danger" content="A simple danger alert—check it out!" %}
{% include alert.html type="warning" title="Warning" content="A simple warning alert—check it out!" %}
{% include alert.html type="info" title="Info" content="A simple info alert—check it out!" %}
{% include alert.html type="light" title="Light" content="A simple light alert—check it out!" %}
{% include alert.html type="dark" title="Dark" content="A simple dark alert—check it out!" %}

## Advanced Usage: Rich Content with Markdown

The `content` parameter is processed by Jekyll's `markdownify` filter, which means you can include any valid Markdown, such as lists, links, bold text, and more. For multi-line or complex content, it's best to use the `capture` tag.

Here’s how you can create an alert with rich content:

```liquid
{% raw %}{% capture alert_content %}
This is a more complex alert. You can include:

- Unordered lists
- **Bold text** and *italic text*
- [Links to other pages](/)
- And even `inline code`!
{% endcapture %}

{% include alert.html
  type="info"
  title="Did You Know?"
  content=alert_content
%}{% endraw %}
```

**Result:**

{% capture alert_content %}
This is a more complex alert. You can include:

- Unordered lists
- **Bold text** and _italic text_
- [Links to other pages](/)
- And even `inline code`!
{% endcapture %}

{% include alert.html type="info" title="Did You Know?" content=alert_content %}

## Best Practices for Using Alerts

Alerts are a great tool, but they should be used thoughtfully to be effective.

1. **Don't Overuse Them:** Too many alerts on a page can overwhelm the user and diminish their impact. Use them only for information that truly needs to stand out.
2. **Choose the Right Context:** Use colors purposefully. A `danger` alert should be reserved for critical warnings, while an `info` alert is better for neutral tips.
3. **Keep it Concise:** Get straight to the point. Users should be able to understand the message at a glance.

## Conclusion

The new alert component is a small but powerful addition to the theme, giving you a flexible and attractive way to communicate with your audience. We encourage you to explore its possibilities and use it to create clearer, more effective content on your AMP site. Happy coding!
