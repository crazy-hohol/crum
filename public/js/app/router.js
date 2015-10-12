define(
    [
        'backbone',
        'collections/TicketsCollection',
        'views/MainView',
        'views/TicketMainView',
        'views/TicketsListView',
        'views/TicketAddView',
        'views/RegistrationView',
        'views/AuthView',
        'models/SessionModel'
    ],
    function(
        Backbone, TicketsCollection, MainView, TicketMainView, TicketsListView, TicketAddView, RegistrationView, AuthView, SessionModel
    ) {
        var AppRouter = Backbone.Router.extend({
            routes: {
                "ticket/:id": "showTicket",
                "": "showMain",
                "#": "showMain",
                "ticket-add": "ticketAdd",
                "projects": "",
                "project/:id": "",
                "log-in": "auth",
                "log-out": "",
                "registration": "registerUser"
            },
            initialize: function() {
                this.tickets = new TicketsCollection();
                this.tickets.reset(ticketsLoad);
                this.mainView = new MainView();
                this.sessionModel = new SessionModel();
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
            },
            registerUser: function() {
                var registrationView = new RegistrationView();
                this.mainView.subView = registrationView;
                this.mainView.menu = false;
                this.mainView.render();
            },
            auth: function() {
                var authView = new AuthView({model: this.sessionModel});
                this.mainView.subView = authView;
                this.mainView.menu = false;
                this.mainView.render();
            }

        });
        return AppRouter;
    }
);
