---
layout: post
title: Using Front Matter CMS
excerpt: Effortlessly manage your Jekyll site with Front Matter CMS. Streamline content creation and editing with a user-friendly interface and real-time previews.
date: 2024-11-25 13:11 +0800
last_modified_at: 2024-11-27 21:11 +0800
author: chris
permalink: /front-matter-cms/
image:
  path: /assets/images/map-3314277.svg
  width: "1920"
  height: "1080"
categories:
  - doc
tags:
  - CMS
  - front matter
  - vscode
  - plugin
css:
  syntax: true
---

{% include toc.md %}

## 1. Introduction

**[Front Matter CMS][Front Matter CMS]** is a dynamic and powerful Content Management System seamlessly integrated with **Visual Studio Code** (often abbreviated as **VS Code**). Specifically designed to work with static site generators like Jekyll, Front Matter CMS offers a user-friendly interface that simplifies the process of creating, editing, and managing posts, pages, and other content types. This makes it accessible even for users with limited technical expertise.

By leveraging the combined capabilities of Front Matter CMS and VS Code with your Jekyll site, you can significantly streamline your content management processes, making it easier to maintain and update your site. Some of the key benefits of using Front Matter CMS include:

- **User-Friendly Interface**: Manage your content with ease using an intuitive and straightforward interface within VS Code.
- **Real-Time Previews**: See your changes as you make them in VS Code, ensuring your content looks perfect before publishing.
- **Efficient Workflow**: Simplify the process of creating and organizing content with built-in support for taxonomies, media management, and metadata.

This documentation serves as a comprehensive guide on using Front Matter CMS in conjunction with VS Code to manage the content of your Jekyll site that uses our custom theme. Follow the steps below to set up and configure Front Matter CMS with your Jekyll site, and start managing your content more efficiently and effectively.

[Front Matter CMS]: https://frontmatter.codes/

## 2. Getting Started

This section will guide you through the initial setup of Front Matter CMS with your Jekyll project. Follow these steps for a smooth integration:

1. **Open Your Jekyll Project**
   - Use **VS Code** to open your Jekyll project that uses our theme.

2. **Download Required Files from GitHub**:
   - **Retrieve `frontmatter.json`**:
     - Download the [`frontmatter.json`](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/blob/master/frontmatter.json) file from our GitHub repository.
     - Save the `frontmatter.json` file in the root directory of your Jekyll project.

   - **Retrieve `external.js`**:
     - Download the [`external.js`](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/blob/master/.frontmatter/ui/external.js) file from our GitHub repository.
     - Place the `external.js` file in the `.frontmatter/ui/` directory within your project folder. Create this directory if it doesn't already exist.

3. **Initialize Git Submodule for Shared Configuration**:
    - The shared Front Matter CMS configuration, including content types and snippets, is managed as a Git submodule.
    - Initialize and update the submodule by running the following command in your terminal:

        ```shell
        git submodule update --init --recursive
        ```

    - This will pull the shared configuration from the [amp-affiliately-jekyll-theme-shared-frontmatter-config](https://github.com/chriskyfung/amp-affiliately-jekyll-theme-shared-frontmatter-config) repository into the `.frontmatter/config` directory.

4. **Install VS Code Front Matter Extension**
   - Open the **Extensions** view in VS Code by clicking on the square icon in the sidebar or pressing `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS).
   - Search for **`Front Matter`** in the Extensions Marketplace.
   - Click **Install** to add the Front Matter extension to VS Code.
   - Ensure the extension is enabled in your VS Code environment after installation.

5. **Configure Your Jekyll Project**
   - Open the `frontmatter.json` file in VS Code.
   - Update the following configurations to match your project's setup:
     - **site.baseURL**: Update to the base URL of your site.
     - **website.host**: Update to the host URL of your website.

     ```json
     "frontMatter.site.baseURL": "https://your-site.github.io/"
     "frontMatter.website.host": "https://your-site.github.io/project-name/"
     ```

   - Save the changes to the `frontmatter.json` file.

6. **Refresh Front Matter Settings**
   - Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (on macOS).
   - Type and select **`Front Matter: Refresh Front Matter Settings`**.

7. **Start Using Front Matter CMS**
   - Open the Front Matter panel in VS Code to start managing your content efficiently.

Congratulations! You've successfully set up Front Matter CMS with your Jekyll theme. For a detailed breakdown of these files and their configurations, refer to the following sections.

## 3. Breakdown of `frontmatter.json`

The `frontmatter.json` file has been simplified to provide a more streamlined and modular configuration for Front Matter CMS. It now primarily relies on the `extends` feature to inherit a base configuration.

- **Schema Declaration**
  - **`$schema`**: Ensures the configuration adheres to the defined structure.

    ```json
    "$schema": "https://frontmatter.codes/frontmatter.schema.json"
    ```

- **Modular Configuration with `extends`**
  - **`frontMatter.extends`**: This property is used to inherit configurations from one or more external files. In this theme, it points to the base configuration located in the shared submodule.

    ```json
    "frontMatter.extends": [
      ".frontmatter/config/content/base.config.json"
    ]
    ```

  - The `base.config.json` file contains all the core settings, including framework details (`jekyll`), content type definitions, and snippet configurations. This modular approach makes the main `frontmatter.json` cleaner and easier to manage.

- **Project-Specific Settings**
  - The main `frontmatter.json` file is now used for project-specific overrides and settings that are unique to your site.
  - **`frontMatter.content.publicFolder`**: Defines the directory for public assets.
  - **`frontMatter.preview.host`**, **`frontMatter.site.baseURL`**, **`frontMatter.website.host`**: These URLs should be customized to match your local development environment and live site.
  - **`frontMatter.extensibility.scripts`**: Specifies external scripts for additional functionalities, such as the custom card image renderer.

    ```json
    "frontMatter.extensibility.scripts": [
      "[[workspace]]/.frontmatter/ui/external.js"
    ]
    ```

By using the `extends` feature, the theme separates the core CMS configuration (which you get from the submodule) from your personal site configuration, making updates and maintenance much simpler.

## 4. Breakdown of `external.js`

The `external.js` file is designed to extend the functionality of the Front Matter CMS by registering custom behavior for rendering images in card footers. Here’s a breakdown of its components:

- **Imports**:
  - **`registerCardImage`**: A function from the Front Matter extensibility library used to register custom image rendering behavior.
  - **`enableDevelopmentMode`**: An optional function that can be enabled for development purposes (commented out by default).

  ```javascript
  import { registerCardImage, enableDevelopmentMode } from "https://cdn.jsdelivr.net/npm/@frontmatter/extensibility/+esm";
  // enableDevelopmentMode();
  ```

- **registerCardImage Function**: This function is used to register a custom image rendering behavior for the card footer in Front Matter CMS.
  - The function returns an HTML string that renders an image based on the provided metadata. It checks if the `fmPreviewImage` metadata is available; if not, it falls back to the path specified in the `metadata.image.path` or a default image.

  ```javascript
  registerCardImage(async (filePath, metadata) => {
      const image = metadata.fmPreviewImage ? metadata.fmPreviewImage : metadata.image.path ? metadata.fmWebviewUrl + metadata.image.path : `${metadata.fmWebviewUrl}/assets/images/write-2160925.svg`;
      return `<img src="${image}" alt="${metadata.title}" style="object-fit: cover; margin: auto auto" class="h-36" />`;
  });
  ```

This script enhances the visual presentation of cards in the Front Matter CMS by dynamically rendering images based on the metadata associated with each file.

## 5. Content Management

### Opening the Front Mater dashboard

{% include picture.html source="assets" img="frontmatter-dashboard_1105x841.png" width="1105" height="841" alt="Front Matter dashboard on the contents view" caption="Front Matter dashboard on the contents view" class="text-center" %}

To open the [Front Matter dashboard](https://frontmatter.codes/docs/dashboard), follow these steps:

1. **Open the Command Palette**: You can do this by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
2. **Search for Dashboard Commands**: Type `Front Matter: Open dashboard` and select it from the list.
3. **Access the Dashboard**: The dashboard will open in a new panel within VS Code. You can navigate through your content, media, and other views from here.

Alternatively, you can use keyboard shortcuts:

- **Windows/Linux**: Press `Alt+D`.
- **macOS**: Press `Options+D`.

Once the dashboard is open, you can easily access the editor panel to manage and edit your content.

### Opening the Front Matter Editor Panel

{% include picture.html source="assets" img="frontmatter-editor-panel_1468x664.png" width="1468" height="664" alt="Front Matter editor panel" caption="Front Matter editor panel" class="text-center" %}

1. **Open the Command Palette**:
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS) to open the Command Palette.

2. **Open the Front Matter Panel**:
   - Type `FM: Focus on Front Matter View` in the Command Palette and select it from the list.

3. **Access the Editor Panel**:
   - The Front Matter panel will open on the side of your VS Code window.
   - From this panel, you can explore various sections such as SEO status, metadata, extension actions, and recently modified files.
   - The editor panel allows you to create, edit, and manage your content with ease.
   - It offers a user-friendly interface to input and update metadata fields for your content.

By using the Front Matter editor panel, you can streamline content creation and management, making the process easier and more efficient in VS Code.

### Creating Content

Front Matter CMS simplifies the process of creating new content. To create a new post or page:

1. Click on the **"Create Content"** button from the Front Matter dashboard or editor panel.
2. Fill in the required fields based on your configured content types and fields.
3. Save the content to generate a new Markdown file in the appropriate directory.

{% include picture.html source="assets" img="frontmatter-featured-image_275x602.png" width="275" height="602" alt="Metadata on Front Matter editor panel" caption="Metadata on Front Matter editor panel" class="text-center" %}

### Editing Content

To edit existing content:

1. Open to the Front Matter dashboard.
2. Select the post or page you want to edit.
3. Make the necessary changes in the provided fields.
4. Save the content to update the Markdown file.

### Previewing Content

{% include picture.html source="assets" img="frontmatter-preview_1422x701.png" width="1422" height="701" alt="Preview content" %}

Front Matter CMS allows you to see a real-time preview of the content you are editing:

1. Open the post or page you want to edit.
2. In the editor panel, click the **"Start server"** button to start the Jekyll server on your local machine.
3. Click the **"Open preview"** button in the editor panel to open the preview pane next to the editor in VS Code.
4. Make your changes in the editor.
5. The preview pane will automatically update to reflect your changes, providing a live view of how your content will look on your site.

By following these steps, you can efficiently preview your content and make adjustments in real-time, ensuring your edits are accurately reflected on your site.

### Using Snippets

Front Matter CMS provides a convenient way to manage and create content with customizable snippets. Here’s a brief guide on how to use the various snippets available:

#### AMP Snippets

**AMP Gist Snippets**:

- **Usage:** Embed a gist or single file from a gist using the `amp-gist` component.

**AMP Audio Snippets**:

- **Usage:** Embed an audio element on an AMP page using the `amp-audio` component.

#### Image and Video Snippets

**Image Snippet**:

- **Usage:** Insert an image using the `picture.html` template with attributes for alt text and figure caption.

**YouTube Snippets**:

- **Usage:** Embed a YouTube video or playlist using the `youtube.html` template.

#### Content Management Snippets

**Table of Contents (TOC) Snippet**:

- **Usage:** Insert a TOC using the `toc.md` template.

**Excerpt Separator Snippet**:

- **Usage:** Insert `<!--more-->` to define a custom excerpt in markdown content.

#### Kramdown Snippets

**Inline Attribute Snippet**:

- **Usage:** Add HTML attributes to any element using kramdown inline attribute list syntax.
- **Snippet:** Specify the attributes within the snippet.

**Comment Snippet**:

- **Usage:** Insert kramdown comments to exclude text from output while keeping it in the source.

**NoMarkdown Snippet**:

- **Usage:** Escape kramdown processing for selected text.

**Footnote Snippet**:

- **Usage:** Create a footnote and link it to a reference number using kramdown footnote syntax.

**Abbreviation Snippet**:

- **Usage:** Create an abbreviation using kramdown abbreviation syntax.

**Math Block Snippet**:

- **Usage:** Convert text with LaTeX mathematics into a math block using kramdown syntax.

**End-of-Block Snippet**:

- **Usage:** Insert an EOB marker to end a kramdown block element.

**Parse Block HTML Snippet**:

- **Usage:** Enable kramdown processing in block HTML tags.

#### Jekyll Snippets

**Link Snippet**:

- **Usage:** Generate the correct permalink URL of a file using the Jekyll `link` tag.

**Post URL Snippet**:

- **Usage:** Generate the correct permalink URL of a post using the Jekyll `post_url` tag.

**Highlight Snippet**:

- **Usage:** Apply the Jekyll `highlight` tag to format selected content as a code block.

**Raw Snippet**:

- **Usage:** Escape Liquid filters using the Jekyll `raw` tag.

**Capture Snippet**:

- **Usage:** Create a variable from selected content using Jekyll `capture` tags.

**Cite Snippet**:

- **Usage:** Insert citations with Jekyll-Scholar cite tag.

**Bibliography Snippet**:

- **Usage:** Insert a bibliography using the Jekyll-Scholar plugin.

**Callout Snippet**:

- **Usage:** Insert a callout using the Jekyll capture tag.

By using these snippets, you can streamline your content creation process, making it more efficient and structured.

### Managing Taxonomies

{% include picture.html source="assets" img="frontmatter-taxonomies_1109x632.png" width="1109" height="632" alt="Front Matter dashboard on the taxonomies view" caption="Front Matter dashboard on the taxonomies view" class="text-center" %}

Front Matter CMS also provides powerful taxonomy management to help you organize your content effectively. Taxonomies include categories, tags, and other custom taxonomies that you can define to classify your content.

By leveraging the taxonomy management capabilities of Front Matter CMS, you can maintain a well-organized content structure, making it easier for both you and your site visitors to navigate and find content.

## 6. Troubleshooting

### Common Issues

Here are some common issues you might encounter while using Front Matter CMS with Jekyll and their solutions:

- **Configuration Errors**: Ensure that your `frontmatter.json` configuration file is correctly formatted and contains all required fields.
- **Preview Issues**: Verify that the `preview.host` and `site.baseURL` settings are correctly configured in your `frontmatter.json` file.
- **Content Rendering Problems**: Check for syntax errors in your Markdown files and ensure that all necessary plugins and dependencies are installed.

### Support Resources

If you encounter any issues or need further assistance, you can refer to the following resources:

- **Front Matter CMS Documentation**: [https://frontmatter.codes/docs/](https://frontmatter.codes/docs/)
- **Jekyll Documentation**: [https://jekyllrb.com/docs/](https://jekyllrb.com/docs/)
- **Community Support**: Reach out to the Jekyll and Front Matter CMS communities for help and advice.

## 7. Conclusion

Front Matter CMS provides a powerful and user-friendly solution for managing content in Jekyll projects. By leveraging its features, you can streamline your content creation and management processes, making it easier to maintain and update your Jekyll site. With this documentation, you should be well-equipped to set up, configure, and use Front Matter CMS effectively within your Jekyll projects. 👨‍💻 _Happy coding!_ 🚀
