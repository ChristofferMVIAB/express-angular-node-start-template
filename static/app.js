(function () {
    "use strict";
    angular.module('expressAngularNode', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/static/datatable.html',
                    controller: 'mainController'
                })
                .when('/test'), {
                    template: '<test-component></test-component>'
                }
                .otherwise({
                    redirectTo: '/'
                });
        });
})();