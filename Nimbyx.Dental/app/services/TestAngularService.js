'use strict';
app.factory('TestAngularService', ['$http', '$q', 'authService', function ($http, $q, authService) {
 
    var serviceBase = authService.serviceBase;
    var TestAngularService = {};

    var _getProducts = function () {
        var deferred = $q.defer();
        $http.get(serviceBase + 'api/GetAllProducts/').success(deferred.resolve).error(deferred.reject);
        return deferred.promise;
    };
 
    TestAngularService.getProducts = _getProducts;
 
    return TestAngularService;
}]);

