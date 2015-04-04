var app = app || {};

app.Router = Backbone.Router.extend({
    routes: {
        "ticket/:id": "showTicket",
        "": "showMain",
        "#": "showMain"
    },
    initialize: function() {

        this.tickets = new app.TicketsCollection();
        this.mainView = new app.MainView();

    },
    showTicket: function(id) {

        var ticketView = new app.TicketMainView({model: this.tickets.get(id)});
        this.mainView.subView = ticketView;
        this.mainView.render();
    },

    showMain: function() {
        var ticketsListView = new app.TicketsListView({collection: this.tickets});
        this.mainView.subView = ticketsListView;
        this.mainView.render();
    }

});
var router = new app.Router();
$(document).ready(function() {

    Backbone.history.start();


});