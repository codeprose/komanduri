$(document).on('pagebeforeshow', '#images', function (event, data) {
    var params = pageParams($(this), data.prevPage, ['categoryIndex', 'procedureId']);

    var categoryIndex = params.categoryIndex;
    var procedureId = params.procedureId;

    var category = MyScope.db.categories[categoryIndex];
    var procedure = MyScope.db.getProcedureById(procedureId);

    var page = $(this);
    var pageContent = page.children('.ui-content');
    page.prepend(makeControl('context-header', { title: 'Images', image: 'img/images-button-original.png' }));
    page.prepend(makeControl('header', { title: procedure.title, params: '?categoryIndex=' + categoryIndex + '&procedureId=' + procedureId }));

    page.append(makeControl('footer', {}));

    $.each(procedure.photos, function (i, image) {
        $('#image-links').append(makeControl('image-link-for-gallery', { image: image.url, title: image.title }));
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
        options = {
            index: link, event: event, 
            container: '#image-gallery',
            onslide: function (index, slide) {
//                console.log(index);
//                console.log(slide);

//                console.log(this.list);
//                var $likeButton = $(this.container.find('.myscope-like-dislike'));
//                $likeButton.on('click', function() {
//                    //MyScope.db.library.photos.push(procedure.photos[index]);
//                    var $this = $(this);
//                    $this.toggleClass('flaticon-like3');
//                    $this.toggleClass('flaticon-dislike');
//                });
            }
        },
        links = this.getElementsByTagName('a');
        blueimp.Gallery(links, options);
    };
});