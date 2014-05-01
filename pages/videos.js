$(document).on('pagebeforeshow', '#videos', function(event, data) {
    var params = pageParams($(this), data.prevPage, ['categoryIndex', 'procedureId']);

    var categoryIndex = params.categoryIndex;
    var procedureId = params.procedureId;

    var procedure = MyScope.db.getProcedureById(params.procedureId);

    var page = $(this);
    var pageContent = page.children('.ui-content');
    page.prepend(makeControl('context-header', { title: 'Videos', image: 'img/play-button-original.png' }));
    page.prepend(makeControl('header', { title: procedure.title, params: '?categoryIndex=' + categoryIndex + '&procedureId=' + procedureId }));

    page.append(makeControl('footer', {}));

    page.hide();
});

$(document).on('pageshow', '#videos', function (event, data) {
    var params = pageParams($(this), data.prevPage, ['categoryIndex', 'procedureId']);
    var procedure = MyScope.db.getProcedureById(params.procedureId);

    var galleryItems = [];
    $.each(procedure.videos, function (i, video) {
        galleryItems.push({
            title: video.title,
            type: 'video/*',
            poster: video.poster,
            sources: [
                { type: 'video/mp4', href: video.sources.mp4 },
                { type: 'video/ogg', href: video.sources.ogg },
                { type: 'video/webm', href: video.sources.webm }
            ]
        });
    });

    blueimp.Gallery(galleryItems, {
        container: '#video-carousel',
        carousel: false,
        startSlideshow: false,
        index: 0
    });
});