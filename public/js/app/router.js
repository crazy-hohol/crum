define(
    ['backbone', 'collections/TicketsCollection', 'views/MainView', 'views/TicketMainView', 'views/TicketsListView', 'views/TicketAddView'],
    function(Backbone, TicketsCollection, MainView, TicketMainView, TicketsListView, TicketAddView) {
        var AppRouter = Backbone.Router.extend({
            routes: {
                "ticket/:id": "showTicket",
                "": "showMain",
                "#": "showMain",
                "ticket-add": "ticketAdd",
                "projects": "",
                "project/:id": "",
                "log-in": "",
                "log-out": "",
                "registration": ""
            },
            initialize: function() {
                this.tickets = new TicketsCollection();
                this.tickets.reset(ticketsLoad);
                this.mainView = new MainView();

            },
            showTicket: function(id) {
                var ticketView = new TicketMainView({model: this.tickets.get(id)});
                this.mainView.subView = ticketView;
                this.mainView.menu = true;
                this.mainView.render();
            },

            showMain: function() {
                var ticketsListView = new TicketsListView({collection: this.tickets});
                this.mainView.subView = ticketsListView;
                this.mainView.menu = true;
                this.mainView.render();
            },

            ticketAdd: function() {
                var ticketAddView = new TicketAddView({collection: this.tickets});
                this.mainView.subView = ticketAddView;
                this.mainView.menu = true;
                this.mainView.render();
            }

        });
        return AppRouter;
    }
);
