(function () {
    window.MyScope = window.MyScope || {};

    MyScope.db = {};
    MyScope.db.categories = [];

    MyScope.db.categories.push({ key: 'Biliary', image: 'img/procedure-icons/biliary.jpg', items: [], color: 'blue' });
    MyScope.db.categories.push({ key: 'Colon', image: 'img/procedure-icons/colon.jpg', items: [], color: 'green' });
    MyScope.db.categories.push({ key: 'Esophagus', image: 'img/procedure-icons/esophagus.png', items: [], color: 'red' });
    MyScope.db.categories.push({ key: 'Pancreas', image: 'img/procedure-icons/pancreas.jpg', items: [], color: 'purple' });
    MyScope.db.categories.push({ key: 'Small Intestine', image: 'img/procedure-icons/small_intestine.jpg', items: [], color: 'yellow' });
    MyScope.db.categories.push({ key: 'Stomach', image: 'img/procedure-icons/stomach.jpg', items: [], color: 'orange' });

    MyScope.db.getProcedureById = function (procedureId) {
        if (procedureId == 'library') {
            return library;
        }

        for (var groupIndex = 0; groupIndex < MyScope.db.categories.length; groupIndex++) {
            for (var itemIndex = 0; itemIndex < MyScope.db.categories[groupIndex].items.length; itemIndex++) {
                var item = MyScope.db.categories[groupIndex].items[itemIndex];
                if (item.id === procedureId) {
                    return item;
                }
            }
        }

        return { text: 'Unidentified Procedure', id: procedureId };
    };
})();