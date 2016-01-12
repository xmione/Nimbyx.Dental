'use strict';
app.factory('shopService', ['$http', '$q', 'authService', function ($http, $q, authService) {
 
    var serviceBase = authService.serviceBase;
    var shopService = {};

    var _getProducts = function () {
        var deferred = $q.defer();
        $http.get(serviceBase + 'api/GetAllProducts/').success(deferred.resolve).error(deferred.reject);
        return deferred.promise;
    };
 
    shopService.getProducts = _getProducts;
 
    return shopService;
}]);

