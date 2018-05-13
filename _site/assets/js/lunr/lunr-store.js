var store = [{
        "title": "Quick-Start Guide",
        "excerpt":"Minimal Mistakes has been developed as a Jekyll theme gem for easier use. It is also 100% compatible with GitHub Pages — just with slightly different installation process. Installing the Theme If you’re running Jekyll v3.5+ and self-hosting you can quickly install the theme as a Ruby gem. ProTip: Be...","categories": [],
        "tags": [],
        "url": "/",
        "teaser":null},{
        "title": "Structure",
        "excerpt":"Nothing clever here :wink:. Layouts, data files, and includes are all placed in their default locations. Stylesheets and scripts in assets, and a few development related files in the project’s root directory. Please note: If you installed Minimal Mistakes via the Ruby Gem method, theme files like _layouts, _includes, _sass,...","categories": [],
        "tags": [],
        "url": "/structure/",
        "teaser":null},{
        "title": "Installation",
        "excerpt":"Install the Theme 1. For a new site, install the minimal-mistakes-jekyll theme gem or fork the Minimal Mistakes repo on GitHub following the steps outlined in the Quick-Start Guide. If you plan to host with GitHub Pages be sure to properly setup jekyll-remote-theme as it is required for the theme...","categories": [],
        "tags": [],
        "url": "/installation/",
        "teaser":null},{
        "title": "Upgrading",
        "excerpt":"If you’re using the Ruby Gem or remote theme versions of Minimal Mistakes, upgrading is fairly painless. To check which version you are currently using, view the source of your built site and you should see something similar to: &lt;!-- Minimal Mistakes Jekyll Theme 4.9.0 by Michael Rose Copyright 2013-2018...","categories": [],
        "tags": [],
        "url": "/upgrading/",
        "teaser":null},{
        "title": "Configuration",
        "excerpt":"Settings that affect your entire site can be changed in Jekyll’s configuration file: _config.yml, found in the root of your project. If you don’t have this file you’ll need to copy or create one using the theme’s default _config.yml as a base. Note: for technical reasons, _config.yml is NOT reloaded...","categories": [],
        "tags": [],
        "url": "/configuration/",
        "teaser":null},{
        "title": "Overriding Theme Defaults",
        "excerpt":"When installing the theme as a Ruby Gem its layouts, includes, stylesheets, and other assets are all bundled in the gem. Meaning they’re not easily visible in your project. Each of these files can be modified, but you’ll need to copy the default version into your project first. For example,...","categories": [],
        "tags": [],
        "url": "/overriding-theme-defaults/",
        "teaser":null},{
        "title": "Navigation",
        "excerpt":"Masthead The masthead links use a “priority plus” design pattern. Meaning, show as many navigation items that will fit horizontally with a toggle to reveal the rest. To define these links add titles and URLs under the main key in _data/navigation.yml: main: - title: \"Quick-Start Guide\" url: /docs/quick-start-guide/ - title:...","categories": [],
        "tags": [],
        "url": "/navigation/",
        "teaser":null},{
        "title": "UI Text",
        "excerpt":"Text for UI elements, _layouts, and _includes grouped together as a set of translation keys. This is by no means a full-on i18n solution, but it does help make customizing theme text a bit easier. The English1 main keys in _data/ui-text.yml are translated in the following languages: Brazilian Portuguese (Português...","categories": [],
        "tags": [],
        "url": "/ui-text/",
        "teaser":null},{
        "title": "Authors",
        "excerpt":"Sites that may have content authored from various individuals can be accommodated by using data files. To assign an author to a post or page that is different from the site author specified in _config.yml: Step 1. Create _data/authors.yml and add authors using the following format. Any variables found under...","categories": [],
        "tags": [],
        "url": "/authors/",
        "teaser":null},{
        "title": "Layouts",
        "excerpt":"The bread and butter of any theme. Below you’ll find the layouts included with Minimal Mistakes, what they look like and the type of content they’ve been built for. Default Layout The base layout all other layouts inherit from. There’s not much to this layout apart from pulling in several...","categories": [],
        "tags": [],
        "url": "/layouts/",
        "teaser":null},{
        "title": "Working with Posts",
        "excerpt":"Posts are stored in the _posts directory and named according to the YEAR-MONTH-DAY-title.MARKUP format as per the usual. Where YEAR is a four-digit number, MONTH and DAY are both two-digit numbers, and MARKUP is the file extension representing the format used in the file. For example, the following are examples...","categories": [],
        "tags": [],
        "url": "/posts/",
        "teaser":null},{
        "title": "Working with Pages",
        "excerpt":"To better organize all of your pages you can centralize them into a single location similar to posts and collections. Step 1: Start by placing pages (.md or .html files) into a _pages directory. Meaningfully naming files should be the goal. Avoid patterns like /about/index.md as it makes distinguishing between...","categories": [],
        "tags": [],
        "url": "/pages/",
        "teaser":null},{
        "title": "Working with Collections",
        "excerpt":"Collections like posts and pages work as you’d expect. If you’re new to them be sure to read Jekyll’s documentation. The theme has been built with collections in mind and you will find several examples on the demo site (portfolio, recipes, pets). Collections in the Wild: This set of documentation...","categories": [],
        "tags": [],
        "url": "/collections/",
        "teaser":null},{
        "title": "Utility Classes",
        "excerpt":"Using the Kramdown Markdown renderer with Jekyll allows you to add block and inline attributes. This is nice if you want to add custom styling to text and image, and still write in Markdown. Jekyll 3: Kramdown is the default for jekyll new sites and those hosted on GitHub Pages....","categories": [],
        "tags": [],
        "url": "/utility-classes/",
        "teaser":null},{
        "title": "Stylesheets",
        "excerpt":"The theme’s assets/css/main.css file is built from several SCSS partials located in _sass/ and is structured as follows: minimal-mistakes├── _sass| └── minimal-mistakes| ├── vendor # vendor SCSS partials| | ├── breakpoint # media query mixins| | ├── magnific-popup # Magnific Popup lightbox| | └── susy # Susy grid system| ├──...","categories": [],
        "tags": [],
        "url": "/stylesheets/",
        "teaser":null},{
        "title": "JavaScript",
        "excerpt":"The theme’s assets/js/main.min.js script is built from several vendor, jQuery plugins, and other scripts found in assets/js/. minimal mistakes├── assets| ├── js| | ├── plugins| | | ├── jquery.fitvids.js # fluid width video embeds| | | ├── jquery.greedy-navigation.js # priority plus navigation| | | ├── jquery.magnific-popup.js # responsive lightbox| |...","categories": [],
        "tags": [],
        "url": "/javascript/",
        "teaser":null},{
        "title": "History",
        "excerpt":"Unreleased Enhancements Add GitLab social icon brand color. #1653Bug Fixes Update example Reddit social share interpolation syntax in documentation. #1656 Fix “Back to Top” links on pages that use header overlays.4.11.2 Enhancements Update Font Awesome to version 5.0.11. #1605 Add Slovak localized UI text strings. #1613 Add option to anonymize...","categories": [],
        "tags": [],
        "url": "/history/",
        "teaser":null},{
        "title": "Contributing",
        "excerpt":"Having trouble working with the theme? Found a typo in the documentation? Interested in adding a feature or fixing a bug? Then by all means submit an issue or pull request. If this is your first pull request, it may be helpful to read up on the GitHub Flow first....","categories": [],
        "tags": [],
        "url": "/contributing/",
        "teaser":null},{
        "title": "2.2 Documentation",
        "excerpt":"Installation Minimal Mistakes now requires Jekyll 3.0. Make sure to run bundle update if you aren’t on the latest version to update all gem dependencies. If you are creating a new Jekyll site using Minimal Mistakes follow these steps: Fork the Minimal Mistakes repo. Clone the repo you just forked...","categories": [],
        "tags": [],
        "url": "/docs-2-2/",
        "teaser":null},{
        "title": "License",
        "excerpt":"The MIT License (MIT) Copyright (c) 2013-2018 Michael Rose and contributors Permission is hereby granted, free of charge, to any person obtaining a copyof this software and associated documentation files (the “Software”), to dealin the Software without restriction, including without limitation the rightsto use, copy, modify, merge, publish, distribute, sublicense,...","categories": [],
        "tags": [],
        "url": "/license/",
        "teaser":null},]
