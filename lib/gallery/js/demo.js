/*
 * blueimp Gallery Demo JS 2.11.0
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global window, blueimp, $ */

$(function () {
    'use strict';

    // Load demo images from flickr:
    $.ajax({
        url: (window.location.protocol === 'https:' ?
                'https://secure' : 'http://api') +
                '.flickr.com/services/rest/',
        data: {
            format: 'json',
            method: 'flickr.interestingness.getList',
            api_key: '7617adae70159d09ba78cfec73c13be3' // jshint ignore:line
        },
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (result) {
        var carouselLinks = [],
            linksContainer = $('#links'),
            baseUrl;
        // Add the demo images as links with thumbnails to the page:
        $.each(result.photos.photo, function (index, photo) {
            baseUrl = 'http://farm' + photo.farm + '.static.flickr.com/' +
                photo.server + '/' + photo.id + '_' + photo.secret;
            $('<a/>')
                .append($('<img>').prop('src', baseUrl + '_s.jpg'))
                .prop('href', baseUrl + '_b.jpg')
                .prop('title', photo.title)
                .attr('data-gallery', '')
                .appendTo(linksContainer);
            carouselLinks.push({
                href: baseUrl + '_c.jpg',
                title: photo.title
            });
        });
        // Initialize the Gallery as image carousel:
        blueimp.Gallery(carouselLinks, {
            container: '#blueimp-image-carousel',
            carousel: true
        });
    });

    // Initialize the Gallery as video carousel:
    blueimp.Gallery([
                {
                    title: 'Some RFA Video',
                    type: 'video/*',
                    poster: 'img/video_posters/rfa_sample.png',
                    sources: [
                        {
                            href: 'https://dl.dropboxusercontent.com/sh/9brvca2lr1eq83g/qRlTVAIn83/esophagus/rfa-for-barretts/videos/mp4/Barrett%27s%20Esophagus%20360%20RFA%202.mp4.mp4',
                            type: 'video/mp4'
                        },
                        {
                            href: 'https://dl.dropboxusercontent.com/sh/9brvca2lr1eq83g/97ngChRTio/esophagus/rfa-for-barretts/videos/ogg/Barrett%27s%20Esophagus%20360%20RFA%202.oggtheora.ogv',
                            type: 'video/ogg'
                        },
                        {
                            href: 'https://dl.dropboxusercontent.com/sh/9brvca2lr1eq83g/RLOUMoty8x/esophagus/rfa-for-barretts/videos/webm/Barrett%27s%20Esophagus%20360%20RFA%202.webmsd.webm',
                            type: 'video/webm'
                        }
                    ]
                },
                {
                    title: 'Some Other RFA Video',
                    type: 'video/*',
                    poster: 'img/video_posters/rfa_sample.png',
                    sources: [
                        {
                            href: 'https://dl.dropboxusercontent.com/sh/9brvca2lr1eq83g/qRlTVAIn83/esophagus/rfa-for-barretts/videos/mp4/Barrett%27s%20Esophagus%20360%20RFA%202.mp4.mp4',
                            type: 'video/mp4'
                        },
                        {
                            href: 'https://dl.dropboxusercontent.com/sh/9brvca2lr1eq83g/97ngChRTio/esophagus/rfa-for-barretts/videos/ogg/Barrett%27s%20Esophagus%20360%20RFA%202.oggtheora.ogv',
                            type: 'video/ogg'
                        },
                        {
                            href: 'https://dl.dropboxusercontent.com/sh/9brvca2lr1eq83g/RLOUMoty8x/esophagus/rfa-for-barretts/videos/webm/Barrett%27s%20Esophagus%20360%20RFA%202.webmsd.webm',
                            type: 'video/webm'
                        }
                    ]
                },
                {
                    title: 'Yet Some Other RFA Video',
                    type: 'video/*',
                    poster: 'img/video_posters/rfa_sample.png',
                    sources: [
                        {
                            href: 'https://dl.dropboxusercontent.com/sh/9brvca2lr1eq83g/qRlTVAIn83/esophagus/rfa-for-barretts/videos/mp4/Barrett%27s%20Esophagus%20360%20RFA%202.mp4.mp4',
                            type: 'video/mp4'
                        },
                        {
                            href: 'https://dl.dropboxusercontent.com/sh/9brvca2lr1eq83g/97ngChRTio/esophagus/rfa-for-barretts/videos/ogg/Barrett%27s%20Esophagus%20360%20RFA%202.oggtheora.ogv',
                            type: 'video/ogg'
                        },
                        {
                            href: 'https://dl.dropboxusercontent.com/sh/9brvca2lr1eq83g/RLOUMoty8x/esophagus/rfa-for-barretts/videos/webm/Barrett%27s%20Esophagus%20360%20RFA%202.webmsd.webm',
                            type: 'video/webm'
                        }
                    ]
                }
            ], {
        container: '#blueimp-video-carousel',
        carousel: true
    });

});
