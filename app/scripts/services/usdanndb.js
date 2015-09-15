(function() {
  var usdaNndbFactory = function($http) {

    var factory = {};

    factory.getFoodsByKeyword = function(searchTerms) {
      var args = searchTerms.split(' ');
      var str = '';
      args.forEach(function(arg) {
        str = str + arg + '+';
      });

      str = str.substring(0, str.length - 1);
      return $http.get('http://api.nal.usda.gov/ndb/search/?format=json&q=' + str + '&sort=n&max=25&offset=0&api_key=8LYPxewvViu0gC0tKN5PQtMFWqLMdMb9wVKeUTBZ');
    };

    factory.getAllFoodInfoByNdbno = function(ndbno) {
      return $http.get('http://api.nal.usda.gov/ndb/reports/?ndbno=' + ndbno +'&type=f&format=json&api_key=8LYPxewvViu0gC0tKN5PQtMFWqLMdMb9wVKeUTBZ')
    };

    return factory;
  };

  usdaNndbFactory.$inject = ['$http'];

  angular.module('myAppApp').factory('usdaNndbFactory',
    usdaNndbFactory);

}());
