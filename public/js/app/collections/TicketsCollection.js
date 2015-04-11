//var app = app || {};

define(['backbone'], function(Backbone) {
    TicketsCollection = Backbone.Collection.extend({
        model:  app.TicketModel,
        url: '/ticket'
    });

    return TicketsCollection;
});
