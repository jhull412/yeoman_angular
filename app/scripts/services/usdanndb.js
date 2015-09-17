(function () {
  var usdanndbFactory = function ($http) {

    var factory = {};

    factory.getFoodsByKeyword = function (args) {
      return $http.get('http://api.nal.usda.gov/ndb/search/?format=json&q=' + args + '&sort=n&max=25&offset=0&api_key=8LYPxewvViu0gC0tKN5PQtMFWqLMdMb9wVKeUTBZ');
    };

    factory.getAllFoodInfoByNdbno = function (ndbno) {
      return $http.get('http://api.nal.usda.gov/ndb/reports/?ndbno=' + ndbno + '&type=f&format=json&api_key=8LYPxewvViu0gC0tKN5PQtMFWqLMdMb9wVKeUTBZ')
    };

    return factory;
  };

  usdanndbFactory.$inject = ['$http'];

  angular.module('healthTracker').factory('usdanndbFactory',
    usdanndbFactory);

}());
