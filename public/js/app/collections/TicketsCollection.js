
define(['backbone', 'models/TicketModel'], function(Backbone, TicketModel) {
    var TicketsCollection = Backbone.Collection.extend({
        model:  TicketModel,
        url: '/ticket'
    });

    return TicketsCollection;
});
