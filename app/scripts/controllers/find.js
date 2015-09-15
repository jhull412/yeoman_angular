'use strict';
angular.module('myAppApp')
  .controller('FindCtrl',['$scope', 'usdaNndbFactory', function ($scope, usdaNndbFactory) {
    $scope.foods = [];
    $scope.foodDetails = {};

    $scope.submit = function () {
      usdaNndbFactory.getFoodsByKeyword($scope.foodSearchTerms)
        .success(function (response) {
          $scope.foods = response.list.item;
        })
        .error(function (data, status, headers, config){
          $log.log(data.error + ' ' + status);
        });
    };

    $scope.getFoodDetails = function (nbdno) {
      console.log(nbdno);
      usdaNndbFactory.getAllFoodInfoByNdbno(nbdno)
        .success(function (response) {
          $scope.foodDetails = response.report.food;
          console.log($scope.foodDetails);

        })
        .error(function (data, status, headers, config){
          $log.log(data.error + ' ' + status);
        });
    }


  }]);
