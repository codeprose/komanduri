$(function () {
    MyApp.category = function (params) {

        var category = MyApp.db.demoCategories[params.id];

        return {
            procedures: category.items,
            categoryName: category.key,
            categoryColor: params.color,

            viewShown: function() {
                $('.m-carousel').carousel();
            }
        };
    };
});