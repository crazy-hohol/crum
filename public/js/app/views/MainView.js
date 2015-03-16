var app = app || {};

app.MainView = Backbone.View.extend({
    el: $("#main"),
    events: {
        "click #js-add-ticket": 'addTicket'

    },
    initialize: function (options) {

        var coll = new app.TicketsCollection();
        app.ticketsList = new app.TicketsListView({collection: coll}).render();
    },
    render: function () {
        return this;
    },
    addTicket: function() {
        var self = this;
        $('#js-add-ticket-form').dialog({
            modal: true,
            resizable: false,
            width: 800,
            height: 600,
            buttons: [
                {
                    text: 'Add',
                    click: function () {
                        console.info(app.ticketsList.collection);
                        app.ticketsList.collection.create(
                            {title: $("#title").val(), text: $("#text").val(), status: 2},
                            {wait: true}
                        );
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