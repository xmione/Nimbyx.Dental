'use strict';
app.controller('shopController', ['$scope', 'shopService', 'authService', 
    function ($scope, shopService, authService ) {

        $scope.products = [];
        
        $scope.getProducts = function () {
            $scope.products = [];
            $scope.loading = true;
             
            shopService.getProducts().then(function (productList) {
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