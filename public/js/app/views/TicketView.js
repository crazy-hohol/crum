//var app = app || {};
define(['backbone', 'handlebars', 'jquery', 'text!templates/TicketView.handlebars'], function(BackBone, Handlebars, $, template) {
    var TicketView = Backbone.View.extend({

        template: Handlebars.compile(template),
        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });
    return TicketView;
});
