(function ($) {
    window.codeprose.afterWidgetRender('quadrant-tile', function (elements) {
        var $tile = $(elements);

        if ($tile.hasClass('quadrant-tile')) {
            var tilesHeight = $('#quadrant-tile-container').height();
            if (tilesHeight) {
                $tile.height(tilesHeight / 2);
            } else {
                $tile.css('height', '50%');
            }
        }
    });
})(jQuery);