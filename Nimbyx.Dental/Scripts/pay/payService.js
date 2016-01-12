'use strict';
app.factory('payService', ['$http', '$q', 'ngAuthSettings', function ($http, $q, ngAuthSettings) {
 
    var serviceBase = ngAuthSettings.apiServiceBaseUri;
    var payService = {};

    var _getProducts= function () {
        var deferred = $q.defer();
        $http.get(serviceBase + 'api/GetProducts/').success(deferred.resolve).error(deferred.reject);
        return deferred.promise;
    };

    payService.getProducts = _getProducts;
    return payService;
}]);

