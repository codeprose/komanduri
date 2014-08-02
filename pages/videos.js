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

    $.each(procedure.videos, function (i, video) {
        $('#video-links').append(makeControl('image-link-for-gallery', { image: video.poster, title: video.title, index: i }));
    });

    page.hide();
});

$(document).on('pageshow', '#videos', function (event, data) {
    var params = pageParams($(this), data.prevPage, ['categoryIndex', 'procedureId']);
    var procedure = MyScope.db.getProcedureById(params.procedureId);

    var galleryItems = [];
    $.each(procedure.videos, function (i, video) {
        galleryItems.push({
            title: video.title,
            type: 'text/html', //type: 'video/*',
            poster: 'https://img.youtube.com/vi/zuxZ0Ar35TA/maxresdefault.jpg', //poster: video.poster,
            youtube: 'zuxZ0Ar35TA'
//            sources: [
//                { type: 'video/mp4', href: video.sources.mp4 },
//                { type: 'video/ogg', href: video.sources.ogg },
//                { type: 'video/webm', href: video.sources.webm }
//            ]
        });
    });

    document.getElementById('video-links').onclick = function (evt) {
        evt = evt || window.event;
        var target = evt.target || evt.srcElement;
        var index = $(target).data('index');
        var options = {
            index: index,
            event: evt,
            container: '#video-carousel'
        };

        blueimp.Gallery(galleryItems, options);
    };

//    blueimp.Gallery(galleryItems, {
//        container: '#video-carousel',
//        carousel: false,
//        startSlideshow: false,
//        index: 0
//    });
});