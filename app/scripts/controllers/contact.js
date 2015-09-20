'use strict';
/**
 * @ngdoc function
 * @name healthTracker.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the healthTracker
 */
angular.module('healthTracker')
    .controller('ContactCtrl', ['$scope', function ($scope) {
        $scope.contactLinks ={
            homePage: 'http://www.justinhull.com/',
            twitter: 'https://twitter.com/jhull412',
            linkedIn: 'http://www.linkedin.com/in/jhull412',
            googlePlus: 'https://plus.google.com/+JustinHull412',
            facebook: 'https://www.facebook.com/jhull412',
            gitHub: 'https://github.com/jhull412',
            gmail: 'hull.justin@gmail.com',
            yahoo: 'jhull412@yahoo.com',
            work: 'hulljc3@upmc.edu'
        };
    }]);