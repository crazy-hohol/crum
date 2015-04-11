//var app = app || {};
define(['backbone', 'handlebars', 'jquery'], function(BackBone, Handlebars, $) {});
app.TicketView = Backbone.View.extend({

    template: $("#ticketTemplate").html(),
    render: function () {
        var tmpl = _.template($("#ticketTemplate").html());
        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    }
});