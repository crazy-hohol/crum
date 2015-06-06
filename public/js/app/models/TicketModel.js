
define(['backbone'], function(Backbone) {
    var TicketModel = Backbone.Model.extend({
        url: '/ticket',
        addCheckListItem: function(val) {
            var list = JSON.parse(this.get('checklist'));
            list.push({id: list.length, text: val, done: 0});
            this.save('checklist', JSON.stringify(list), {wait: true});
        },
        editCheckListItem: function(id, val) {
            var list = JSON.parse(this.get('checklist'));
            for (var i = 0; i < list.length; i++) {
                if (list[i].id == id) {
                    list[i].text = val;
                    break;
                }
            }
            this.save('checklist', JSON.stringify(list), {wait: true});
        },
        doneChecklistItem: function(id, flag) {
            var list = JSON.parse(this.get('checklist'));
            for (var i = 0; i < list.length; i++) {
                if (list[i].id == id) {
                    list[i].done = flag;
                    break;
                }
            }
            this.save('checklist', JSON.stringify(list), {wait: true});
        },
        delCheckListItem: function(id) {
            var list = JSON.parse(this.get('checklist'));
        }
    });
    return TicketModel;
});
