(function () {
    MyScope.videos = function (params) {
        console.log(params);
        var procedure = MyScope.db.getProcedureById(params.id);
        console.log(procedure);

        return {
            procedure: procedure,
            videos: procedure.videos,
            addImage: function (selectedImageIndex, clickEvent) {
                MyScope.db.addVideoToFavorites(clickEvent.model);
                $(clickEvent.element).hide();
            },
            title: ko.observable(procedure.title),

            viewShown: function () {
                $('#video-carousel').carousel();
            }
        };
    };
})();