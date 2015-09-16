'use strict';

/**
 * @ngdoc overview
 * @name healthTracker
 * @description
 * # healthTracker
 *
 * Main module of the application.
 */
angular
  .module('healthTracker', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/find', {
        templateUrl: 'views/find.html',
        controller: 'FindCtrl',
        controllerAs: 'find'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/foodDetails/:ndbo', {
        templateUrl: 'views/fooddetails.html',
        controller: 'FooddetailsCtrl',
        controllerAs: 'foodDetails'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
