(function () {
    EndoscopyNow.viewModel = {
        selectedCategory: ko.observable({
            name: '',
            procedures: {}
        }),
        selectedProcedure: ko.observable({
            title: '',
            videos: []
        }),
        selectedVideo: ko.observable('')
    };

    ko.applyBindings(EndoscopyNow.viewModel);
})();

$(document).on('click', 'ul.content-items > li', function (click) {
    var procedureId = $(click.currentTarget).attr('id');
    console.log('Procedure clicked: ' + procedureId);
});

$(document).on('click', '#menu > li', function(click) {
    var categoryId = $(click.currentTarget).attr('id');
    console.log('Category clicked: ' + categoryId);
});