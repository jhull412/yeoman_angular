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
        'ngTouch',
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');

        $stateProvider
            .state('/', {
                url: '/main',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('food', {
                url: '/food',
                templateUrl: 'views/food.html',
                controller: 'FindCtrl'
            }).state('food-details', {
                url: '/details/:id',
                templateUrl: 'views/food-details.html',
                controller: 'FooddetailsCtrl'
            }).state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            });

        //$routeProvider
        //  .when('/', {
        //    templateUrl: 'views/main.html',
        //    controller: 'MainCtrl',
        //    controllerAs: 'main'
        //  })
        //  .when('/find', {
        //    templateUrl: 'views/find.html',
        //    controller: 'FindCtrl',
        //    controllerAs: 'find'
        //  })
        //  .when('/about', {
        //    templateUrl: 'views/about.html',
        //    controller: 'AboutCtrl',
        //    controllerAs: 'about'
        //  })
        //  .when('/foodDetails/:ndbo', {
        //    templateUrl: 'views/fooddetails.html',
        //    controller: 'FooddetailsCtrl',
        //    controllerAs: 'foodDetails'
        //  })
        //  .otherwise({
        //    redirectTo: '/'
        //  });
    })
    .run(function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });
