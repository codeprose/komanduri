(function () {
    MyApp.guidelines = function (params) {
        var procedure = MyApp.db.getProcedureById(params.id);

        return {
            procedure: procedure,
            guidelines: procedure.guidelines,
            title: ko.observable(procedure.title),

            viewShown: function () {
                $('#guidelines-carousel').carousel();
            }
        };
    };
})();