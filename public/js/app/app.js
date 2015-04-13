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
        jquey: 'jquery-2.0.0',
        backbone: 'backbone',
        underscore: 'underscore',
        handlebars: 'handlebars',
        'jquery-ui': 'ui/jquer-ui',
        router: '../app/router',
        views: '../app/views',
        models: '../app/models',
        collections: '../app/collections',
        templates: '../app/templates',
        text: 'text'

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

var router = new app.Router();
$(document).ready(function() {

    Backbone.history.start();


});