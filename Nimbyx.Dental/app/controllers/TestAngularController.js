'use strict';
//app.controller('TestAngularController', ['$scope', 'testAngularService', 'authService',
//    function ($scope, testAngularService, authService) {
//        $scope.Heading = "Test Angular Index Page";
//        $scope.products = [];

//        $scope.getProducts = function () {
//            $scope.products = [];
//            $scope.loading = true;

//            testAngularService.getProducts().then(function (productList) {
//                //$scope.products = [{ Name: 'name1', Desc: 'desc1' }, { Name: 'name2', Desc: 'desc2' }, { Name: 'name3', Desc: 'desc3' }];
//                $scope.products = productList;
//            }, function (error) {
//                alert("Error in getting the items. " + error.exceptionMessage);
//                $scope.loading = false;
//            });
//        };

//        $scope.init = function () {
//            $scope.getProducts();

//        };
//    }]);

/**
 * Number.prototype.format(n, x)
 * 
 * @param integer n: length of decimal
 * @param integer x: length of sections
 */
Number.prototype.format = function (n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

app.controller('TestAngularController', ['$scope', 'TestAngularService', 'authService',
    function ($scope, TestAngularService, authService) {

        $scope.Heading = "Test Angular Controller Page";
                $scope.Heading = "Test Angular Index Page";
                $scope.products = [];

                $scope.getProducts = function () {
                    $scope.products = [];
                    $scope.loading = true;

                    TestAngularService.getProducts().then(function (productList) {
                        //$scope.products = [{ Name: 'name1', Desc: 'desc1' }, { Name: 'name2', Desc: 'desc2' }, { Name: 'name3', Desc: 'desc3' }];
                        $scope.products = productList;
                    }, function (error) {
                        alert("Error in getting the items. " + error.exceptionMessage);
                        $scope.loading = false;
                    });
                };

                $scope.init = function () {
                    $scope.getProducts();

                };

    }]);