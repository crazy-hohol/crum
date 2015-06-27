define(['backbone'], function(Backbone) {
    var UserRegistrationModel = Backbone.Model.extend({
        url: '/registration-user',
        validate: function(attrs, options) {
            if (attrs.pass != attrs.pass_repeat) {
                return 'pass not identical';
            }
            if (!attrs.email.test('/^[0-9a-zA-Z.-_]+@[0-9a-zA-Z.-_]+\.[0-9a-zA-Z.-_]+/')) {
                return 'invalid email';
            }
            if (attrs.login.length < 6) {
                return 'login less then 6 symbols';
            }
        }
    });
    return UserRegistrationModel;
});