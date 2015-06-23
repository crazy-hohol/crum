
define(['backbone'], function(Backbone) {
    var ProjectModel = Backbone.Model.extend({
        url: '/project'
    });
    return ProjectModel;
});
