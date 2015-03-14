var app = app || {};

app.TicketMainView = Backbone.View.extend({
    template: Handlebars.compile($('#ticket-main-template').html()),
    //events: {},
    //initialize: function () {
    //
    //},
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});