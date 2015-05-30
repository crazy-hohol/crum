define(
    ['backbone', 'jquery', 'handlebars', 'text!templates/CheckListView.handlebars'],
    function(Backbone, $, Handlebars, template, templateEdit) {
        var CheckListView = Backbone.View.extend({
            template: Handlebars.compile(template),
            events: {
                "click .js-edit-check-list-item": 'editCheckListItem',
                "click .js-add-check-list-item": 'addCheckListItem',
                "click .js-del-check-list-item": 'delCheckListItem',
                "click #js-save-checklist": '',
                "click #js-cancel-edition-checklist": ''
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

            addCheckListItem: function() {

            },
            delCheckListItem: function() {

            }
        });
        return CheckListView;
    }
);