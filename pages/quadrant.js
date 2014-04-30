$(document).on('pagebeforeshow', '#quadrant', function (event, data) {
    var params = pageParams($(this), data.prevPage, ['categoryIndex', 'procedureId']);
    console.log(params);

    var categoryIndex = params.categoryIndex;
    var procedureId = params.procedureId;

    var category = MyScope.db.categories[categoryIndex] || { key: 'Library' };
    var procedure = MyScope.db.getProcedureById(params.procedureId);
    console.log(procedure);

    var page = $('#quadrant');
    var pageContent = page.children('.ui-content');
    page.prepend(makeControl('context-header', { title: procedure.title, image: procedure.image }));
    page.prepend(makeControl('header', { title: category.key, params: '?categoryIndex=' + categoryIndex + '&procedureId=' + procedureId }));


    page.append(makeControl('footer', {}));

    page.hide();
});