'use strict';
angular.module('healthTracker')
    .controller('FooddetailsCtrl', ['$scope', 'usdanndbFactory', '$routeParams', function ($scope, usdanndbFactory,$routeParams) {
        $scope.foods = [];
        $scope.foodDetails = {};

        console.log($routeParams.id);

    }]);
