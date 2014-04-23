MyApp.quadrant = function (params) {

    var procedure = MyApp.db.getProcedureById(params.id);

    return {
        procedure: procedure,
        id: params.id
    };
};