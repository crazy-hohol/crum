define(
    ['backbone', 'jquery', 'handlebars', 'text!templates/CheckListView.handlebars'],
    function(Backbone, $, Handlebars, template) {
        var CheckListView = Backbone.View.extend({
            template: Handlebars.compile(template),
            events: {
                "click .js-edit-check-list-item": 'editCheckListItem',
                "click .js-add-check-list-item": 'addCheckListItem',
                "click .js-del-check-list-item": 'delCheckListItem'
            },
            initialize: function() {
                this.model.on('change', function(task) {
                    this.checkListConteiner.html(this.template(task.attributes));
                }, this);
            },
            render: function() {
                this.checkListConteiner.html(this.template(this.model.attributes));
                return this;
            },

            editCheckListItem: function() {

            },
            addCheckListItem: function() {

            },
            delCheckListItem: function() {

            }
        });
        return CheckListView;
    }
);