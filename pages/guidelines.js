$(document).on('pagebeforeshow', '#guidelines', function (event, data) {
    var page = $(this);

    var params = pageParams(page, data.prevPage, ['categoryIndex', 'procedureId']);

    var categoryIndex = params.categoryIndex;
    var procedureId = params.procedureId;

    var procedure = MyScope.db.getProcedureById(procedureId);

    var pageContent = page.children('.ui-content');
    page.prepend(makeControl('context-header', { title: 'Guidelines', image: 'img/ppt-button-original.png' }));
    page.prepend(makeControl('header', { title: procedure.title, params: '?categoryIndex=' + categoryIndex + '&procedureId=' + procedureId }));

    pageContent.append(makeControl('old-carousel', {}));

    var carousel = pageContent.find('.m-carousel-inner').empty();
    
    $.each(procedure.guidelines, function (guidelinesIndex, guideline) {
        carousel.append(makeControl('guidelines-card-item', {
            image: guideline.slides[0],
            caption: guideline.title,
            procedureId: procedure.id,
            categoryIndex: categoryIndex,
            guidelinesIndex: guidelinesIndex
        }));
    });

    if (procedure.guidelines.length < 3) {
        carousel.append('<div></div>');
        carousel.append('<div></div>');
    }

    page.find('.m-carousel').carousel();
    page.append(makeControl('footer', {}));

    page.hide();
});