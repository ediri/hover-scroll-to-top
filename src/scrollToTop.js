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
                element.bind('click', function () {
                    $('html, body').animate({scrollTop: 0}, 800);
                    return false;
                });
            }
        };
    }]);
})();