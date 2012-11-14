MinimalMeteorRouter
=============================

This is my idea of a minimal client-side router for Meteor.com (using Backbone.js and Handlebars).

To still be able to use sensible defaults from the browser I like to use the `<a>` tag for links (like navigation using the `<tab>` key, having the correct mouse pointer w/o CSS etc...).
My current quick-and-dirty solution to have "real" links to external pages still work is to add a class that inhibits the preventDefault in the event handling code.
It would be even nicer to parse the beginning of the URL (for a protocol specifier), then no duplicate data would be needed at all. `<a href="/about">` would load the about template, `<a href="http://www.about.com/">` would take the use to another site. I welcome pull requests :)

Client-side routing consists of two parts:

1. Navigating to the correct page when entering a URL in the URL bar (or visiting a bookmark the user had saved earlier). The Backbone router has some sensible defaults here.

2. Loading the correct template w/o reloading the whole page (especially, that is, without loading the huge javascript blob that Meteor delivers on the first hit). Without this, the whole "single page" aspect is kinda lost, isn't it. We do this by invoking the Backbone router in our event handling code (see the `Router.navigate()` call in `view.js`).

Have a lot of fun!

Florian


