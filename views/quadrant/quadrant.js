MyScope.quadrant = function (params) {

    var procedure = MyScope.db.getProcedureById(params.id);

    return {
        procedure: procedure,
        id: params.id
    };
};