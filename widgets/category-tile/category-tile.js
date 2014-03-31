(function($) {
    window.codeprose.afterWidgetRender('category-tile', function (elements) {
        var $tile = $(elements);

        if ($tile.hasClass('category-tile')) {
            var tilesHeight = $('#category-tile-container').height();
            if (tilesHeight) {
                $tile.height(tilesHeight / 4);
            } else {
                $tile.css('height', '25%');
            }            
        }
    });
})(jQuery);