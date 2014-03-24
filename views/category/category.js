$(function () {
    MyApp.category = function (params) {

        var category = MyApp.db.demoCategories[params.id];

        return {
            procedures: category.items
        };
    };
});