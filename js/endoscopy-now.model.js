(function () {
    EndoscopyNow.viewModel = {
        selectedCategory: ko.observable(
            EndoscopyNow.categories[1]
        ),
        selectedProcedure: ko.observable(EndoscopyNow.categories[1].procedures["EET for Barrett's Esophagus"]),
        selectedVideo: ko.observable(EndoscopyNow.categories[1].procedures["EET for Barrett's Esophagus"].videos[0])
    };

    ko.applyBindings(EndoscopyNow.viewModel);
})();

$(document).on('click', 'ul.content-items > li', function (click) {
    var procedureId = $(click.currentTarget).attr('id');
    console.log('Procedure clicked: ' + procedureId);
    var categoryId = EndoscopyNow.viewModel.selectedCategory().id;

    var selectedProcedure = EndoscopyNow.categories[categoryId].procedures[procedureId];

    EndoscopyNow.viewModel.selectedProcedure(selectedProcedure);
    if (selectedProcedure.videos.length > 0) {
        EndoscopyNow.viewModel.selectedVideo(selectedProcedure.videos[0]);
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
});