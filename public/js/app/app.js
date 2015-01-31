var app = app || {};

app.Router = Backbone.Router.extend({
   routes: {

   }
});

$(document).ready(function() {
    var coll = new app.TicketsCollection();
    var mainV = new app.MainView(coll);
    console.info('start');
});