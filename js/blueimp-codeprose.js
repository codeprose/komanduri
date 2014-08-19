blueimp.Gallery.prototype.textFactory = function (obj, callback) {
    /*
    
+        <div class="video-container">
+            <iframe width="560" height="315" src="//www.youtube.com/embed/S0Yu1nvmRMM?rel=0"
+                frameborder="0" allowfullscreen></iframe>
+        </div>
    
    */

    var $iframe = $('<iframe style="height: 100%" width="100%" frameborder="0" allowfullscreen>');
    $iframe.attr('src', 'http://www.youtube.com/embed/' + 'zuxZ0Ar35TA' + '?rel=0');

    var $container = $('<div style="width: 100%; height: 100%">');
    $container.append($iframe);

    this.setTimeout(callback, [{
        type: 'load',
        target: $container[0]
    }]);

    return $container[0];

//    var $test = $('<div>');
//    $test.html('<span>THIS IS A TEST</span>');

//    this.setTimeout(callback, [{
//        type: 'load',
//        target: $test.get(0)
//    }]);

//    return $test.get(0);
};