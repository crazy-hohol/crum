define(
    ['backbone', 'jquery', 'handlebars', 'text!templates/CheckListView.handlebars'],
    function(Backbone, $, Handlebars, template, templateEdit) {
        var CheckListView = Backbone.View.extend({
            template: Handlebars.compile(template),
            events: {
                "dblclick .list-item": 'initEditItem'
            },
            initialize: function() {
                this.model.on('change', function(task) {
                    this.checkListConteiner.html(this.template({List: JSON.parse(task.get('checklist'))}));
                }, this);
            },
            render: function() {
                var data = this.model.get('checklist');
                this.checkListConteiner.html(this.template(data ? {List: JSON.parse(data)} : {}));
                return this;
            },

            initEditItem: function() {
                $(this).hide().next().show();
            }
        });
        return CheckListView;
    }
);