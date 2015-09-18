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
        .then(function (allFoodInfo) {
          $scope.foodName = allFoodInfo.name;
          $scope.foodNutrients = allFoodInfo.nutrients;
          console.log('Nutrients: ', $scope.foodNutrients);
        });

    };

    $scope.init();

    console.log($stateParams.id);

  }]);
