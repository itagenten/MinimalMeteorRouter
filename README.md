MinimalMeteorRouter
===================

This is my idea of a minimal client-side router for Meteor.com (using Backbone.js and Handlebars).

To still be able to use sensible defaults from the browser I like to use the `<a>` tag for links (defaults like navigation using the `<tab>` key, having the correct mouse pointer w/o CSS etc...).
A click handler for all `<a>` elements on the page checks whether the `href` of the clicked element points to a local or external resource.
In the local case, it fires `preventDefault()` and uses the Backbone.js router to load a new page into our already-loaded single page web application.
In the external case, for demo'ing, a `target` attribute is added and the link is handled as usual (without `preventDefault()`).

To verify that this is using Backbone.js client side routing code you could kill your Meteor.com instance after loading the page. The internal links will still work.

Have a lot of fun!

Florian


