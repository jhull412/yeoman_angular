(function() {
    var rxnavFactory = function($http) {

        var factory = {};

        factory.getMedications = function() {
            return $http.get('https://rxnav.nlm.nih.gov/REST/drugs?name=cymbalta');
        };

        //factory.getCustomer = function(customerId) {
        //    return $http.get('/customers/' + customerId);
        //};
        //
        //factory.getOrders = function() {
        //    return $http.get('/orders');
        //};
        //
        //factory.deleteCustomer = function(customerId) {
        //    return $http.delete('/customers/' + customerId);
        //};

        return factory;
    };

    rxnavFactory.$inject = ['$http'];

    angular.module('myApp').factory('rxnavFactory',
        rxnavFactory);

}());