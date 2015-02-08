var app = app || {};

//var TicketModel = Backbone.Model.extend({
//    url: '/ticket'
//});
//
//
//
//var TicketsCollection = Backbone.Collection.extend({
//    model:  TicketModel,
//    url: '/ticket'
//});
//
//
//var TicketView = Backbone.View.extend({
//    tagName: "div",
//    template: $("#ticketTemplate").html(),
//    render: function () {
//        console.info(this.model);
//        console.info($("#ticketTemplate").html());
//        var tmpl = _.template($("#ticketTemplate").html());
//        this.$el.html(tmpl(this.model.toJSON()));
//        return this;
//    }
//});
//
//var MainView = Backbone.View.extend({
//    el: $("#status2"),
//    events: {
//        'click #js-add-ticket': 'addTicket'
//    },
//    initialize: function (collection) {
//
//        this.collection = collection;
//        this.collection.fetch();
//        //this.collection.on('add', this.addOne, this);
//        this.collection.on("add", function(ticket) {
//            var ticketView = new TicketView({model: ticket});
//            console.info(ticketView);
//            this.$el.append(ticketView.render().el);
//        }, this);
//
//        this.render();console.info('init');
//    },
//    render: function () {
//        //console.info(this.collection);
//        this.collection.each(function(ticket) {
//            console.info(ticket);
//            var ticketView = new TicketView({model: ticket});
//            this.$el.append(ticketView.render().el);
//        }, this);
//        return this;
//    },
//    addTicket: function() {
//        console.info('add');
//        $('#js-add-ticket-form').dialog({
//            modal: true,
//            resizable: false,
//            width: 800,
//            height: 600,
//            buttons: [
//                {
//                    text: 'Add',
//                    click: function () {
//                        this.collection.add(new TicketModel(
//                            {'title': $("#title").val(), 'text': $("#text").val(), 'status': 2}
//                        ));
//                        $('#js-add-ticket-form').dialog('close');
//                    }
//                },
//                {
//                    text: 'Cancel',
//                    click: function () {
//                        $('#js-add-ticket-form').dialog('close');
//                    }
//                }
//            ]
//        });
//    }
//
//});
//






//app.Router = Backbone.Router.extend({
//   routes: {
//
//   }
//});

$(document).ready(function() {
    var coll = new app.TicketsCollection();
    var mainV = new app.MainView(coll);
    console.info('start');
});