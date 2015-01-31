var app = app || {};

app.TicketView = Backbone.View.extend({
    template: $("#ticketTemplate").html(),
    render: function () {
        var tmpl = _.template(this.template);
        this.$el.html(tmpl(this.model.toJSON()));
    }
});