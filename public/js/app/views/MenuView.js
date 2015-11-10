define(
    ['jquery', 'backbone', 'handlebars', 'bootstrap', 'text!templates/MenuView.handlebars'],
    function($, Backbone, Handlebars, BootStrap, template) {
        var menuView = Backbone.View.extend({
            template: Handlebars.compile(template),
            render: function() {
                var p = [];
                for (var i in this.projects.models) {
                    var model = this.projects.models[i];
                    p.push({id: model.get('id'), name: model.get('name')});
                }
                this.$el.html(this.template({projects: p}));
                return this;
            }
        });
        return menuView;
    }
);