$(document).on('pagebeforecreate', '#home', function() {
    var listview = $('ul[data-role="listview"]').empty();
    $.each(MyScope.db.categories, function(categoryIndex, category) {
        listview.append(makeControl('category-menu-item', { category: category.key, image: category.image, categoryIndex: categoryIndex }));
    });
});