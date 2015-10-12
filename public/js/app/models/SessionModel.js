define(
    ['backbone', 'jquery'],
    function(Backbone, $) {
        var SessionModel = Backbone.Model.extend({

            get: function (key) {
                return sessionStorage.getItem(key);
            },

            set: function (key, value) {
                sessionStorage.setItem(key, value);
                return this;
            },

            unset: function (key) {
                sessionStorage.removeItem(key);
                return this;
            },

            login: function (authData) {
                var that = this;
                $.ajax({
                    url: '/sign-in',
                    dataType: 'json',
                    type: 'POST',
                    data: authData
                }).done(function (response) {
                    if (response.status == 'success') {
                        that.set('auth_token', response.data.token);
                        that.set('user', response.data.user);
                        if (that.get('redirectFrom')) {
                            Backbone.history.navigate(
                                that.get('redirectFrom'),
                                {trigger: true}
                            );
                        } else {
                            Backbone.history.navigate('#', {trigger: true});
                        }
                    } else {
                        Backbone.history.navigate('#log-in', {trigger: true});
                    }
                })
            },

            logout: function () {
                var that = this;

                $.ajax({
                    url: '',
                    dataType: 'json',
                    type: 'DELETE'
                }).done(function (reponse) {
                    that.unset('auth_token').unset('user');
                    Backbone.history.navigate('#log-in', {trigger: true});
                })
            }
        });

        return SessionModel;
    }
);