$(document).on('pagebeforecreate', '#category', function () {
    var categoryIndex = $.mobile.pageData.categoryIndex;
    var category = MyScope.db.categories[categoryIndex];

    var content = $('#category-content');
    content.prepend(makeControl('category-header', { category: category.key, image: category.image }));

    var carousel = content.find('.m-carousel-inner').empty();
    var procedures = category.items;

    $.each(procedures, function(procedureIndex, procedure) {
        carousel.append(makeControl('procedure-card-item', { image: procedure.image, caption: procedure.title }));
    });

    if (procedures.length < 3) {
        carousel.append('<div></div>');
        carousel.append('<div></div>');
    }

    $('.m-carousel').carousel();
});