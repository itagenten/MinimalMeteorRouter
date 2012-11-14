
Template.content.events({
    'click a' : function (event) {
        // Links with a "link-external" class aren't handled
        if (!event.currentTarget.classList.contains("link-external")) {

            // Without this, the browser will use the <a> as-is
            event.preventDefault();

            // "trigger: true" tells the backbone router to actually
            // execute it's routing logic instead of only updating the URL bar
            // Weird defaults, ey?
            Router.navigate(event.currentTarget.pathname, {trigger: true});
        }
    }
});

