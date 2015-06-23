define(
    ['jquery', 'backbone', 'handlebars', 'text!templates/MenuView.handlebars'],
    function($, Backbone, Handlebars, template) {
        var menuView = Backbone.View.extend({
            template: Handlebars.compile(template),
            render: function() {
                this.$el.html(this.template(this.re));
                return this;
            }
        });
        return menuView;
    }
);