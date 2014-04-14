(function () {
    MyApp.videos = function (params) {
        console.log(params);
        var procedure = MyApp.db.getProcedureById(params.id);
        console.log(procedure);

        return {
            procedure: procedure,
            videos: procedure.videos,
            addImage: function (selectedImageIndex, clickEvent) {
                MyApp.db.addVideoToFavorites(clickEvent.model);
                $(clickEvent.element).hide();
            },
            title: ko.observable(procedure.title),

            viewShown: function () {
                $('#video-carousel').carousel();
            }
        };
    };
})();