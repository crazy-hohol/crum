//var app = app || {};
define(
    ['handlebars', 'backbone', 'underscore', 'jquery', 'jquery-ui', 'views/TicketView', 'text!templates/TicketsListView.handlebars'],
    function(Handlebars, Backbone, _, $, TicketView, templateList) {
        console.info(templateList);
        var TicketsListView = Backbone.View.extend({
            //el: $("#status2"),

            template: Handlebars.compile(templateList),
            initialize: function () {
                this.$el.html(this.template());
                var collection = this.collection;
                this.collection.fetch({reset: true});
                this.collection.on("add", function(ticket) {
                    var ticketView = new TicketView({model: ticket});
                    $("#status" + ticket.get('status'), this.$el).append(ticketView.render().el);
                }, this);
                $('.status-column', this.$el).sortable({
                    connectWith: '.status-column',
                    tolerance: 'pointer',
                    update: function (event, ui) {
                        var el = $(ui.item.context.firstElementChild);
                        var model = collection.get(el.attr('id').replace('ticket', ''));
                        var status = el.parent().parent().attr('id').replace('status', '');
                        model.save({'status': status});
                    }

                });


            },
            render: function () {
                var statuses = [2, 3, 4, 5, 6];

                for (var i = 0; i < statuses.length; i++) {
                    var filteredTickets = _.filter(this.collection.models, function (item) {
                        return item.get('status') == statuses[i];
                    });

                    for (var ticket = 0; ticket < filteredTickets.length; ticket++) {
                        var ticketView = new TicketView({model: filteredTickets[ticket]});
                        $("#status" + statuses[i], this.$el).append(ticketView.render().el);
                    }
                }

                return this;
            }
        });
        return TicketsListView;
    }
);

