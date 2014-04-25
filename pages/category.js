$(document).on('pagebeforeshow', '#category', function (event, data) {
    var params = $.mobile.pageData || data.prevPage.data();

    var categoryIndex = params['categoryIndex'];
    $(this).data('categoryIndex', categoryIndex);
    var category = MyScope.db.categories[categoryIndex];

    var page = $('#category');
    var pageContent = page.children('.ui-content');
    page.prepend(makeControl('header', { title: 'MyScope', params: '?categoryIndex=' + categoryIndex }));
    pageContent.prepend(makeControl('category-header', { category: category.key, image: category.image }));

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

    $('.m-carousel').carousel();

    page.append(makeControl('footer', {}));

    //page.find('.myscope-dynamic').hide();
    page.hide();
});