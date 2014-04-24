$(document).on('pagebeforecreate', '#home', function() {
    var templateSource = $('#category-menu-item').html();
    var template = Handlebars.compile(templateSource);

    var listview = $('ul[data-role="listview"]').empty();
    $.each(MyScope.db.categories, function(categoryIndex, category) {
        listview.append(template({ category: category.key, image: category.image }));
    });
});

/*
            <ul data-role="listview" data-inset="true">
                <li><a href="#category">
                    <img src="img/procedure-icons/esophagus.png" class="ui-li-thumb">
                    <h2>
                        Esophagus</h2>
                </a></li>
                <li><a href="#">
                    <img src="img/procedure-icons/stomach.jpg" class="ui-li-thumb">
                    <h2>
                        Stomach</h2>
                </a></li>
                <li><a href="#">
                    <img src="img/procedure-icons/small_intestine.jpg" class="ui-li-thumb">
                    <h2>
                        Small Intestine</h2>
                </a></li>
                <li><a href="#">
                    <img src="img/procedure-icons/colon.jpg" class="ui-li-thumb">
                    <h2>
                        Colon</h2>
                </a></li>
                <li><a href="#">
                    <img src="img/procedure-icons/biliary.jpg" class="ui-li-thumb">
                    <h2>
                        Biliary</h2>
                </a></li>
                <li><a href="#">
                    <img src="img/procedure-icons/pancreas.jpg" class="ui-li-thumb">
                    <h2>
                        Pancreas</h2>
                </a></li>
            </ul>
*/