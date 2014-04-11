(function () {
    MyApp.videos = function (params) {
        var procedure = MyApp.db.getProcedureById(params.id);

        return {
            procedure: procedure,
            videos: procedure.videos,
            addImage: function (selectedImageIndex, clickEvent) {
                MyApp.db.addVideoToFavorites(clickEvent.model);
                $(clickEvent.element).hide();
            },
            title: ko.observable(procedure.title)            
        };
    };
})();