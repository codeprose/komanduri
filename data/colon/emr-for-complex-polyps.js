(function() {
    MyScope.db.categories[1].items.push({
        title: 'EMR for Complex Polyps',
        id: 'polyps',
        image: 'img/procedures/emr-for-complex-polyps.jpg',
        links: [
            { url: 'http://www.sciencedirect.com/science/article/pii/S1542356513014547' },
            { url: 'http://www.sciencedirect.com/science/article/pii/S0016510713001909' },
            { url: 'http://www.sciencedirect.com/science/article/pii/S001651071200226X' }
        ],
        photos: [
            { title: '3cm Paris IIa Polyp',                     url: 'https://dl.dropboxusercontent.com/s/g2kq4zu1vegsyw6/polyp%20jan%2014.JPEG' },
            { title: 'Polyp Retroflexion',                      url: 'https://dl.dropboxusercontent.com/s/6pt6sby23mj1vmg/colon%20emr%202.JPEG' },
            { title: 'Paris IIa Polyp Submucosal Injection',    url: 'https://dl.dropboxusercontent.com/s/pg5c952qmt8secc/colon%20emr%201.JPEG' },
            { title: 'Post EMR Site',                           url: 'https://dl.dropboxusercontent.com/s/mp92uphzhg1a4wv/colon%20emr%20defect.JPEG' },
            { title: 'Post EMR Site',                           url: 'https://dl.dropboxusercontent.com/s/q9f8zbo98obysyv/post%20emr%20jan%202014.JPEG'},
            { title: 'Post EMR Closure with Endoclips',         url: 'https://dl.dropboxusercontent.com/s/xiktzmlefe5h7ht/colon%20emr%20closure%20cook%20clips.JPEG' },
            { title: 'RFA Post Colon EMR',                      url: 'https://dl.dropboxusercontent.com/s/psbyqqp44851qcq/channel%20colon%2023.JPEG' },
            { title: 'RFA Post Colon EMR',                      url: 'https://dl.dropboxusercontent.com/s/iitbw7odqebvpgb/channel%20colon%20final.JPEG' },
            { title: 'RFA Post Colon EMR',                      url: 'https://dl.dropboxusercontent.com/s/piyghnm22iwd0c1/channel%20colon.JPEG' }
        ],
        videos: [
            {
                title: 'Colon EMR Paris IIa',
                poster: 'img/video_posters/colon/emr-for-complex-polyps/colon-emr-clip-closure.jpg',
                sources:
                {
                    mp4: 'https://dl.dropboxusercontent.com/s/qjqumwbqiwnpdla/Colon%20EMR%20Clip%20Closure%203.mp4.mp4',
                    ogg: 'https://dl.dropboxusercontent.com/s/egufmv9hmzuys9d/Colon%20EMR%20Clip%20Closure%203.oggtheora.ogv',
                    webm: 'https://dl.dropboxusercontent.com/s/u76cxtlfw9n67wu/Colon%20EMR%20Clip%20Closure%203.webmsd.webm'
                },
                fallback: ''
            },
            {
                title: 'Colon EMR Retroflexion',
                poster: 'img/video_posters/colon/emr-for-complex-polyps/colon-retro-emr.jpg',
                sources:
                {
                    mp4: 'https://dl.dropboxusercontent.com/s/62o09crzvg7oc1k/Colon%20Retro%20EMR.mp4.mp4',
                    ogg: 'https://dl.dropboxusercontent.com/s/9ybv6gzh4bbmu6d/Colon%20Retro%20EMR.oggtheora.ogv',
                    webm: 'https://dl.dropboxusercontent.com/s/t3v22fepsq0h1x6/Colon%20Retro%20EMR.webmsd.webm'
                },
                fallback: ''
            }/*,
            {
                title: 'Flat Cecal Polyp EMR',
                poster: 'img/video_posters/colon/emr-for-complex-polyps/flat-cecal-polyp-emr.jpg',
                sources:
                {
                    mp4: 'https://dl.dropboxusercontent.com/s/asa4ivhv1lpry93/Flat%20Cecal%20Polyp%20EMR%202.mp4.mp4',
                    ogg: 'https://dl.dropboxusercontent.com/s/qfue2ed6igs67wx/Flat%20Cecal%20Polyp%20EMR%202.oggtheora.ogv',
                    webm: 'https://dl.dropboxusercontent.com/s/6xqrcx9t3qy81cs/Flat%20Cecal%20Polyp%20EMR%202.webmsd.webm'
                },
                fallback: ''
            }*/                                
        ],
        guidelines: [
        {
            title: 'Polypectomy and EMR: From the Diminutive to the "Difficult" Polyp',
            slides: [
                'https://dl.dropboxusercontent.com/s/n9549wh79bnojz2/ASGE%20Colon%20EMR%20Talk_Page_01.png',
                'https://dl.dropboxusercontent.com/s/elg8naciezmmngu/ASGE%20Colon%20EMR%20Talk_Page_02.png',
                'https://dl.dropboxusercontent.com/s/skyp2hxrxh4ofmb/ASGE%20Colon%20EMR%20Talk_Page_03.png',
                'https://dl.dropboxusercontent.com/s/s2ldj59rk80npuu/ASGE%20Colon%20EMR%20Talk_Page_04.png',
                'https://dl.dropboxusercontent.com/s/5g7lhrhvrjm1r5z/ASGE%20Colon%20EMR%20Talk_Page_05.png',
                'https://dl.dropboxusercontent.com/s/el77sbpflms3her/ASGE%20Colon%20EMR%20Talk_Page_06.png',
                'https://dl.dropboxusercontent.com/s/jsfoq4hm2812lca/ASGE%20Colon%20EMR%20Talk_Page_07.png',
                'https://dl.dropboxusercontent.com/s/bbrr8686imdi44c/ASGE%20Colon%20EMR%20Talk_Page_08.png',
                'https://dl.dropboxusercontent.com/s/ttk8n16d022a9es/ASGE%20Colon%20EMR%20Talk_Page_09.png',
                'https://dl.dropboxusercontent.com/s/d3iiyl68w4jc8zs/ASGE%20Colon%20EMR%20Talk_Page_10.png',
                'https://dl.dropboxusercontent.com/s/qnyr4fv5hxvyham/ASGE%20Colon%20EMR%20Talk_Page_11.png',
                'https://dl.dropboxusercontent.com/s/nr5xhflql9iiysj/ASGE%20Colon%20EMR%20Talk_Page_12.png',
                'https://dl.dropboxusercontent.com/s/f7lw1rcb3s3xiik/ASGE%20Colon%20EMR%20Talk_Page_13.png',
                'https://dl.dropboxusercontent.com/s/iusqb0361mekoju/ASGE%20Colon%20EMR%20Talk_Page_14.png',
                'https://dl.dropboxusercontent.com/s/obgh3v7kvdviz8l/ASGE%20Colon%20EMR%20Talk_Page_15.png',
                'https://dl.dropboxusercontent.com/s/q9voerzxokc2pif/ASGE%20Colon%20EMR%20Talk_Page_16.png',
                'https://dl.dropboxusercontent.com/s/fb8rjzk6tpdgk0q/ASGE%20Colon%20EMR%20Talk_Page_17.png',
                'https://dl.dropboxusercontent.com/s/6vwv129ilpb7vls/ASGE%20Colon%20EMR%20Talk_Page_18.png',
                'https://dl.dropboxusercontent.com/s/bku6r1lv3rnqxg3/ASGE%20Colon%20EMR%20Talk_Page_19.png',
                'https://dl.dropboxusercontent.com/s/8xmdhwx0oo0o6cd/ASGE%20Colon%20EMR%20Talk_Page_20.png',
                'https://dl.dropboxusercontent.com/s/a21wzdlywha422o/ASGE%20Colon%20EMR%20Talk_Page_21.png',
                'https://dl.dropboxusercontent.com/s/ivpvh0e7ip60fno/ASGE%20Colon%20EMR%20Talk_Page_22.png',
                'https://dl.dropboxusercontent.com/s/jzlyx1usoz0sym0/ASGE%20Colon%20EMR%20Talk_Page_23.png',
                'https://dl.dropboxusercontent.com/s/4y50tb43pfzezey/ASGE%20Colon%20EMR%20Talk_Page_24.png',
                'https://dl.dropboxusercontent.com/s/ylppxqd1ax0avwh/ASGE%20Colon%20EMR%20Talk_Page_25.png',
                'https://dl.dropboxusercontent.com/s/f0xf9li1fqumgwr/ASGE%20Colon%20EMR%20Talk_Page_26.png',
                'https://dl.dropboxusercontent.com/s/r35289f66a89pxc/ASGE%20Colon%20EMR%20Talk_Page_27.png',
                'https://dl.dropboxusercontent.com/s/z3cw2tft4prtnpe/ASGE%20Colon%20EMR%20Talk_Page_28.png',
                'https://dl.dropboxusercontent.com/s/ahlt36qb91g5my0/ASGE%20Colon%20EMR%20Talk_Page_29.png',
                'https://dl.dropboxusercontent.com/s/mpxkcndm8xxyyqh/ASGE%20Colon%20EMR%20Talk_Page_30.png',
                'https://dl.dropboxusercontent.com/s/lu0m8dhxlh0xj06/ASGE%20Colon%20EMR%20Talk_Page_31.png',
                'https://dl.dropboxusercontent.com/s/kpku4mq59k7l4m7/ASGE%20Colon%20EMR%20Talk_Page_32.png',
                'https://dl.dropboxusercontent.com/s/b09izggsw3qk51o/ASGE%20Colon%20EMR%20Talk_Page_33.png',
                'https://dl.dropboxusercontent.com/s/bom7kh98ty8tskc/ASGE%20Colon%20EMR%20Talk_Page_34.png',
                'https://dl.dropboxusercontent.com/s/63bi0k0b4c7zo2x/ASGE%20Colon%20EMR%20Talk_Page_35.png',
                'https://dl.dropboxusercontent.com/s/63zr1wx8g3k73kx/ASGE%20Colon%20EMR%20Talk_Page_36.png',
                'https://dl.dropboxusercontent.com/s/7hekkw49srzia19/ASGE%20Colon%20EMR%20Talk_Page_37.png',
                'https://dl.dropboxusercontent.com/s/o50lmanlaujwmvk/ASGE%20Colon%20EMR%20Talk_Page_38.png',
                'https://dl.dropboxusercontent.com/s/zhd52kgqi5zjap6/ASGE%20Colon%20EMR%20Talk_Page_39.png',
                'https://dl.dropboxusercontent.com/s/oiyuuumn7ofz5cy/ASGE%20Colon%20EMR%20Talk_Page_40.png',
                'https://dl.dropboxusercontent.com/s/hmdv8vn22d84mp2/ASGE%20Colon%20EMR%20Talk_Page_41.png',
                'https://dl.dropboxusercontent.com/s/kcc3xvx1ylvt7h6/ASGE%20Colon%20EMR%20Talk_Page_42.png',
                'https://dl.dropboxusercontent.com/s/l93fsw6wh58djeo/ASGE%20Colon%20EMR%20Talk_Page_43.png',
                'https://dl.dropboxusercontent.com/s/vx0hsb7bgf8q0mh/ASGE%20Colon%20EMR%20Talk_Page_44.png',
                'https://dl.dropboxusercontent.com/s/bzi3r1dso36ioh5/ASGE%20Colon%20EMR%20Talk_Page_45.png',
                'https://dl.dropboxusercontent.com/s/lodl45wkaf693ul/ASGE%20Colon%20EMR%20Talk_Page_46.png',
                'https://dl.dropboxusercontent.com/s/cpy8rd45mbjtdaa/ASGE%20Colon%20EMR%20Talk_Page_47.png',
                'https://dl.dropboxusercontent.com/s/mp9u61o1rczlj93/ASGE%20Colon%20EMR%20Talk_Page_48.png'
            ]
        }
    ]
    });
})();