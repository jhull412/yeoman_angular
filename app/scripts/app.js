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
        'ngAnimate', 'ngCookies', 'ngResource', 'ngRoute',
        'ngSanitize', 'ngTouch', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');
        $stateProvider
            .state('/', {
                url: '/main',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            }).state('food', {
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
            }).state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            });
    })
    .run(function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });