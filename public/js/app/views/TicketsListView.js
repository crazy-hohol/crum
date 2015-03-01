var app = app || {};

app.TicketsListView = Backbone.View.extend({
    el: $("#status2"),
    initialize: function () {

        this.collection.fetch();
        this.collection.on("add", function(ticket) {
            var ticketView = new app.TicketView({model: ticket});
            this.$el.append(ticketView.render().el);
        }, this);
        $('.status-column').sortable({
            connectWith: '.status-column',
            tolerance: 'pointer',
            stop: function (event, ui) {
                var el = ui.item;
                console.info(el);
            }

        });

        this.render();
    },
    render: function () {
        this.collection.each(function(ticket) {
            var ticketView = new app.TicketView({model: ticket});
            this.$el.append(ticketView.render().el);
        }, this);
        return this;
    }
});
