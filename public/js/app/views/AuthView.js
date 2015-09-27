define(
    ['backbone', 'jquery'],
    function(Backbone, $) {
        var view = Backbone.View.extend({
            className: "span2 offset6",
            template: $("#js-registration-form").html(),
            render: function(el) {

            }
        });
        return view;
    }
);
