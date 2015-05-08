define(
    ['backbone', 'collections/TicketsCollection', 'views/MainView', 'views/TicketMainView', 'views/TicketsListView'],
    function(Backbone, TicketsCollection, MainView, TicketMainView, TicketsListView) {
        var AppRouter = Backbone.Router.extend({
            routes: {
                "ticket/:id": "showTicket",
                "": "showMain",
                "#": "showMain"
            },
            initialize: function() {
                this.tickets = new TicketsCollection();
                this.tickets.reset(ticketsLoad);
                this.mainView = new MainView();

            },
            showTicket: function(id) {
                var ticketView = new TicketMainView({model: this.tickets.get(id)});
                this.mainView.subView = ticketView;
                this.mainView.render();
            },

            showMain: function() {
                var ticketsListView = new TicketsListView({collection: this.tickets});
                this.mainView.subView = ticketsListView;
                this.mainView.render();
            }

        });
        return AppRouter;
    }
);
