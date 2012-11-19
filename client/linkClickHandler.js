// Once on client startup: Save base URL to global variable
// for later comparison. Probably there's a smarter way to do this?
Meteor.startup(function () {
    Meteor.url = {};
    Meteor.url.base = (function() {
        var split = window.location.toString().split("/");
        var conc = split[0] + "//" + split[2] + "/";
        return conc;
    })();
});


// The function handling click events on <a> elements:
// Use backbone.js routing for all links EXCEPT those
// that href to extern ressources and those with a
// "link-external" CSS class (open those in a new window)

// jQuery: delegate click events on <a> tags (former ".live()")
// TODO: Remove jQuery dependency w/o making the example more complex.
$(document).on("click", "a", function(event) {
    var isExtern = !!this.href.indexOf(Meteor.url.base);

    // Links to other sites OR with a "link-external" class aren't handled
    if (isExtern || this.classList.contains("link-external")) {
        this.target = "_blank";
    } else {
        // Without this, the browser will follow the <a> as-is
        event.preventDefault();

        // "trigger: true" tells the backbone router to actually
        // execute it's routing logic instead of only updating the URL bar
        // Weird defaults, ey?
        Router.navigate(this.pathname, {trigger: true});
    }
});

