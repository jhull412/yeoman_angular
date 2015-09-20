'use strict';
/**
 * @ngdoc function
 * @name healthTracker.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the healthTracker
 */
angular.module('healthTracker')
    .controller('HeaderCtrl', function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });