var app = app || {};

app.Router = Backbone.Router.extend({
    routes: {
        "ticket/:id": "showTicket",
        "": "showMain"
    },
    initialize: function() {

        this.tickets = new app.TicketsCollection();

    },
    showTicket: function(id) {

        console.info(this.tickets.get(id));
        var ticketView = new app.TicketMainView({model: this.tickets.get(id)});
        $('#app').html(ticketView.render().el);
    },

    showMain: function() {
        var suibView = new app.TicketsListView({collection: app.tickets});
        var mainView = new app.MainView({subView: suibView}).render();
    }

});
var router = new app.Router();
$(document).ready(function() {

    Backbone.history.start();


});