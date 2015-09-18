(function () {
  var usdanndbFactory = function ($http) {

    var factory = {};

    factory.getFoodsByKeyword = function (args) {
      factory.searchTerms = args;
      factory.searchResults = $http.get('http://api.nal.usda.gov/ndb/search/?format=json&q=' + args + '&sort=n&max=25&offset=0&api_key=8LYPxewvViu0gC0tKN5PQtMFWqLMdMb9wVKeUTBZ');
      return factory.searchResults;
    };

    factory.getAllFoodInfoByNdbno = function (ndbno) {
      factory.selectedFoodID = ndbno;
      factory.selectedFoodDetails = $http.get('http://api.nal.usda.gov/ndb/reports/?ndbno=' + ndbno + '&type=f&format=json&api_key=8LYPxewvViu0gC0tKN5PQtMFWqLMdMb9wVKeUTBZ');
      return factory.selectedFoodDetails;
    };

    factory.getSearchFoodState = function () {
      return {
        searchTerms: factory.searchTerms,
        searchResults: factory.searchResults
      };
    };

    return factory;
  };

  usdanndbFactory.$inject = ['$http'];

  angular.module('healthTracker').factory('usdanndbFactory',
    usdanndbFactory);

}());
