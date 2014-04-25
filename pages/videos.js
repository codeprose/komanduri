$(document).on('pagebeforeshow', '#videos', function(event, data) {
    var params = pageParams($(this), data.prevPage, ['categoryIndex', 'procedureId']);

    var categoryIndex = params.categoryIndex;
    var procedureId = params.procedureId;

    var category = MyScope.db.categories[categoryIndex];
    var procedure = MyScope.db.getProcedureById(params.procedureId);

    var page = $(this);
    //var pageContent = page.children('.ui-content');
    page.prepend(makeControl('header', { title: procedure.title, params: '?categoryIndex=' + categoryIndex + '&procedureId=' + procedureId }));
    //pageContent.prepend(makeControl('category-header', { category: procedure.title, image: procedure.image }));

    page.append(makeControl('footer', {}));

    //page.hide();
});

$(document).on('pageshow', '#videos', function (event, data) {
    var params = pageParams($(this), data.prevPage, ['categoryIndex', 'procedureId']);

    var categoryIndex = params.categoryIndex;
    var procedureId = params.procedureId;

    var procedure = MyScope.db.getProcedureById(procedureId);

    var galleryItems = [];
    $.each(procedure.videos, function (i, video) {
        galleryItems.push({
            title: video.title,
            type: 'video/*',
            poster: 'img/video_posters/rfa_sample.png',
            sources: [
                { type: 'video/mp4', href: video.sources.mp4 },
                { type: 'video/ogg', href: video.sources.ogg },
                { type: 'video/webm', href: video.sources.webm }
            ]
        });
    });

    blueimp.Gallery(galleryItems, {
        container: '#video-carousel',
        carousel: true
    });
});