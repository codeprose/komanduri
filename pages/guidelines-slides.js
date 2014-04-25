$(document).on('pagebeforeshow', '#guidelines-slides', function (event, data) {
    var page = $(this);
    var params = pageParams(page, data.prevPage, ['categoryIndex', 'procedureId', 'guidelinesIndex']);

    var categoryIndex = params.categoryIndex;
    var procedureId = params.procedureId;
    var guidelinesIndex = params.guidelinesIndex;

    var category = MyScope.db.categories[categoryIndex];
    var procedure = MyScope.db.getProcedureById(params.procedureId);
    var guidelines = procedure.guidelines[guidelinesIndex];

    var pageContent = page.children('.ui-content');
    page.prepend(makeControl('header', { title: 'Guidelines', params: '?categoryIndex=' + categoryIndex + '&procedureId=' + procedureId + '&guidelinesIndex=' + guidelinesIndex }));
    pageContent.prepend(makeControl('context-header', { title: guidelines.title, image: 'img/ppt-button-original.png' }));

    page.append(makeControl('footer', {}));

    page.hide();
});

$(document).on('pageshow', '#guidelines-slides', function (event, data) {
    var params = pageParams($(this), data.prevPage, ['categoryIndex', 'procedureId', 'guidelinesIndex']);
    var guidelines = MyScope.db.getProcedureById(params.procedureId).guidelines[params.guidelinesIndex];

    var galleryItems = [];
    $.each(guidelines.slides, function (i, slide) {
        galleryItems.push(slide);
    });

    blueimp.Gallery(galleryItems, {
        container: '#slide-carousel',
        carousel: true,
        startSlideshow: false,
        stretchImages: true
    });
});