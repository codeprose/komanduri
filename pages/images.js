$(document).on('pagebeforeshow', '#images', function (event, data) {
    var params = pageParams($(this), data.prevPage, ['categoryIndex', 'procedureId']);

    var categoryIndex = params.categoryIndex;
    var procedureId = params.procedureId;

    var category = MyScope.db.categories[categoryIndex];
    var procedure = MyScope.db.getProcedureById(procedureId);

    var page = $(this);
    var pageContent = page.children('.ui-content');
    page.prepend(makeControl('header', { title: procedure.title, params: '?categoryIndex=' + categoryIndex + '&procedureId=' + procedureId }));
    pageContent.prepend(makeControl('context-header', { title: 'Images', image: 'img/images-button-original.png' }));

    page.append(makeControl('footer', {}));

    $.each(procedure.photos, function (i, image) {
        $('#image-links').append(makeControl('image-link-for-gallery', { image: image }));
    });

    page.hide();
});

$(document).on('pageshow', '#images', function (_, data) {
    var params = pageParams($(this), data.prevPage, ['categoryIndex', 'procedureId']);
    var procedure = MyScope.db.getProcedureById(params.procedureId);

    document.getElementById('image-links').onclick = function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = { index: link, event: event, container: '#image-gallery' },
        links = this.getElementsByTagName('a');
        blueimp.Gallery(links, options);
    };
});