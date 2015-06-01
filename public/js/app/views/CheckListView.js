define(
    ['backbone', 'jquery', 'handlebars', 'text!templates/CheckListView.handlebars'],
    function(Backbone, $, Handlebars, template) {
        var CheckListView = Backbone.View.extend({

            template: Handlebars.compile(template),
            events: {
                //"dblclick .list-item": 'initEditItem',
                "click .list-item.js-done-item": 'done'

            },
            initialize: function() {
                //this.model.on('change', function(task) {
                //    this.checkListConteiner.html(this.template({List: JSON.parse(task.get('checklist'))}));
                //}, this);
            },
            render: function() {
                var data = this.model.get('checklist');
                this.$el.html(this.template(data ? {List: JSON.parse(data)} : {}));
                this.delegateEvents();
                return this;
            },

            initEditItem: function() {
                console.info($(this).hide().next().val());
                $(this).hide().next().show();
            },

            done: function() {
                console.info(this);
                $(this).next().addClass('done');
            }

        });
        return CheckListView;
    }
);