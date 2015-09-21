'use strict';

/**
 * @ngdoc service
 * @name healthTracker.appSettings
 * @description
 * # appSettings
 * Constant in the healthTracker.
 */
angular.module('healthTracker')
  .constant('appSettings',
    {
        appName: 'HealthTracker',
        version: '1.0.0',
        nutritionixAppID: 'c11cf35e',
        nutritionixAppKey: 'fde671af4565e94d938ec9192ad1939e',
        nutritionixEndpoint: 'https://api.nutritionix.com/v1_1',
        defaultSearchOptions: '?results=0:50&cal_min=0&cal_max=50000&fields=item_name,brand_name,item_id,brand_id'
    });
