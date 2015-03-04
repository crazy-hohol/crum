var app = app || {};

app.TicketsListView = Backbone.View.extend({
    el: $("#status2"),
    initialize: function () {

        this.collection.fetch();
        this.collection.on("add", function(ticket) {
            var ticketView = new app.TicketView({model: ticket});
            this.$el.append(ticketView.render().el);
        }, this);
        //$('.status-column').sortable({
        //    connectWith: '.status-column',
        //    tolerance: 'pointer',
        //    update: function (event, ui) {
        //        var el = ui.item.context.firstElementChild;
        //        console.info($(el).attr('id'));
        //    }
        //
        //});

        this.render();
    },
    render: function () {
        var statuses = [2, 3, 4, 5, 6];
        for (var i = 0; i < statuses.length; i++) {
            var filteredTickets = _.filter(this.collection.models, function (item) {
                return item.get('status') == statuses[i];
            });
            //filteredTickets.each(function(ticket) {
            //    var ticketView = new app.TicketView({model: ticket});
            //    $(".status-column" + statuses[i]).append(ticketView.render().el);
            //}, this);
            for (var ticket = 0; ticket < filteredTickets.length; ticket++) {
                var ticketView = new app.TicketView({model: filteredTickets[ticket]});
                $("#status" + statuses[i]).append(ticketView.render().el);
            }
        }


        return this;
    }
});
