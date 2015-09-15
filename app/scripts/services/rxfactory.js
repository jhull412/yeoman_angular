'use strict';

/**
 * @ngdoc service
 * @name myAppApp.rxFactory
 * @description
 * # rxFactory
 * Factory in the myAppApp.
 */
angular.module('myAppApp')
  .factory('rxFactory', function ($http) {
    // Service logic
    // ...

    // Public API here
    return {
      getMedications: function () {
        return $http.get('https://rxnav.nlm.nih.gov/REST/drugs?name=cymbalta');
      }
    };
  });
