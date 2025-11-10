---
layout: post
title: Styles
date: 2017-11-30 04:00:00
last_modified_at: 2025-09-10 19:58 +0800
author: chris
categories:
  - feature
tags:
  - markdown
  - styles
  - demo
permalink: /style-guide/
redirect_from:
  - /2017/11/30/style-guide
amp:
  youtube: true
css:
  syntax: true
  custom: |-
    table { margin: auto auto 1.5rem auto; }
    th, td { padding: 0 15px; }
excerpt: A comprehensive style guide showcasing Markdown and HTML elements, typography, and component styling in this Jekyll theme.
image:
  path: /assets/images/write-2160925.svg
  width: "730"
  height: "411"
---

Welcome to the style guide! This page demonstrates all the text styles and Markdown formatting capabilities [^1] available in this theme. You'll find examples of typography, components, and HTML elements styled with Kramdown [^2], making it easy to format your content.

[^1]: [Kramdown Cheat Sheet \| Alberto's repos](https://aoterodelaroza.github.io/devnotes/kramdown-cheatsheet/)
[^2]: [Markdown Kramdown Tips & Tricks \| GitLab](https://about.gitlab.com/blog/2016/07/19/markdown-kramdown-tips-and-tricks/)

{% include toc.md %}

---

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Lorem ipsum dolor sit amet, [test link](#) adipiscing elit. **This is strong.** Nullam dignissim convallis est. Quisque aliquam. _This is emphasized._ Donec faucibus. Nunc iaculis suscipit dui. 5<sup>3</sup> = 125. Water is H<sub>2</sub>O. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. <cite>The New York Times</cite> (That’s a citation). Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.

The table below shows the font size of heading and paragraph elements.

| Element | Font Size | Computed Size |
| :-----: | :-------: | :-----------: |
|   h1    |  2.25rem  |     36px      |
|   h2    |  1.75rem  |     28px      |
|   h3    |  1.5rem   |     24px      |
|   h4    |  1.25rem  |     20px      |
|   h5    |   1.rem   |     16px      |
|   h6    | 0.875rem  |     14px      |
|    p    | 1.0625rem |     17px      |

<abbr title="Hyper Text Markup Language">HTML</abbr> and <abbr title="Cascading Style Sheets">CSS</abbr> are our tools. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. To copy a file type <code>COPY <var>filename</var></code>. ~~Dinner’s at 5:00.~~ <ins>Let’s make that 7.</ins>

---

## Blockquotes

Let’s keep it simple. Italics are good to help set it off from the body text. Be sure to style the citation.

> Good afternoon, gentlemen. I am a HAL 9000 computer. I became operational at the H.A.L. plant in Urbana, Illinois on the 12th of January 1992. My instructor was Mr. Langley, and he taught me to sing a song. If you’d like to hear it I can sing it for you. <cite>— [HAL 9000](http://en.wikipedia.org/wiki/HAL_9000)</cite>

And here’s a bit of trailing text.

---

## List Types

### Definition List

Definition List Title
: This is a definition list division.

Definition
: An exact statement or description of the nature, scope, or meaning of something: **our definition of what constitutes poetry.**

### Ordered List

1. List Item 1
2. List Item 2
   1. Nested list item A
   2. Nested list item B
3. List Item 3

### Unordered List

- List Item 1
- List Item 2
  - Nested list item A
  - Nested list item B
- List Item 3

---

## Text-Level Semantics

The [a element](#) example  
The <abbr>abbr element</abbr> and <abbr title="Title text">abbr element with title</abbr> examples  
The **b element** example  
The <cite>cite element</cite> example  
The `code element` example  
The ~~del element~~ example  
The <dfn>dfn element</dfn> and <dfn title="Title text">dfn element with title</dfn> examples  
The _em element* example  
The <i>i element</i> example  
The **ins element** example  
The <kbd>kbd element</kbd> example  
The <mark>mark element</mark> example  
The <q>q element <q>inside</q> a q element</q> example  
The <s>s element</s> example  
The <samp>samp element</samp> example  
The <small>small element</small> example  
The <span>span element</span> example  
The **strong element** example  
The <sub>sub element</sub> example  
The <sup>sup element</sup> example  
The <var>var element</var> example  
The <u>u element</u> example

---

## Preformatted Text

Typographically, preformatted text is not the same thing as code. Sometimes, a faithful execution of the text requires preformatted text that may not have anything to do with code. Most browsers use Courier and that’s a good default — with one slight adjustment, Courier 10 Pitch over regular Courier for Linux users.

### Code

Code can be presented inline, like `<?php bloginfo('stylesheet_url'); ?>`, or within a `<pre>` block. Because we have more specific typographic needs for code, we’ll specify Consolas and Monaco ahead of the browser-defined monospace font.

Code blocks can also be inserted with the highlight tag as below:

```liquid
{% raw %}
{% highlight language-x %}
# some code
{% endhighlight %}
{% endraw %}
```

More information about code highlighting in jekyll can be found [in Jekyll documentation](https://jekyllrb.com/docs/templates/#code-snippet-highlighting).

These area a couple of examples showing the resulting highlighted code:

```css
/* css code sample */
#container {
    float: left;
    margin: 0 -240px 0 0;
    width: 100%;
}
```

```javascript
// javascript code sample
$.ajax({
  type: 'POST',
  url: 'backend.php',
  data: "q="+myform.serialize(),
  success: function(data){
    // on success use return data here
  },
  error: function(xhr, type, exception) {
    // if ajax fails display error alert
    alert("ajax error response type "+type);
  }
});
```

```swift
// Swift code sample
import Foundation

@objc class Person: Entity {
  var name: String!
  var age:  Int!

  init(name: String, age: Int) {
    /* /* ... */ */
  }

  // Return a descriptive string for this person
  func description(offset: Int = 0) -> String {
    return "\(name) is \(age + offset) years old"
  }
}
```

### Callout

A shortcode for creating a colored box, e.g. tips/memo. The component is flexible, supporting custom colors, predefined types, an optional title, and Markdown content.

For more advanced, Bootstrap-aligned alerts with more contextual variations, see the new [Alert Component]({% post_url 2025-09-10-introducing-alert-component %}).

#### Predefined Types

Use the `type` parameter for standard notifications. Supported types are `info`, `success`, `warning`, and `danger`.

{% include callout.html type="info" title="Info" content="This is an informational message." %}
{% include callout.html type="success" title="Success" content="The operation was completed successfully." %}
{% include callout.html type="warning" title="Warning" content="Please be aware of this important detail." %}
{% include callout.html type="danger" title="Danger" content="This is a critical warning message." %}

#### Custom Color and Rich Content

You can combine features like a `title`, custom `color`, and rich Markdown content. The `color` attribute is ideal for when the predefined types don't fit your needs.

##### **Example 1: Rich Content with a Title**

This example uses the default yellow background but adds a title to complex content.

{% capture callout1 %}
This callout demonstrates the ability to render various Markdown elements:

- Lists (like this one)
- **Bold** and _italic_ text
- Blockquotes
- And even images!

> "The ability to combine Markdown elements provides great flexibility."

{% include picture.html source="assets" img="tree.jpg" width="328" height="200" layout="fixed" alt="picture in callout element" caption="A tree in a callout" %}
{% endcapture %}

{% include callout.html title="Rich Content Demo" content=callout1 %}

##### **Example 2: Using a Custom Color**

Here, we specify a custom background color using the `color` attribute.

{% include callout.html color="#f2e7fe" title="A Custom-Colored Tip" content="This callout uses a light purple background color, specified with a hex code. This is useful for branding or creating unique visual cues." %}

---

## Media

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.

### Image

{% include picture.html source="assets" img="tree.jpg" width="656" height="400" layout="responsive" alt="tree" caption="" class="mb3" %}

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

### Video

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include youtube.html id="lBTCB7yLs8Y" title="Intro to AMP (Accelerated Mobile Pages)" description="Learn about Accelerated Mobile Pages (AMP), an open-source initiative to improve the mobile web experience. Discover benefits for users, publishers, and developers." upload_date="2016-02-11T22:00:13Z" %}

---
