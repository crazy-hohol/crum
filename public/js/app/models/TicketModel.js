
define(['backbone'], function(Backbone) {
    var TicketModel = Backbone.Model.extend({
        url: '/ticket',
        addCheckListItem: function() {

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
        delCheckListItem: function() {

        }
    });
    return TicketModel;
});
