$(document).on('pagebeforeshow', '#category', function (event, data) {
    var params = pageParams($(this), data.prevPage, ['categoryIndex']);

    var categoryIndex = params.categoryIndex;
    var category = MyScope.db.categories[categoryIndex];

    var page = $('#category');
    var pageContent = page.children('.ui-content');
    page.prepend(makeControl('context-header', { title: category.key, image: category.image }));
    page.prepend(makeControl('header', { title: 'MyScope', params: '?categoryIndex=' + categoryIndex }));
    pageContent.append(makeControl('old-carousel', {}));

    var carousel = pageContent.find('.m-carousel-inner').empty();
    var procedures = category.items;

    $.each(procedures, function (procedureIndex, procedure) {
        carousel.append(makeControl('procedure-card-item', {
            image: procedure.image, 
            caption: procedure.title,
            procedureId: procedure.id,
            categoryIndex: categoryIndex
        }));
    });

    if (procedures.length < 3) {
        carousel.append('<div></div>');
        carousel.append('<div></div>');
    }

    page.find('.m-carousel').carousel();
    page.append(makeControl('footer', {}));

    page.hide();
});