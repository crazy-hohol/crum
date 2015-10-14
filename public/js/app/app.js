
require.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'jquery-2.0.0',
        text: 'text',
        backbone: 'backbone',
        underscore: 'underscore',
        handlebars: 'handlebars',
        'jquery-ui': 'ui/jquery-ui',
        appRouter: '../app/router',
        views: '../app/views',
        models: '../app/models',
        collections: '../app/collections',
        templates: '../app/templates'
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        'jquery-ui': {
            depts: ['jquery']
        }
    }
});
require(['backbone', 'jquery', 'underscore', 'appRouter'], function(Backbone, $, _, AppRouter) {
    $.ajaxSetup({
        statusCode: {
            401: function () {
                window.location.replace('#log-in');
            }
        },
        headers: {
            'Authorization': sessionStorage.getItem('auth_token')
        }
    });
    //var _sync = Backbone.sync();
    //Backbone.sync = function (method, model, options) {
    //    if (model && (method == 'create' || method == 'update' || method == 'patch')) {
    //        options.contentType = 'application/json';
    //        options.data = JSON.stringify(options.attrs || model.toJSON());
    //    }
    //    _.extend(options.data, {
    //        'auth_token' : ''
    //    });
    //    return _sync.call(this, method, model, options);
    //};
    routerApp = new AppRouter();
    $(document).ready(function() {
        Backbone.history.start();
    });
});
