var app = app || {};

app.TicketMainView = Backbone.View.extend({
    template: Handlebars.compile($('#ticket-main-template').html()),
    events: {
        "click .js-edit-field-button": "editDialog",
        "click .js-save-field": "saveEditedField",
        "click .js-cancel-edition": "cancelEditDialog"
    },
    initialize: function () {
        this.model.on('change', function(ticket) {
            var changes = ticket.changedAttributes();
            for (ch in changes) {
                $("#" + ch + "-field").html(changes[ch]);
            }

        });
    },
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },

    editDialog: function (el) {
        var field = $(el.target).data("field");
        $("#" + field + "-field-edit").val(this.model.get(field));
        $(".edit-form").hide();
        $(el.target).next().show();
    },

    saveEditedField: function (el) {
        el = $(el.target);
        var ticket = this.model;
        var field = el.parent().prev().data('field');
        console.info(field);
        var value = el.prev().prev().val();
        console.info(value);
        //ticket.set(field, value);
        ticket.save(field, value, {
            wait: true,
            success: function (res) {
                $(".edit-form").hide();
            }
        });
    },

    cancelEditDialog: function(el) {
        $(".edit-form").hide();
        $(el.target).prev().prev().prev().html('');
    }

});