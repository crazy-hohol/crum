var app = app || {};

app.Router = Backbone.Router.extend({
    routes: {
        "ticket/:id": "showTicket",
        "": "showMain"
    },
    initialize: function() {
        app.tickets = new app.TicketsCollection();
        app.tickets.fetch();
    },
    showTicket: function(id) {


        var ticketView = new app.TicketMainView({model: app.tickets.get(id)});
        $('#app').html(ticketView.render().el);
    },

    showMain: function() {
        var suibView = new app.TicketsListView({collection: app.tickets});
        var mainView = new app.MainView({subView: suibView}).render();
    }

});

$(document).ready(function() {
    var router = new app.Router();
    Backbone.history.start();


});