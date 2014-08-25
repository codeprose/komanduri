blueimp.Gallery.prototype.textFactory = function (obj, callback) {
    var $iframe = $('<iframe style="height: 100%" width="100%" frameborder="0" allowfullscreen>');
    $iframe.attr('src', 'http://www.youtube.com/embed/' + 'zuxZ0Ar35TA' + '?rel=0');

    var $container = $('<div>');
    $container.append($iframe);

    this.setTimeout(callback, [{
        type: 'load',
        target: $container[0]
    }]);

    return $container[0];
};