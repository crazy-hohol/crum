var app = app || {};

app.Router = Backbone.Router.extend({
    routes: {
        "ticket/:id": "showTicket",
        "": "showMain"
    },
    showTicket: function(id) {
        var tickets = new app.TicketsCollection();
        tickets.fetch();
        var ticketView = new app.TicketMainView({model: tickets.get(id)});
        $('#app').html(ticketView.render().el);
    },

    showMain: function() {
        var mainV = new app.MainView().render();
    }

});

$(document).ready(function() {
    var router = new app.Router();
    Backbone.history.start();


});