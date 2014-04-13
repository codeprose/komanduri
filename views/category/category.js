$(function () {
    MyApp.category = function (params) {

        var category = MyApp.db.demoCategories[params.id];

        return {
            title: ko.observable(category.key),
            procedures: category.items,
            categoryName: category.key,
            categoryColor: params.color,

            viewShown: function() {
                $('#category-carousel').carousel();
            }
        };
    };
});