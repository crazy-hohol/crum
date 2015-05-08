
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
require(['backbone', 'jquery', 'appRouter'], function(Backbone, $, AppRouter) {
console.info(AppRouter);
    $(document).ready(function() {
        var routerApp = new AppRouter();
        Backbone.history.start();


    });
});
