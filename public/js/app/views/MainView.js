
define(['backbone', 'jquery', 'views/MenuView', 'jquery-ui'], function(Backbone, $, MenuView) {
    var MainView = Backbone.View.extend({
        el: $("#main"),
        //events: {
        //    "click #js-add-ticket": 'addTicket'
        //
        //},
        render: function () {

            $("#app").html(this.subView.render().el);
            if (this.menu) {
                var menu = new MenuView();
                $("#top").html(menu.render().$el);
            }
            return this;
        }

    });
    return MainView;
});

