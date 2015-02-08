var app = app || {};

app.MainView = Backbone.View.extend({
    el: $("#status2"),
    events: {
        'click #js-add-ticket': 'addTicket'
    },
    initialize: function (collection) {

        this.collection = collection;
        this.collection.fetch();
        //this.collection.on('add', this.addOne, this);
        this.collection.on("add", function(ticket) {
            var ticketView = new app.TicketView({model: ticket});
            console.info(ticketView);
            this.$el.append(ticketView.render().el);
        }, this);

        this.render();console.info('init');
    },
    render: function () {
        //console.info(this.collection);
        this.collection.each(function(ticket) {
            console.info(ticket);
            var ticketView = new app.TicketView({model: ticket});
            this.$el.append(ticketView.render().el);
        }, this);
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
                        this.collection.add(new app.TicketModel(
                            {'title': $("#title").val(), 'text': $("#text").val(), 'status': 2}
                        ));
                        $('#js-add-ticket-form').dialog('close');
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