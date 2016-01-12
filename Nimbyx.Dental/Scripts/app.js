var app = angular.module('app', ['LocalStorageModule','ngRoute']);
app.config(['localStorageServiceProvider', function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
}]);
app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        var baseTemplateUrl = "/app/templates/";
        var baseControllerUrl = "/app/controllers/";

        $routeProvider.when('/',
        {
            templateUrl: baseTemplateUrl + 'home.html'
        });

        $routeProvider.when('/shop/',
        {
            templateUrl: baseTemplateUrl + 'shop.html',
            controller: 'shopController',
        });

        $routeProvider.when('/testangular/',
        {
            templateUrl: baseTemplateUrl + 'TestAngular.html',
            controller: 'TestAngularController',
        });

        $routeProvider.when('/testangular/another-page',
        {
            templateUrl: baseTemplateUrl + 'another-page.html',
            controller: 'AnotherPageController',
        });

        $routeProvider.when('/testangular/page-not-found',
        {
            templateUrl: baseTemplateUrl + 'page-not-found.html',
        });

        $routeProvider.otherwise({
            redirectTo: function () {
 
                if (window.location.pathname == "/testangular") {
                    window.location =  baseTemplateUrl + "testangular";
                } else {
                    window.location = baseTemplateUrl + "testangular/page-not-found";
                }
            },
        });
        $locationProvider.html5Mode(true);

    }]);

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);

//app.run([
//  '$rootScope',
//  function ($rootScope) {
//      // see what's going on when the route tries to change
//      $rootScope.$on('$locationChangeStart', function (event, newUrl, oldUrl) {
//          // both newUrl and oldUrl are strings
//          console.log('Starting to leave %s to go to %s', oldUrl, newUrl);
//      });
//  }
//]);