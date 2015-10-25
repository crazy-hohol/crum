define(
    ['jquery', 'underscore', 'backbone', 'handlebars', 'text!templates/ProjectsView.handlebars'],
    function ($, _, Backbone, Handlebars, template) {
        var ProjectsView = Backbone.View.extend({
            template: Handlebars.compile(template),
            events: {

            },
            initialize: function() {
                this.collection.fetch({reset: true});
                //Handlebars.registerHelper('each', function(context, options) {
                //    var ret = "";
                //    for (var i in context) {
                //        context[i].id = i
                //        ret = ret + options.fn(context[i]);
                //    }
                //
                //    return ret;
                //});
            },
            render: function() {
                console.info(this.collection.model);
                this.$el.html(this.template({Projects: this.collection.models}));
                return this;
            }
        });
        return ProjectsView;
    }
);