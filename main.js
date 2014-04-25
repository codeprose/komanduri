(function($, hb) {
    window.makeControl = function(templateName, data) {
        var template = $('#' + templateName).html();
        var compiled = hb.compile(template);

        return compiled(data);
    };

    window.pageParams = function($page, $prevPage, parameterNames) {
        var data = $.mobile.pageData || $prevPage.data();

        var parameters = {};
        for (var pIndex = 0; pIndex < parameterNames.length; pIndex++) {
            var name = parameterNames[pIndex];
            parameters[name] = data[name];
            $page.data(name, data[name]);
        }

        return parameters;
    };
})(jQuery, Handlebars);

$(document).on('pageshow', '.myscope-dynamic-page', function (pageShowEvent, pageShowData) {
    $(this).wrap('<div id="temporary-page-wrapper">');
    $('#temporary-page-wrapper').page();
    $(this).unwrap();

    $(this).show();
});

$(document).on('pagehide', '.myscope-dynamic-page', function (pageHideEvent, pageHideData) {
    $(this).find('.myscope-dynamic').remove();
});