$(function () {
    MyApp.home = function (params) {
        var viewModel = {

            onGroupItemClicked: function (evt) {
                $('#home-nav-list').find('.dx-list-item').hide();

                var group = $(evt.element);
                group.parents('.dx-list-group').children('.dx-list-item').show();
            },

            viewShown: function (args) {
                // This won't respond to the rotation event
                var tilesHeight = $('#category-tile-container').height();
                if (tilesHeight) {
                    $('.category-tile').height(tilesHeight / 4);
                } else {
                    $('.category-tile').css('height', '25%');
                }

                // This shouldn't be necessary, but I think something
                // crazy is going on. Removing this will cause the library 
                // list to act wonky
                if (args.viewInfo.viewName === 'home') {
                    $('#home-nav-list').find('.dx-list-item').hide();
                }
            }
        };

        return viewModel;
    };
});
