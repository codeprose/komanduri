(function () {
    EndoscopyNow.viewModel = {
        selectedCategory: ko.observable(
            EndoscopyNow.categories[1]
        ),
        selectedProcedure: ko.observable(EndoscopyNow.categories[1].procedures["Endoscopic Therapy for Barrett's Esophagus"]),
        selectedVideo: ko.observable(EndoscopyNow.categories[1].procedures["Endoscopic Therapy for Barrett's Esophagus"].videos[0])
    };

    ko.applyBindings(EndoscopyNow.viewModel);

    EndoscopyNow.viewModel.selectedProcedure.subscribe(function (newValue) {
        var recalc = function($scrollingList) {
            var elements_totals = $scrollingList.find('li');

            var width_content = app.remove_caracters($('body').css('width'), 'px') / 3;
            $.each(elements_totals, function (key, value) {
                $(value).css({ 'width': width_content });
            });

            $scrollingList.css('width', width_content * elements_totals.length);
        };

        recalc($('.thumbnails-videos > ul'));
        recalc($('.thumbnails-guidelines > ul'));
    });
})();

$(document).on('click', 'ul.content-items > li', function (click) {
    var procedureId = $(click.currentTarget).attr('id');
    console.log('Procedure clicked: ' + procedureId);
    var categoryId = EndoscopyNow.viewModel.selectedCategory().id;

    var selectedProcedure = EndoscopyNow.categories[categoryId].procedures[procedureId];

    EndoscopyNow.viewModel.selectedProcedure(selectedProcedure);
    if (selectedProcedure.videos.length > 0) {
        EndoscopyNow.viewModel.selectedVideo(selectedProcedure.videos[0]);

        $('#video-container').empty().html($('#video-binder').html());
    } else {
        EndoscopyNow.viewModel.selectedVideo('');
    }
});

$(document).on('click', '#menu > li', function(click) {
    var categoryId = $(click.currentTarget).attr('id');
    console.log('Category clicked: ' + categoryId);
    EndoscopyNow.viewModel.selectedCategory(EndoscopyNow.categories[categoryId]);
});

$(document).on('click', 'button.icon-play', function(click) {
    var videoId = $(click.currentTarget).attr('id');
    console.log('Video selected: ' + videoId);
    EndoscopyNow.viewModel.selectedVideo(videoId);

    $('#video-container').empty().html($('#video-binder').html());
});

$(document).on('click', 'a.open-pdf-link', function(click) {
    var url = $(click.currentTarget).attr('data-url');
    window.open(url + '?dl=0', '_blank', 'location=no,closebuttoncaption=Done,enableviewportscale=yes');
});

