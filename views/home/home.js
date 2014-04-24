$(function () {
    MyScope.home = function (params) {
        var categoriesList = {
            categories: []
        };

        for (var categoryIndex = 0; categoryIndex < MyScope.db.categories.length; categoryIndex++) {
            var category = MyScope.db.categories[categoryIndex];

            categoriesList.categories.push({
                category: category.key,
                color: category.color,
                image: category.image,
                action: '#category/' + categoryIndex + '/' + category.color
            });
        }

        return {
            categoriesList: categoriesList
        };
    };
});
