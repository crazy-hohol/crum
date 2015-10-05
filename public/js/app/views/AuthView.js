define(
    ['backbone', 'jquery'],
    function(Backbone, $) {
        var view = Backbone.View.extend({
            className: "span2 offset6",
            template: $("#js-login-form").html(),
            events: {
                "click #log": "logInAction"
            },
            render: function(el) {
                this.$el.html(this.template);
                return this;
            },
            logInAction: function (el) {

            }
        });
        return view;
    }
);
