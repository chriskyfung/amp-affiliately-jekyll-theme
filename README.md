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

## Writing Posts
You can write posts just as you would in Jekyll, the only difference being that AMP has some strict guidelines on including external content.

You cannot use Markdown format or normal HTML tags. AMP provides its own custom tags for images, videos etc...

### Examples -

**Images**
`{% include picture.html img="welcome.jpg" alt="Welcome" height="400" width="800" caption="Welcome" class="text-center" %}`

**Videos**
`{% include youtube.html id="mGENRKrdoGY" }`

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

## Enabling Google Analytics
1. Set up your Analytics Tracking ID in _config.yml.

## Enabling Google Tag Manager
1. Set up your GTM AMP container ID in _config.yml.

## Enabling Google Adsense
1. Set up your Adsense ID in _config.yml.

## Enabling Google Custom Search Engine
1. Set up your gcse ID in _config.yml.

## Enabling Disqus Comments
1. Deploy disqus-amp.html to another domain or subdoamin.
2. Copy the external URL link as the value of `amp_disqus_url` in _config.yml.

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

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
