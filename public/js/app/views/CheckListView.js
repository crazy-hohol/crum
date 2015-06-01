define(
    ['backbone', 'jquery', 'handlebars', 'text!templates/CheckListView.handlebars'],
    function(Backbone, $, Handlebars, template) {
        var CheckListView = Backbone.View.extend({

            template: Handlebars.compile(template),
            events: {
                "dblclick .list-item": 'initEditItem',
                "click .js-done-item": 'done'

            },
            initialize: function() {
                this.model.on('change', function(task) {
                    this.$el.html(this.template({List: JSON.parse(task.get('checklist'))}));
                }, this);
            },
            render: function() {
                var data = this.model.get('checklist');
                this.$el.html(this.template(data ? {List: JSON.parse(data)} : {}));
                this.delegateEvents();
            },

            initEditItem: function(el) {
                $(el.target).hide().next().show();
            },

            done: function(el) {

                $(el.target).next().addClass('done');
            }

        });
        return CheckListView;
    }
);