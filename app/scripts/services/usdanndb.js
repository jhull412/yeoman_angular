'use strict';
(function () {
    var usdanndbFactory = function ($http, appSettings) {

        var factory = {};

        factory.getFoodsByKeyword = function (args) {
            factory.searchTerms = args;
            //factory.searchResults = $http.get('http://api.nal.usda.gov/ndb/search/?format=json&q=' + args + '&sort=n&max=25&offset=0&api_key=8LYPxewvViu0gC0tKN5PQtMFWqLMdMb9wVKeUTBZ');
            var url = appSettings.nutritionixEndpoint + '/search/' + args + appSettings.defaultSearchOptions + '&appId=' + appSettings.nutritionixAppID + '&appKey=' + appSettings.nutritionixAppKey;
            //var url = 'https://sites.google.com/site/justinhull412/find_food_apple.json';
            return $http.get(url)
                .then(function (response) {
                    factory.searchResults = response.data.hits;
                    return factory.searchResults;
                });
        };

        factory.getAllFoodInfoByNdbno = function (ndbno) {
            factory.selectedFoodID = ndbno;
            var url = appSettings.nutritionixEndpoint + '/item?id=' + ndbno + '&appId=' + appSettings.nutritionixAppID + '&appKey=' + appSettings.nutritionixAppKey;
            //var url = 'https://sites.google.com/site/justinhull412/selected_food_513fceb475b8dbbc21000f94.json';
            return $http.get(url)
                .then(function (response) {
                    factory.selectedFoodName = response.data.item_name + ' - ' + response.data.brand_name;
                    factory.selectedFoodNutrients = factory.formatNutritionData(response.data);
                    return {
                        id: factory.selectedFoodID,
                        name: factory.selectedFoodName,
                        nutrients: factory.selectedFoodNutrients
                    }
                });
        };

        //factory.getAllFoodInfoByNdbno = function (ndbno) {
        //    factory.selectedFoodID = ndbno;
        //    return $http.get('http://api.nal.usda.gov/ndb/reports/?ndbno=' + ndbno + '&type=f&format=json&api_key=8LYPxewvViu0gC0tKN5PQtMFWqLMdMb9wVKeUTBZ')
        //        .then(function (response) {
        //            factory.selectedFoodName = response.data.report.food.name;
        //            factory.selectedFoodNutrients = factory.formatNutritionData(response.data.report.food.nutrients);
        //            return {
        //                id: factory.selectedFoodID,
        //                name: factory.selectedFoodName,
        //                nutrients: factory.selectedFoodNutrients
        //            }
        //        });
        //};

        factory.formatNutritionData = function (foodDetails) {
            foodDetails.nf_total_fat_pdv = (100*foodDetails.nf_total_fat/65);
            foodDetails.nf_saturated_fat_pdv = (100*foodDetails.nf_saturated_fat/20);
            foodDetails.nf_cholesterol_pdv = (100*foodDetails.nf_cholesterol/300);
            foodDetails.nf_sodium_pdv = (100*foodDetails.nf_sodium/2400);
            foodDetails.nf_total_carbohydrate_pdv = (100*foodDetails.nf_total_carbohydrate/300);
            foodDetails.nf_dietary_fiber_pdv = (100*foodDetails.nf_dietary_fiber/25);
            return foodDetails;
        };

        //factory.formatNutritionData = function (foodDetails) {
        //    var nutrients = {};
        //    foodDetails.forEach(function (nutrient) {
        //        nutrients[nutrient.name] = {
        //            value: nutrient.value,
        //            units: nutrient.unit
        //        };
        //    });
        //    return nutrients;
        //};

        factory.getSearchFoodState = function () {
            return {
                searchTerms: factory.searchTerms,
                searchResults: factory.searchResults
            };
        };

        return factory;
    };

    usdanndbFactory.$inject = ['$http', 'appSettings'];

    angular.module('healthTracker').factory('usdanndbFactory',
        usdanndbFactory);

}());