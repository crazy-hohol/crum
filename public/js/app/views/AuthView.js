define(
    ['backbone', 'jquery'],
    function(Backbone, $) {
        var AuthView = Backbone.View.extend({
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
                var authData = {
                    login: $("#auth-login").val(),
                    password: $("#auth-pass").val()
                };
                this.model.login(authData);
            }
        });
        return AuthView;
    }
);
