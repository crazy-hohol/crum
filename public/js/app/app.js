var app = app || {};

app.Router = Backbone.Router.extend({
    routes: {
        "ticket/:id": "showTicket",
        "": "showMain"
    },
    initialize: function() {

        this.tickets = new app.TicketsCollection();
        this.mainView = new app.MainView();

    },
    showTicket: function(id) {

        var ticketView = new app.TicketMainView({model: this.tickets.get(id)});
        //$('#app').html(ticketView.render().el);
        this.mainView.subView = ticketView;
        this.mainView.render();
    },

    showMain: function() {
        var ticketsListView = new app.TicketsListView({collection: this.tickets});
        //var mainView = new app.MainView({subView: subView}).render();
        this.mainView.subView = ticketsListView;
        this.mainView.render();
    }

});
var router = new app.Router();
$(document).ready(function() {

    Backbone.history.start();


});