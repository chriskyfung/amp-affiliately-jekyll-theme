---
layout: post
title: "SCSS Development Guide: Mastering Styles in the Theme"
date: 2025-10-17 22:10 +0800
author: chris
categories:
  - doc
tags:
  - scss
  - styles
  - development
  - guide
permalink: /scss-development-guide/
image:
  path: /assets/images/scss-settings-3311592.svg
  width: "1920"
  height: "1080"
excerpt: A comprehensive guide to understanding and working with the modernized SCSS architecture, development workflow, and styling conventions in the AMP Affiliately Jekyll Theme.
css:
  syntax: true
---

Welcome to the developer's guide for SCSS (Sassy CSS) in the AMP Affiliately Jekyll Theme. This document provides a deep dive into our modernized styling architecture, helping you understand, customize, and extend the theme's appearance efficiently and correctly.

Following a recent major refactor, the theme has transitioned from the traditional `@import` rule to the modern Sass module system (`@use`). This change brings significant benefits, including better performance, clearer dependencies, and a more maintainable and scalable codebase.

{% include toc.md %}

## Understanding the SCSS Architecture

All theme styles are located in the `_sass/` directory. The structure is designed to be modular and easy to navigate.

Here are the key files and their roles:

- **`_sass/_theme-vars.scss`**: This dedicated partial contains all global theme variable definitions (e.g., colors, typography settings, spacing). It is designed to be `@use`d by other SCSS files to ensure consistent styling and prevent CSS duplication.

- **`_sass/amp-theme.scss`**: This file defines the core visual styles and foundational CSS rules for the theme. It `@use`s `_theme-vars.scss` for all variable definitions and contains global CSS rules for elements like `body`, headings, links, and common layout components. It serves as the base stylesheet that other SCSS files can build upon.

- **`_sass/amp-custom.scss`**: This file provides custom styles and overrides that build upon the base theme. It `@use`s `_theme-vars.scss` for variables and then adds its own specific rules for components like the image lightbox, blockquotes, and other custom elements, allowing for easy customization without altering the core theme file.

- **Component Partials (`_sass/amp-*.scss`)**: The `_sass/` directory contains numerous partial files, each responsible for styling a specific component or feature. Examples include:
  - `_sass/amp-ad.scss`
  - `_sass/amp-bs4-alert.scss`
  - `_sass/amp-footer.scss`
  - `_sass/amp-navigation.scss`
  - `_sass/amp-sidebar.scss`

This modular approach ensures that styles are organized, encapsulated, and easy to find.

## The Modern Sass Module System: `@use`

This project has fully embraced the Sass module system, using the `@use` rule to load stylesheets. Unlike the older `@import` rule which included a file's contents globally, `@use` loads a file as a "module," making its variables, mixins, and functions available only within the scope of the current file.

**Key Concepts:**

- **Explicit Dependencies:** `@use` makes it clear where every variable or mixin comes from.
- **Namespace Safety:** It prevents conflicts from globally defined variables or styles.
- **No `@forward`:** To maintain a simple and clear architecture, this project currently does not use the `@forward` rule. All necessary modules are imported directly where they are needed, primarily within `amp-custom.scss`.

**Example from the Project:**

The `_sass/amp-custom.scss` file begins with:

```scss
@use "theme-vars" as *;
```

This loads `_theme-vars.scss`, making all global variables available. `amp-custom.scss` then uses these variables to define custom styles and overrides.

## Development Workflow

The development and build workflow for SCSS is managed through `npm` scripts defined in `package.json`. These scripts provide a consistent and easy way to compile, watch, and minify your stylesheets.

Here are the essential commands:

- `npm run compile:scss`: Compiles all SCSS files from the `_sass` directory into the final CSS file used by Jekyll.
- `npm run minify:css`: Takes the compiled CSS and minifies it for production use, reducing file size.
- `npm run watch:scss`: A crucial development command that automatically watches for any changes in your `.scss` files and recompiles them on the fly.
- `npm run watch:all`: **This is the recommended command for active development.** It runs `watch:scss` and other watch tasks concurrently, providing a seamless live-reloading experience for all aspects of the theme.

## How to Add or Modify Styles

Whether you're tweaking an existing style or adding a completely new one, follow these conventions to maintain consistency.

### Modifying Existing Styles

1. Identify the component you wish to change (e.g., the footer).
2. Locate its corresponding SCSS partial in the `_sass/` directory (e.g., `_sass/amp-footer.scss`).
3. Make your modifications directly in that file. The `watch:all` script will automatically recompile the necessary files.

### Adding New Styles

For adding your own custom styles, the recommended approach is to add them directly to `_sass/amp-custom.scss`. This file is already set up to be compiled and included in your site.

1. **Open `_sass/amp-custom.scss`:** This is where you'll place your new CSS rules.
2. **Write Your SCSS:** Add your styles to the end of the file. You can use any of the global variables and mixins made available from `_theme-vars.scss`.

    ```scss
    // _sass/amp-custom.scss
    ...

    // My New Component
    .my-new-component {
      background-color: $primary-accent;
      border: 1px solid $border-color;
      padding: 1rem;

      p {
        color: $text-dark;
      }
    }
    ```

3. **Compile and Verify:** If you are running `npm run watch:all`, the changes will be compiled automatically. Your new styles will now be active on your site. This method avoids the need to create new files or modify the theme's layout to include new stylesheets.

## Conclusion

The theme's SCSS architecture is built to be robust, modern, and developer-friendly. By using the Sass module system and adhering to the established file structure, you can confidently customize styles while ensuring the project remains clean and maintainable.

Happy styling!
