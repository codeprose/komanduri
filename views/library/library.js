$(function () {
//    console.log('library view model initiating');

//    var library = {
//        procedures: MyScope.db.ryansLibrary[0].items,
//        photos: MyScope.db.ryansLibrary[1].items,
//        videos: MyScope.db.ryansLibrary[2].items,
//        guidelines: MyScope.db.ryansLibrary[3].items,
//        links: MyScope.db.ryansLibrary[4].items
//    };

    MyScope.library = function (params) {
        return {
//            myLibrary: MyScope.db.library(),

//            navigateToProcedure: function (itemClicked) {
//                MyScope.app.navigate('procedure/' + itemClicked.itemData.id);
//            },

//            ryans: MyScope.db.ryansLibrary,

//            library: library,

//            listSource: [
//                { key: 'My Procedures', items: [{ data: library.procedures, itemName: 'procedures' }] },
//                { key: 'Photo Gallery', items: [{ data: library.photos, itemName: 'photos' }] },
//                { key: 'Video Gallery', items: [{ data: library.videos, itemName: 'videos' }] },
//                { key: 'Guidelines/Algorithm/PPT Gallery', items: [{ data: library.guidelines, itemName: 'guidelines' }] },
//                { key: 'My Links', items: [{ data: library.links, itemName: 'links' }] }
//            ]
        };
    };
});