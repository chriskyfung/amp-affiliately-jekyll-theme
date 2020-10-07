# AMP Affiliately Jekyll Theme

![Deploy GitHub Pages](https://github.com/chriskyfung/amp-affiliately-jekyll-theme/workflows/Deploy%20GitHub%20Pages/badge.svg)

Affiliately is an AMP-ready Jekyll theme for your blogs and websites.

<a href="https://www.buymeacoffee.com/chrisfungky"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" target="_blank"></a>

## Live Demo
## [AMP Affiliately Jekyll Theme](https://chriskyfung.github.io/amp-affiliately-jekyll-theme/)
![AMP Affiliately Jekyll Theme](/Screenshots/amp-affiliately-theme.png "AMP Affiliately Jekyll Theme Preview")


## Features
- AMP-ready
- Responsive
- Syntax Highlighting for code
- Cover Images for homepage and blog posts
- Social Sharing via AddThis (AMP)
- Simple Navigation Menu
- Page/Post Sidebar
- Pagination
- Multiple Authors
- Featured Box/List
- Category and Tag Archives
- Include `amp-img` with `<figure>` and `<figcaption>` wrapper
- Support WebP image format
- Lightbox (AMP)
- Include YouTube (AMP) with GA video tracking
- Disqus Comments in AMP
- Site Search via Google Custom Search Engine
- Auto-suggestion search bar
- Tracking with Google Analytics and Google Tag Manager (AMP)
- Monetize via Google Adsense and Buy Me A Coffee
- Can be easily installed using `remote_theme`
- Easily Customisable
- Support deploy to Github Pages via Github Action


## What is AMP

AMP stands for [Accelerated Mobile Pages](https://www.ampproject.org/), a Google-backed project designed as an open standard for any publisher to have pages load quickly on mobile devices.

## Installation

There are different ways to install the theme -

### 1. Cloning the repository and updating settings
1. Fork this repository and clone the forked repository.
2. Update the _config.yml file as per your requirements.
3. Add your posts to the _posts directory.
4. Deploy to Github Pages or your own server.

## Configures

### Enabling 3rd-party components

#### Google Analytics
1. Set up your Analytics Tracking ID in _config.yml.

#### Google Tag Manager
1. Set up your GTM AMP container ID in _config.yml.

#### Google Adsense
1. Set up your Adsense ID in _config.yml.

#### Google Custom Search Engine
1. Set up your gcse ID in _config.yml.

#### Disqus Comments
1. Deploy disqus-amp.html to another domain or subdoamin.
2. Copy the external URL link as the value of `amp_disqus_url` in _config.yml.


## Writing Posts
You can write posts just as you would in Jekyll, the only difference being that AMP has some strict guidelines on including external content.

You cannot use Markdown format or normal HTML tags. AMP provides its own custom tags for images, videos etc...

### Examples -

#### Images

Use the `picture.html` template to insert an image in the AMP format with automatically serving the image in the WebP format.
The template also wraps the image with a `<figure>` tag with an optional caption element.

`{% include picture.html img="welcome.jpg" height="400" width="800" ="Welcome" ="text-center" %}`

Options:
- **alt**
- **caption** (_support HTML codes_)
- **class** (_e.g._ `text-center`)
- **layout** (_amp-img supported layouts_: `fill`, `fixed`, `fixed-height`, `flex-item`, `intrinsic`, `nodisplay` or `responsive`. _default_: `intrinsic`)
- **lightbox** (_default_: `true`)
- **link** (_assign a URL for the HTML a tag that wraps the amp-img tag when the key is present_)
- **source** (`assets`, `projects` or `raw`)
  - _default_ - get image from the `/images/posts/` directory 
  - `assets` - get image from the `/assets/images/` directory
  - `projects` - get image from the `/images/projects/` directory
  - `raw` - get image from the specified URL

#### YouTube Videos

You must include the following front matter variable to enable YouTube embeds.

```yaml
amp:
   youtube: true
```

To embed a single video, use the following tag to include the `youtube.html` template.

`{% include youtube.html id="<YOUTUBE_VIDEO_UID>" title="Welcome to Watch this Video" %}`

- **id** _required_
- **title** _optional_

To embed a playlist, you must set it with both the playlist ID and the ID of the first video within the playlist.

`{% include youtube.html id="<YOUTUBE_VIDEO_UID>" playlist="<YOUTUBE_PLAYLIST_UID>" title="Welcome to Watch this Video" %}`

#### Codes

To enable syntax highlighter, you must add the following to the post front matter.

```yaml
css:
  syntax: true
```

### Front Matters

#### Set Featured Image for Page/Post

You can assign an image (with 730×431 pixels in size) as the featured image of a post in the front matter like this:

```yaml
image:
   path: /assets/images/filename.png
```

If the image is not at 16:9 aspect ratio, you need to define it width and height under the `image` variable, _e.g._:

```yaml
image:
   path: /assets/images/filename.png
   width: 640
   height: 480
```

If you do not want to display the featured image on the post page, append a `hide` option to the `image` variable, _e.g._:

```yaml
image:
   path: /assets/images/filename.png
   hide: true
```

If you want to remove the shadow of the featured image on the post page, append the following class to the `image` variable, _e.g._

```yaml
image:
   path: /assets/images/filename.png
   class: shadow-none
```

By default, the thumbnail of featured images is cropped at the center inside the cards of the Featured Boxes/Lists. A new variable for the thumbnail positioning was added to the theme on 2020-10-07. You can now change the image position to the _left_ or _right_ by appending a `fit` option to the `image` variable, _e.g._:


```yaml
image:
   path: /assets/images/filename.png
   fit: left
```

#### Set Last Modified Date

```yaml
last_modified_at: 2020-06-20 23:36 +0800`
```

#### Pin to Featured Boxes/Lists

```yaml
featured: true
```

#### Add Custom Codes to HTML Head to Page/Post

In the front matter, you can add your codes to the HTML header using the variable `custom_header`. For example, include the script for the `amp-accordion` component:

```yaml
custom_head: >-
  <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>
```

#### Add Custom CSS Styles to Header to Page/Post

In the front matter, you can add your custom CSS styles to the end of the `<style amp-custom>` tag inside the HTML header.

```yaml
css:
   custom: >
      .ml-2 { margin-left: 2rem }
      table { width: 100%; max-width: 400px; margin-bottom: 1.5rem; }
```

#### Display Download Buttons in Post's sidebar

When you use this theme for the Github Pages of a Github project repository, it is available to show a download button or links to the repository in the sidebar of a Post.

To display the button to the project repository, declare the repository name in your `_config.yml`.

```yaml
repository: <USERNAME>/<PROJECT>
```

Also, appending the `download` variable to the post front matter.

```yaml
download: true
```

If a release exists in the repository, an additional button that links to the latest release will be shown.

**Note**: Authentication is required to get your repository data in order to show the release button. Please follow the docs of [jekyll
/github-metadata](https://github.com/jekyll/github-metadata/blob/master/docs/authentication.md) to set up your personal access token.

You can also override the latest release button by defining a URL under the `download` variable, _e.g._:

```yaml
downlod:
  url: //.../filename.zip
```


### Using AMP Components
Some AMP components require you to specify external scripts before using them.
You can specify these scripts in the head.html file in the includes directory after the already imported scripts and then use these components in any post.

[See Full AMP Documentation.](https://www.ampproject.org/docs/)

## Validating your page with AMP
AMP provides built-in validator to validate your pages so that they can rendered quickly.

You can access this validator by opening the Developer Console in your browser and adding #development=1 to any url of your site.

Example -
http://localhost:4000/#development=1

If you have errors on your page, AMP will list those for you in the console. If you do not have any errors, you'll get a message "AMP Validation Successful" on your console.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/chriskyfung/amp-affiliately-jekyll-theme/. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

To submit a pull request -

1. Fork/clone the repository.
2. Develop.
3. Create a new branch from the master branch.
4. Open a pull request on Github describing what was fixed or added.

## Thanks
Affiliately is based on [Affiliates](https://github.com/wowthemesnet/affiliates-jekyll-theme) jekyll theme. Thank You.

## License

The theme is available as open-source under the terms of the [MIT License](https://opensource.org/licenses/MIT).