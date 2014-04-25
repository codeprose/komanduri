$(document).on('pagebeforeshow', '#quadrant', function (event, data) {
    var params = $.mobile.pageData || data.prevPage.data();

    var categoryIndex = params['categoryIndex'];
    var procedureId = params['procedureId'];
    $(this).data('categoryIndex', categoryIndex);
    $(this).data('procedureId', procedureId);

    var category = MyScope.db.categories[categoryIndex];
    var procedure = MyScope.db.getProcedureById(procedureId);

    var page = $('#quadrant');
    var pageContent = page.children('.ui-content');
    page.prepend(makeControl('header', { title: procedure.title, params: '?categoryIndex=' + categoryIndex + '&procedureId=' + procedureId }));
    pageContent.prepend(makeControl('category-header', { category: procedure.title, image: procedure.image }));

    page.append(makeControl('footer', {}));
});