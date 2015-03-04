var app = app || {};

app.TicketView = Backbone.View.extend({

    template: $("#ticketTemplate").html(),
    render: function () {
        var tmpl = _.template($("#ticketTemplate").html());
        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    }
});