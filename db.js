/// <reference path="../js/jquery-1.10.2.min.js"; />
/// <reference path="../js/knockout-3.2.0.js"; />

(function () {
    var favorites = [
        { key: 'procedures', items: ko.observableArray([]) },
        { key: 'photos', items: ko.observableArray([]) },
        { key: 'videos', items: ko.observableArray([]) },
        { key: 'guidelines', items: ko.observableArray([]) },
        { key: 'links', items: ko.observableArray([]) }
    ];

    var demoCategories = [
        { key: 'Esophagus', image: 'esophagus.png', items: [
            
        ]
        },
        { key: 'Stomach', image: 'stomach.jpg', items: [] },
        { key: 'Small Intestine', image: 'small_intestine.jpg', items: [] },
        { key: 'Colon', image: 'colon.jpg', items: [

        ]
        },
        { key: 'Biliary', image: 'biliary.jpg', items: [
            
        ]
        },
        { key: 'Pancreas', image: 'pancreas.jpg', items: []
        },
        { key: 'Miscellaneous', items: [] }
    ];

    var getProcedureById = function (procedureId) {
        if (procedureId == 'library') {
            return library;
        }

        for (var groupIndex = 0; groupIndex < MyScope.db.demoCategories.length; groupIndex++) {
            for (var itemIndex = 0; itemIndex < MyScope.db.demoCategories[groupIndex].items.length; itemIndex++) {
                var item = MyScope.db.demoCategories[groupIndex].items[itemIndex];
                if (item.id === procedureId) {
                    return item;
                }
            }
        }

        return { text: 'Unidentified Procedure', id: procedureId };
    };

    window.MyScope.db = {
        demoCategories: demoCategories,
        getProcedureById: getProcedureById
    };
})();