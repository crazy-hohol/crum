define(
    ['backbone', 'jquery', 'handlebars', 'text!templates/TicketAddView.handlebars'],
    function(Backbone, $, Handlebars, template) {
    var TicketAddView = Backbone.View.extend({

        template: Handlebars.compile(template),
        events: {
            "click #js-add-ticket": "addTicket"
        },
        render: function() {
            this.$el.html(this.template);
            return this;
        },

        addTicket: function() {
            this.collection.create(
                {title: $("#title").val(), text: $("#text").val(), status: 2},
                {
                    wait: true,
                    success: function(response) {
                        routerApp.navigate('ticket/' + response.id, {trigger: true});
                    }
                }
            );
        }
    });

    return TicketAddView;
});