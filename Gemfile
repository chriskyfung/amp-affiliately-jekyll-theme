source "https://rubygems.org"

ruby RUBY_VERSION

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!

# Manage Jekyll version
gem "jekyll", "~> 4.3.4"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
# If you have any plugins, put them here!

# Jekyll plugins
group :jekyll_plugins do
  gem 'jekyll-archives'
  gem 'jekyll-feed'
  gem 'jekyll-paginate'
  gem 'jekyll-redirect-from'
  gem 'jekyll-seo-tag'
  gem 'jekyll-sitemap'
  gem "jekyll-github-metadata"
end

# Platform-specific gems
# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
if RUBY_PLATFORM.downcase.include?('mswin') || RUBY_PLATFORM.downcase.include?('mingw') 
  gem "tzinfo"
  gem "tzinfo-data" 
end 

# Performance booster for watching directories on Windows
gem "wdm", ">= 0.1.0", platforms: [:mingw, :x64_mingw, :mswin]

# Required for running Jekyll on Windows
gem "webrick"
