define(
    ['backbone', 'jquery', 'handlebars', 'text!templates/CheckListView.handlebars'],
    function(Backbone, $, Handlebars, template) {
        var CheckListView = Backbone.View.extend({

            template: Handlebars.compile(template),
            events: {
                "dblclick .list-item": 'initEditItem',
                "click .js-done-item": 'done',
                "keypress .edit-item-input": 'edit',
                "keypress #add-checklist-item": "add"
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
                console.info(el.target);
                $(el.target).parent().hide();
                $(el.target).parent().next().show();
            },

            done: function(el) {
                var checkbox = $(el.target);
                checkbox.next().toggleClass('done');
                this.model.doneChecklistItem(checkbox.attr('id'), checkbox.attr('checked') ? 1 : 0);
            },

            edit: function(el) {
                if (el.keyCode == 13) {
                    var input = $(el.target);
                    this.model.editCheckListItem(input.data('id'), input.val());
                    input.hide().prev().show();

                }
            },

            add: function(el) {
                if (el.keyCode == 13) {
                    var input = $(el.target);
                    this.model.addCheckListItem(input.val())
                    input.val('');
                }
            }

        });
        return CheckListView;
    }
);