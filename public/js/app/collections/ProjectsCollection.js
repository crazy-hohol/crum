define(['backbone', 'models/ProjectModel'], function(Backbone, ProjectModel) {
    var ProjectCollection = Backbone.Collection.extend({
        model:  ProjectModel,
        url: '/project'
    });

    return ProjectCollection;
});