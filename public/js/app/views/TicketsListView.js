var app = app || {};

app.TicketsListView = Backbone.View.extend({
    el: $("#status2"),
    initialize: function () {


        console.info(this.collection);
        this.collection.fetch();
        this.collection.on("add", function(ticket) {
            var ticketView = new app.TicketView({model: ticket});
            this.$el.append(ticketView.render().el);
        }, this);

        this.render();
    },
    render: function () {
        this.collection.each(function(ticket) {
            var ticketView = new app.TicketView({model: ticket});
            this.$el.append(ticketView.render().el);
        }, this);
        return this;
    },
});
