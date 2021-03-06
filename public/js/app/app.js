
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
        templates: '../app/templates',
        bootstrap: 'bootstrap'
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        'jquery-ui': {
            depts: ['jquery']
        },
        'bootstrap': {
            exports: 'BootStrap'
        }
    }
});
require(['backbone', 'jquery', 'underscore', 'appRouter'], function(Backbone, $, _, AppRouter) {
    if (!sessionStorage.getItem('auth_token')) {
        window.location.replace('#log-in');
    }
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

    routerApp = new AppRouter();
    $(document).ready(function() {
        Backbone.history.start();
    });
});
