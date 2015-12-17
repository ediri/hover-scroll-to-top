/*! 
 * angular-scroll-to-top v0.0.1
 * http://ediri.github.io/hover-scroll-to-top
 * Copyright (c) 2015 12:49:04 ediri
 * License: Apache-2.0
 */
/*
 * angular-scroll-to-top
 *
 * Angular JS ScrollToTop Button
 *
 * (c) 2015 ediri
 * License: Apache License 2.0
 */

(function () {
    'use strict';

    angular.module('scrollToTop', []).directive('scrolltotop', ['$window', function ($window) {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, element, attrs) {
                $(window).scroll(function () {
                    if ($(this).scrollTop() > 100) {
                        element.fadeIn();
                    } else {
                        element.fadeOut();
                    }
                });

                element.click(function () {
                    $('html, body').animate({scrollTop: 0}, 800);
                    return false;
                });
            }
        };
    }]);
})();