'use strict';
/**
 * @ngdoc function
 * @name healthTracker.controller:FindCtrl
 * @description
 * # FindCtrl
 * Controller of the healthTracker
 */
angular.module('healthTracker')
    .controller('FindCtrl', ['$scope', 'usdanndbFactory', function ($scope, usdanndbFactory) {
        $scope.foods = [];
        $scope.foodDetails = {};
        $scope.tableShown = false;

        $scope.submit = function () {
            var args = $scope.foodSearchTerms.split(' ');
            var str = '';
            args.forEach(function (arg) {
                str = str + arg + '+';
            });
            str = str.substring(0, str.length - 1);
            usdanndbFactory.getFoodsByKeyword(str)
                .success(function (response) {
                    $scope.foods = response.list.item;
                    $scope.tableShown = true;
                })
                .error(function (data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        };

        $scope.ChangeLocation = function (ndbno) {
            $scope.$state.go("food-details", {"id": ndbno});
        };

        $scope.init = function () {
            var searchFoodState = usdanndbFactory.getSearchFoodState();
            if (searchFoodState.searchTerms) {
                $scope.foodSearchTerms = searchFoodState.searchTerms;
            }
            if (searchFoodState.searchResults) {
                $scope.tableShown = true;
                searchFoodState.searchResults
                    .success(function (response) {
                        $scope.foods = response.list.item;
                    })
                    .error(function (data, status, headers, config) {
                        $log.log(data.error + ' ' + status);
                    });
            }
        };
        $scope.init();
    }]);