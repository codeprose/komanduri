(function($, hb) {
    window.makeControl = function(templateName, data) {
        var template = $('#' + templateName).html();
        var compiled = hb.compile(template);

        return compiled(data);
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