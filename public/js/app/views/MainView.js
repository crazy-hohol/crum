var app = app || {};

app.MainView = Backbone.View.extend({
    el: '#main',
    events: {
        '#js-add-ticket click': 'add'
    },
    init: function (collection) {
        this.collection = collection;
        this.collection.fetch();
        this.on("add", function() {
            var ticketView = new app.TicketView({model: ticket});
            this.$el.append(ticketView.render().el);
        }, this.collection);
        this.render();
    },
    render: function () {
        this.collection.each(function(ticket) {
            var ticketView = new app.TicketView({model: ticket});
            this.$el.append(ticketView.render().el);
        }, this);
    },
    add: function() {
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