var app = app || {};

app.TicketMainView = Backbone.View.extend({
    template: Handlebars.compile($('#ticket-main-template').html()),
    events: {
        "click .edit-field-button": "editDialog"
    },
    //initialize: function () {
    //
    //},
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },

    editDialog: function () {
        $(".edit-form").hide();
        $(this).next().show();
    }
});