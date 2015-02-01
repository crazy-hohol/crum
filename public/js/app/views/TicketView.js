var app = app || {};

app.TicketView = Backbone.View.extend({
    tagName: "div",
    template: $("#ticketTemplate").html(),
    render: function () {
        console.info(this.model);
        var tmpl = _.template(this.template);
        this.$el.html(tmpl(this.model.toJSON()));
    }
});