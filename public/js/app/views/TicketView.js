
define(['backbone', 'handlebars', 'jquery', 'text!templates/TicketView.handlebars'], function(Backbone, Handlebars, $, template) {
    var TicketView = Backbone.View.extend({

        template: Handlebars.compile(template),
        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });
    return TicketView;
});
