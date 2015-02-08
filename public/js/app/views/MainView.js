var app = app || {};

app.MainView = Backbone.View.extend({
    el: $("#app"),
    events: {
        "click #js-add-ticket": function () {
            console.info('dddd');
        }
    },
    initialize: function () {

        var coll = new app.TicketsCollection();
        var ticketsList = new app.TicketsListView({collection: coll}).render();
    },
    render: function () {
        //this.collection.each(function(ticket) {
        //    var ticketView = new app.TicketView({model: ticket});
        //    this.$el.append(ticketView.render().el);
        //}, this);
        return this;
    },
    addTicket: function() {
        console.info('add');
        $('#js-add-ticket-form').dialog({
            modal: true,
            resizable: false,
            width: 800,
            height: 600,
            buttons: [
                {
                    text: 'Add',
                    click: function () {
                        //this.collection.add(new app.TicketModel(
                        //    {'title': $("#title").val(), 'text': $("#text").val(), 'status': 2}
                        //));
                        //$('#js-add-ticket-form').dialog('close');
                    }
                },
                {
                    text: 'Cancel',
                    click: function () {
                        $('#js-add-ticket-form').dialog('close');
                    }
                }
            ]
        });
    }

});