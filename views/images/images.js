(function () {
    MyScope.images = function (params) {
        var procedure = MyScope.db.getProcedureById(params.id);

        return {
            procedure: procedure,
            images: procedure.photos,
            title: ko.observable(procedure.title),

            viewShown: function () {
                $('#image-carousel').carousel();
            }
        };
    };
})();