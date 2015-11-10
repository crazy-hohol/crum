define(
    ['jquery', 'underscore', 'backbone', 'handlebars', 'text!templates/ProjectsView.handlebars'],
    function ($, _, Backbone, Handlebars, template) {
        var ProjectsView = Backbone.View.extend({
            template: Handlebars.compile(template),
            events: {

            },
            initialize: function() {
                var that = this;
                this.collection.on('change', function(project) {
                    var p = [];
                    p.push({id: project.get('id'), name: project.get('name')});
                    that.$el.html(that.template({Projects: p}));
                });
                this.collection.on('add', function(project) {
                    var p = [];
                    p.push({id: project.get('id'), name: project.get('name')});
                    that.$el.html(that.template({Projects: p}));
                });
                this.collection.fetch();
            },
            render: function() {
                var p = [];
                for (var i in this.collection.models) {
                    var model = this.collection.models[i];
                    p.push({id: model.get('id'), name: model.get('name')});
                }
                this.$el.html(this.template({Projects: p}));
                console.info(this.collection.models);

                return this;
            }
        });
        return ProjectsView;
    }
);