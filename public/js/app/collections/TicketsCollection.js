//var app = app || {};

define(['backbone'], function(Backbone) {
    var TicketsCollection = Backbone.Collection.extend({
        model:  app.TicketModel,
        url: '/ticket'
    });

    return TicketsCollection;
});
