---
layout: post
title:  "Better imports with webpack resolve.alias"
date:   2020-01-10 10:00:00 +0800
readTime: 2
categories: jekyll update
---

I want to write a short article where once more I emphasize one of the superpowers of <a href="https://webpack.js.org/" target="_blank" title="bundle your scripts">webpack</a>.

Have you ever came across this in some of your project's codebase(s)?

<div style="text-align:center;">
    <img alt="Sample deep relative import in JavaScript" src="/assets/img/better-imports-webpack-alias/bad-import.png"/>
</div>

Wouldn't it be pleasing to refer to a top-level module/namespace in any place you need to import something?

<div style="text-align:center;">
    <img alt="Sample good import with webpack resolve alias configured" src="/assets/img/better-imports-webpack-alias/good-import.png"/>
</div>

With webpack, having something like that, it's very straightforward. Aliasing module names for shorter and clear import statements have considerable gains in terms of codebase discoverability, codebase navigation, and of course, general readability. Aliasing modules is especially helpful for large codebases organized in modules.

Aliasing modules is as simple as using <a href="https://webpack.js.org/configuration/resolve/" target="_blank" title="webpack options that change how modules are resolved">webpack *Resolve* configurations</a>, more precisely <a href="https://webpack.js.org/configuration/resolve/#resolvealias" target="_blank" title="webpack aliases to import or require certain modules more easily">resolve.alias</a>. To follow up on the previous example, here is how your `webpack.config.js` file should look like if you want to be able to import your *utils* module as displayed above.

<div style="text-align:center;">
    <img alt="Sample webpack.config.js file with aliases configured" src="/assets/img/better-imports-webpack-alias/webpack-config.png"/>
</div>

Now you can go ahead and remove all those 100 characters long relative imports at the beginning of your JavaScript files.