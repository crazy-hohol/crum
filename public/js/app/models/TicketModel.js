//var app = app || {};
define(['backbone'], function(Backbone) {
    TicketModel = Backbone.Model.extend({
        url: '/ticket'
    });
    return TicketModel;
});
