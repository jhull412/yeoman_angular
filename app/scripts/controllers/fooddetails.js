'use strict';
angular.module('healthTracker')
  .controller('FooddetailsCtrl', ['$scope', 'usdanndbFactory', '$stateParams', function ($scope, usdanndbFactory, $stateParams) {
    $scope.food = {};
    $scope.foodDetails = {};
    $scope.food.nbdno = $stateParams.id;

    $scope.init = function () {
      $scope.getFoodDetails($scope.food.nbdno);
    };

    $scope.getFoodDetails = function (nbdno) {
      console.log(nbdno);
      usdanndbFactory.getAllFoodInfoByNdbno(nbdno)
        .success(function (response) {
          $scope.foodDetails = response.report.food;
          console.log($scope.foodDetails);

        })
        .error(function (data, status, headers, config) {
          $log.log(data.error + ' ' + status);
        });
    };

    $scope.init();

    console.log($stateParams.id);

  }]);
