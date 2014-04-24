(function($, hb) {
    window.makeControl = function(templateName, data) {
        var template = $('#' + templateName).html();
        var compiled = hb.compile(template);

        return compiled(data);
    };
})(jQuery, Handlebars);