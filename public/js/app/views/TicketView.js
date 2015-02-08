var app = app || {};

app.TicketView = Backbone.View.extend({
    tagName: "div",
    template: $("#ticketTemplate").html(),
    render: function () {
        console.info(this.model);
        console.info($("#ticketTemplate").html());
        var tmpl = _.template($("#ticketTemplate").html());
        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    }
});