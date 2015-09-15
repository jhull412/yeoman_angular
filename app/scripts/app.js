'use strict';

/**
 * @ngdoc overview
 * @name myAppApp
 * @description
 * # myAppApp
 *
 * Main module of the application.
 */
angular
  .module('myAppApp', [
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
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('myAppApp')
    .directive('bsActiveLink', ['$location', function ($location) {
      return {
        restrict: 'A', //use as attribute
        replace: false,
        link: function (scope, elem) {
          //after the route has changed
          scope.$on("$routeChangeSuccess", function () {
            var hrefs = ['/#' + $location.path(),
              '#' + $location.path(), //html5: false
              $location.path()]; //html5: true
            angular.forEach(elem.find('a'), function (a) {
              a = angular.element(a);
              if (-1 !== hrefs.indexOf(a.attr('href'))) {
                a.parent().addClass('active');
              } else {
                a.parent().removeClass('active');
              };
            });
          });
        }
      }
    }]);