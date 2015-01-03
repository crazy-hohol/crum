var app = app || {};
app.TicketsCollection = Backbone.Collection.extend({
    model:  app.TicketModel,
    url: '/ticket'
});