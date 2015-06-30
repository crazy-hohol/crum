define(
    ['jquery', 'backbone', 'models/UserRegistrationModel'],
    function($, Backbone, UserRegistrationModel) {
        var RegistrationView = Backbone.View.extend({
            className: 'span2 offset6',
            events: {
                "click #register-btn": 'registerUser'
            },
            template: $("#js-registration-form").html(),
            render: function() {
                this.$el.html(this.template);
                return this;
            },
            registerUser: function() {
                var model = new UserRegistrationModel();
                model.save(
                    {
                        'login': $('#login').val(),
                        'name': $('#name').val(),
                        'email': $('#email').val(),
                        'pass': $('#pass').val(),
                        'pass_repeat': $('#pass_repeat').val()
                    },
                    {
                        isNew: true,
                        wait: true
                    }
                );
            }
        });
        return RegistrationView;
    }
);