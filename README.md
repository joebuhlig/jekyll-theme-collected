# The Collected theme


## Usage

To use the Collected theme:

1. Create a [new Jekyll site on your local machine](https://jekyllrb.com).
2. Remove `gem jekyll` from your Gemfile and add `gem "github-pages", group: :jekyll_plugins`.
3. Add the following to your site's `_config.yml`:

    ```yml
    remote_theme: jekyll-theme-collected
    ```
4. Push your local repository to GitHub.
5. Under Settings -> Options for the repository, set the GitHub Pages source to Master.
6. Visit your site!

## Customizing

### Configuration variables

Collected will respect the following variables, if set in your site's `_config.yml`:

```yml
title: [The title of your site]
description: [A short description of your site's purpose]
owner_name: [Your Name]
owner_homepage: [Link to your homepage on the web]
```

Additionally, you may choose to set the following optional variables:

```yml
google_analytics: [Your Google Analytics tracking ID]
plugins:
  - jekyll-feed
show_post_dates: [true or false to indicate whether to show dates on posts]
twitter_username: [your Twitter handle]
github_username:  [your GitHub username]
instagram_username: [your Instagram username]
```

### Stylesheet

If you'd like to add your own custom styles:

1. Create a file called `/assets/stylesheets/style.scss` in your site
2. Add the following content to the top of the file, exactly as shown:
    ```scss
    ---
    ---

    @import "jekyll-theme-collected";
    ```
3. Add any custom CSS (or Sass, including imports) you'd like immediately after the `@import` line

*Note: If you'd like to change the theme's Sass variables, you must set new values before the `@import` line in your stylesheet.*

### Layouts

If you'd like to change the theme's HTML layout:

1. [Copy the original template](https://github.com/joebuhlig/jekyll-theme-collected/blob/master/_layouts/default.html) from the theme's repository<br />(*Pro-tip: click "raw" to make copying easier*)
2. Create a file called `/_layouts/default.html` in your site
3. Paste the default layout content copied in the first step
4. Customize the layout as you'd like
