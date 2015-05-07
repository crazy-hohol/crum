//var app = app || {};
//
//app.Router = Backbone.Router.extend({
//    routes: {
//        "ticket/:id": "showTicket",
//        "": "showMain",
//        "#": "showMain"
//    },
//    initialize: function() {
//
//        this.tickets = new app.TicketsCollection();
//        this.mainView = new app.MainView();
//
//    },
//    showTicket: function(id) {
//
//        var ticketView = new app.TicketMainView({model: this.tickets.get(id)});
//        this.mainView.subView = ticketView;
//        this.mainView.render();
//    },
//
//    showMain: function() {
//        var ticketsListView = new app.TicketsListView({collection: this.tickets});
//        this.mainView.subView = ticketsListView;
//        this.mainView.render();
//    }
//
//});

require.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'jquery-2.0.0',
        text: 'text',
        backbone: 'backbone',
        underscore: 'underscore',
        handlebars: 'handlebars',
        'jquery-ui': 'ui/jquery-ui',
        router: '../app/router.js',
        views: '../app/views',
        models: '../app/models',
        collections: '../app/collections',
        templates: '../app/templates'
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        'jquery-ui': {
            depts: ['jquery']
        }
    }
});
require(['backbone', 'jquery', 'router'], function(Backbone, $, Router) {

    //routerApp.tickets.reset(ticketsLoad);
    $(document).ready(function() {
        var routerApp = new Router({res: ticketsLoad});
        Backbone.history.start();


    });
});
