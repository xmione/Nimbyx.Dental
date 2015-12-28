'use strict';
app.controller('payController', ['$scope', 'payService', 'simpleList',
    function ($scope, payService, simpleList) {

        var itemListName = "#item_list_perday";
        var itemListSelectAll = "#item_list_select_all_perday";
        
        
        $scope.getProducts = function () {
            $scope.items = [];
            $scope.loading = true;
             
            payService.getProducts().then(function (results) {
                var productList = new simpleList();
                $scope.items = productList.items;
            }, function (error) {
                alert("Error in getting the items. " + error.exceptionMessage);
                $scope.loading = false;
            });
        };

        $scope.init = function () {
            alert("test");
            $scope.getProducts();
            //setTimeout(function () { $scope.getTotalBranchCount(); }, 100);
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