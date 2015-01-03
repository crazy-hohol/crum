var app = app || {};

app.MainView = Backbone.View.extend({
    el: '#main',
    events: {
        '#js-add-ticket click': 'add'
    },
    render: function () {

    },
    add: function() {
        $('#js-add-ticket-form').dialog({
            modal: true,
            resizable: false,
            width: 800,
            height: 600,
            buttons: []
        });
    }

});