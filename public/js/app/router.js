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
        'models/SessionModel',
        'views/ProjectsViews',
        'collections/ProjectsCollection'
    ],
    function(
        Backbone,
        TicketsCollection,
        MainView,
        TicketMainView,
        TicketsListView,
        TicketAddView,
        RegistrationView,
        AuthView,
        SessionModel,
        ProjectsViews,
        ProjectsCollection
    ) {
        var AppRouter = Backbone.Router.extend({
            routes: {
                "ticket/:id": "showTicket",
                "": "showMain",
                "#": "showMain",
                "ticket-add": "ticketAdd",
                "projects": "projectsList",
                "project/:id": "",
                "log-in": "auth",
                "log-out": "",
                "registration": "registerUser"
            },
            initialize: function() {
                this.tickets = new TicketsCollection();
                this.projectsCollection = new ProjectsCollection();
                if (projectsLoad && ticketsLoad) {
                    this.projectsCollection.reset(projectsLoad);
                    this.tickets.reset(ticketsLoad);
                } else {
                    this.projectsCollection.fetch();
                    this.tickets.fetch();
                }

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
            },
            projectsList: function() {
                var projectsView = new ProjectsViews({collection: this.projectsCollection});
                this.mainView.subView = projectsView;
                this.mainView.menu = true;
                this.mainView.render();
            }

        });
        return AppRouter;
    }
);
