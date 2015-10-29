define(
    ['jquery', 'underscore', 'backbone', 'handlebars', 'text!templates/ProjectsView.handlebars'],
    function ($, _, Backbone, Handlebars, template) {
        var ProjectsView = Backbone.View.extend({
            template: Handlebars.compile(template),
            events: {

            },
            //initialize: function() {
            //
            //},
            render: function() {
                var that = this;
                this.collection.fetch({
                    reset: true,
                    success: function (reponse) {
                        var p = [];
                        for (var i in reponse.models) {
                            var model = reponse.models[i];
                            p.push({id: model.get('id'), name: model.get('name')});
                        }
                        that.$el.html(that.template({Projects: p}));
                    }
                });

                console.info(this.collection.models);

                return this;
            }
        });
        return ProjectsView;
    }
);