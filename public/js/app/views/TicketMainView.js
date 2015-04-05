var app = app || {};

app.TicketMainView = Backbone.View.extend({
    template: Handlebars.compile($('#ticket-main-template').html()),
    events: {
        "click .edit-field-button": "editDialog",
        "click .js-save-field": "saveEditedField"
    },
    initialize: function () {
        this.model.on('change', function(ticket) {
            this.render();
        });
    },
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },

    editDialog: function (el) {
        console.info(el.target);
        $(".edit-form").hide();
        $(el.target).next().show();
    },

    saveEditedField: function (el) {
        el = $(el.target);
        var ticket = this.model;
        var field = el.parent().prev().data('field');
        console.info(field);
        var value = el.prev().val();
        console.info(value);
        ticket.set(field, value);
        ticket.save({
            wait: true,
            success: function (res) {
                $(".edit-form").hide();
            }
        });
    }

});