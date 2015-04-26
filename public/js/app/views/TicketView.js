//var app = app || {};
define(['backbone', 'handlebars', 'jquery', 'text!templates/TicketView.handlebars'], function(BackBone, Handlebars, $, template) {
    var TicketView = Backbone.View.extend({

        template: Handlebars.compile(template),
        render: function () {
            var tmpl = _.template($("#ticketTemplate").html());
            this.$el.html(tmpl(this.model.toJSON()));
            return this;
        }
    });
    return TicketView;
});
