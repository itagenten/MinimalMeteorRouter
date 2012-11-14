/**
 * Name: Mini client-side reactive router for Meteor.js
 *
 * Description:
 * Use the Backbone.js package + Handlebars.js Templating for routing.
 * This is heavily inspired by Tom Coleman's (tmeasday) Reactive Router
 * (@see https://github.com/tmeasday/meteor-router/blob/master/router_helpers.js)
 * but stripped of the "Reactive Vars" and "Meteorite" dependencies.
 *
 * Author: <fs@it-agenten.com>
 * Date: 2012-08-09, 2012-11-14
 */

// TODO: Maybe we have to invalidate contexts or such things?
// http://stackoverflow.com/questions/10260015/how-does-meteors-reactivity-work-behind-the-scenes
// I don't know (yet)

// Register Handlebars template helper
if (Handlebars) {
    Handlebars.registerHelper('render', function(name) {
        if (Template[name]) {
            return new Handlebars.SafeString(Template[name]());
        } else {
            return "Template not found: " + name;   // 'name' will be escaped by HB.
        }
    });

    Handlebars.registerHelper('currentPage', function() {
        return Session.get('current_page'); // confusing naming FTW
    });
}


var ReactiveRouter = Backbone.Router.extend({
    routes: {'' : 'home',
             '*actions' : 'defaultRoute'
    },

    home: function() {
        this.navigate('/hello', {trigger: true});
    },

    defaultRoute: function(actions) {
        Session.set('current_page', actions);
    }
});

// Initiate the router
var Router = new ReactiveRouter();

Meteor.startup(function () {
    // Start Backbone history (necessary for bookmarkable URLs)
    Backbone.history.start({pushState: true});
});


