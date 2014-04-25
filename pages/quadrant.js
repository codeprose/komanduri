$(document).on('pagebeforeshow', '#quadrant', function (event, data) {
    var params = pageParams($(this), data.prevPage, ['categoryIndex', 'procedureId']);

    var categoryIndex = params.categoryIndex;
    var procedureId = params.procedureId;

    var category = MyScope.db.categories[categoryIndex];
    var procedure = MyScope.db.getProcedureById(params.procedureId);

    var page = $('#quadrant');
    var pageContent = page.children('.ui-content');
    page.prepend(makeControl('header', { title: procedure.title, params: '?categoryIndex=' + categoryIndex + '&procedureId=' + procedureId }));
    pageContent.prepend(makeControl('context-header', { title: procedure.title, image: procedure.image }));

    page.append(makeControl('footer', {}));

    page.hide();
});