var app = app || {};

app.Router = Backbone.Router.extend({
    routes: {
        "ticket/:id": "showTicket",
        "": "showMain"
    },
    initialize: function() {

    },
    showTicket: function(id) {
        var tickets = new app.TicketsCollection();
        tickets.fetch();
        setTimeout(function () {
            console.info(tickets.get(id));
        }, 30000);
        console.info(tickets);

        var ticketView = new app.TicketMainView({model: tickets.get(id)});
        $('#app').html(ticketView.render().el);
    },

    showMain: function() {
        var suibView = new app.TicketsListView();
        var mainView = new app.MainView({subView: suibView}).render();
    }

});

$(document).ready(function() {
    var router = new app.Router();
    Backbone.history.start();


});