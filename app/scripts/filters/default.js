'use strict';
/**
 * @ngdoc filter
 * @name healthTracker.filter:default
 * @function
 * @description
 * # default
 * Filter in the healthTracker.
 */
angular.module('healthTracker')
    .filter('default', [function () {
        return function (value, def) {
            return value || def;
        };
    }]);