
define(['backbone'], function(Backbone) {
    var TicketModel = Backbone.Model.extend({
        url: '/ticket',
        addCheckListItem: function(val) {
            var list = JSON.parse(this.get('checklist'));
            list.push({text: val, done: 0});
            this.save('checklist', JSON.stringify(list), {wait: true});
        },
        editCheckListItem: function(id, val) {
            var list = JSON.parse(this.get('checklist'));
            //for (var i = 0; i < list.length; i++) {
            //    if (list[i].id == id) {
            //        list[i].text = val;
            //        break;
            //    }
            //}
            list[id].text = val;
            this.save('checklist', JSON.stringify(list), {wait: true});
        },
        doneChecklistItem: function(id, flag) {
            var list = JSON.parse(this.get('checklist'));
            //for (var i = 0; i < list.length; i++) {
            //    if (list[i].id == id) {
            //        list[i].done = flag;
            //        break;
            //    }
            //}
            list[id].done = flag;
            this.save('checklist', JSON.stringify(list), {wait: true});
        },
        delCheckListItem: function(id) {
            var list = JSON.parse(this.get('checklist'));
            list.splice(id, 1);
            this.save('checklist', JSON.stringify(list), {wait: true});
        }
    });
    return TicketModel;
});
