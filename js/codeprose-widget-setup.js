(function ($) {
    window.codeprose = $.extend(true, window.codeprose, {
        widget: function (widgetName, widgetLocation) {

            return {
                init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                    // This will be called when the binding is first applied to an element
                    // Set up any initial state, event handlers, etc. here

                    try {
                        window.codeprose.widgetBehaviors = window.codeprose.widgetBehaviors || {};
                        window.codeprose.widgetBehaviors[widgetName] = window.codeprose.widgetBehaviors[widgetName] || { afterRender: function() {} };

                        var widgetBindings = allBindings()[widgetName];
                        var containerOptions = allBindings()['container-options'] || { 'full-height': false };

                        var bindableTemplate = $('<div />', { "data-bind": "template: { name: '" + widgetName + "', templateUrl: '" + widgetLocation + "', data: " + JSON.stringify(widgetBindings) + ", afterRender: window.codeprose.widgetBehaviors['" + widgetName + "'].afterRender }" });
                        if (containerOptions['full-height']) {
                            bindableTemplate.addClass('dx-full-height');
                        }
                        $(element).html(bindableTemplate);
                    } catch (e) {
                        var error = new Error('Widget binding exception.');
                        error.OriginalException = e;
                        console.log(error);
                    }
                },
                update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                    // This will be called once when the binding is first applied to an element,
                    // and again whenever the associated observable changes value.
                    // Update the DOM element based on the supplied values here.
                }
            };
        },

        afterWidgetRender: function(widgetName, afterRenderFunction) {
            var widgetBehaviors = window.codeprose.widgetBehaviors || {};
            var thisWidgetBehavior = widgetBehaviors[widgetName] || {};

            thisWidgetBehavior.afterRender = afterRenderFunction;

            widgetBehaviors[widgetName] = thisWidgetBehavior;
            window.codeprose.widgetBehaviors = widgetBehaviors;
        }
    });

    $(document).ready(function () {
        $('link[rel="cp-template"]').each(function (i, link) {
            var templateUri = $(link).attr('href');
            var templatePath = templateUri.split('/');
            var templateLocation = templateUri.substring(0, templateUri.lastIndexOf('/'));
            var templateName = templatePath[templatePath.length - 1].split('.')[0];

            ko.bindingHandlers[templateName] = codeprose.widget(templateName, templateLocation);
        });
    });
})(jQuery);