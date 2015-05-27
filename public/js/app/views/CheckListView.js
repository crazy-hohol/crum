define(
    ['backbone', 'jquery', 'handlebars', 'text!templates/CheckListView.handlebars', 'text!templates/CheckListEditView.handlebars'],
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
                if (this.editMode) {
                    this.template = Handlebars.compile(templateEdit);
                }
                this.checkListConteiner.html(this.template({List: JSON.parse(this.model.get('checklist') || [])}));
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