﻿$(function () {
    MyApp.category = function (params) {

        var category = MyApp.db.demoCategories[params.id];

        return {
            title: ko.observable(category.key),
            procedures: category.items,
            categoryName: category.key,
            categoryColor: params.color,
            categoryImage: category.image,

            viewShown: function() {
                $('#category-carousel').carousel();
            }
        };
    };
});