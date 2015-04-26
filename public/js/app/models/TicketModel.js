//var app = app || {};
define(['backbone'], function(Backbone) {
    var TicketModel = Backbone.Model.extend({
        url: '/ticket'
    });
    return TicketModel;
});
