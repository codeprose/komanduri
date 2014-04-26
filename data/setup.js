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

    var library = {
        title: "Library",
        id: 'library',
        image: 'img/procedure-icons/library.png',
        links: [
            { url: 'http://www.sciencedirect.com/science/article/pii/S0016510713026266' },
            { url: 'http://www.sciencedirect.com/science/article/pii/S0016508513015965' },
            { url: 'http://www.sciencedirect.com/science/article/pii/S0016510713021408' }
        ],
        photos: [
            'https://dl.dropboxusercontent.com/s/n5ov61a6qqo57ch/CRIM-NBI.JPEG',
            'https://dl.dropboxusercontent.com/s/2m7us04q9mp3pjh/CRIM.JPEG',
            'https://dl.dropboxusercontent.com/s/3wtfndv9bdpewpq/GAVE-p-RFA-1.JPEG',
            'https://dl.dropboxusercontent.com/s/rk55ta40zcw4caw/GAVE-post-1.JPEG'
        ],
        videos: [
            {
                title: 'Video 1',
                sources:
                {
                    mp4: 'https://dl.dropboxusercontent.com/s/8l4dt8p8na4v3vv/AVM%20RFA%202.mp4.mp4',
                    ogg: 'https://dl.dropboxusercontent.com/s/nrqenn9rv509aj0/AVM%20RFA%202.oggtheora.ogv',
                    webm: 'https://dl.dropboxusercontent.com/s/ng8pryy5sxly39r/AVM%20RFA%202.webmsd.webm'
                },
                fallback: ''
            },
            {
                title: 'Video 2',
                sources:
                {
                    mp4: 'https://dl.dropboxusercontent.com/s/kdl6703law2ew3a/Barrett%27s%20Esophagus%20360%20RFA%202.mp4.mp4',
                    ogg: 'https://dl.dropboxusercontent.com/s/w13rkjwh89459z5/Barrett%27s%20Esophagus%20360%20RFA%202.oggtheora.ogv',
                    webm: 'https://dl.dropboxusercontent.com/s/63z945am29eirxa/Barrett%27s%20Esophagus%20360%20RFA%202.webmsd.webm'
                },
                fallback: ''
            },
            {
                title: 'Video 3',
                sources:
                {
                    mp4: 'https://dl.dropboxusercontent.com/s/ber9rdikf5ou6xj/Duette%20EMR%20Bleed%203.mp4.mp4',
                    ogg: 'https://dl.dropboxusercontent.com/s/bjn3l0mpvfg7n9d/Duette%20EMR%20Bleed%203.oggtheora.ogv',
                    webm: 'https://dl.dropboxusercontent.com/s/c1mc4qr4n1ugj6t/Duette%20EMR%20Bleed%203.webmsd.webm'
                },
                fallback: ''
            }
        ],
        guidelines: [
            {
                title: "Endoscopic Eradication Therapy for Barrett's Related Neoplasia",
                slides: [
                    'https://dl.dropboxusercontent.com/s/izc27bedy0o7aw0/Slide01.jpg',
                    'https://dl.dropboxusercontent.com/s/f3zjl2fa77yeu07/Slide02.jpg',
                    'https://dl.dropboxusercontent.com/s/ew43aqxq41ane20/Slide03.jpg',
                    'https://dl.dropboxusercontent.com/s/bb4rzoy41ziiqx9/Slide04.jpg'
                ]
            }
        ]
    }

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