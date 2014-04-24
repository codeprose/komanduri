$(document).on('pagebeforecreate', '#home', function() {
    var templateSource = $('#category-menu-item').html();
    var template = Handlebars.compile(templateSource);

    var listview = $('ul[data-role="listview"]').empty();
    $.each(MyScope.db.categories, function(categoryIndex, category) {
        listview.append(template({ category: category.key, image: category.image }));
    });
});