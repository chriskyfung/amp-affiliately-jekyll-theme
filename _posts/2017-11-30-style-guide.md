---
layout: post
title: Styles
date: 2017-11-30 04:00:00
last_modified_at: 2025-03-01 15:03 +0800
author: Peter
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
excerpt: The demos for HTML styling and Markdown output as it appears in the browser.
image:
  path: /assets/images/write-2160925.svg
  width: "730"
  height: "411"
  hide: true
---

This page demostrates the text styles in this theme.

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Lorem ipsum dolor sit amet, [test link](#) adipiscing elit. **This is strong.** Nullam dignissim convallis est. Quisque aliquam. _This is emphasized._ Donec faucibus. Nunc iaculis suscipit dui. 5<sup>3</sup> = 125. Water is H<sub>2</sub>O. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. <cite>The New York Times</cite> (That’s a citation). Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.

The table below shows the font size of heading and paragraph elements.

| Element | Font Size | Computed Size |
| :-----: | :-------: | :-----------: |
|   h1    |  2.5rem   |     40px      |
|   h2    |   2rem    |     32px      |
|   h3    |  1.5rem   |     24px      |
|   h4    |  1.25rem  |     20px      |
|   h5    | 1.125rem  |     18px      |
|   h6    |   1rem    |     16px      |
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

A shortcode for creating a colored box, e.g. tips/memo.

Example:

{% capture callout1 %}
_PUT YOUR MARKDOWN CONTENT HERE..._

> blockquote

{% include picture.html source="assets" img="tree.jpg" width="328" height="200" layout="fixed" alt="picture in callout element" caption="image caption" %}

```js
Code block
```

1. first
2. second
3. thrid

- item 1
- item 2
- item 3
{% endcapture %}

{% include callout.html content=callout1 %}

---

## Media

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.

### Image

{% include picture.html source="assets" img="tree.jpg" width="656" height="400" layout="responsive" alt="tree" caption="" class="mb3" %}

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

### Video

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include youtube.html id="lBTCB7yLs8Y" title="Intro to AMP (Accelerated Mobile Pages)" %}

---

* * *

## Learn More

- [Kramdown Cheat Sheet \| Alberto’s repos](https://aoterodelaroza.github.io/devnotes/kramdown-cheatsheet/)
- [Markdown Kramdown Tips & Tricks \| GitLab](https://about.gitlab.com/blog/2016/07/19/markdown-kramdown-tips-and-tricks/)
