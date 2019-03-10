angular.module('smokeApp' , ['ngRoute'])

.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('')
    $routeProvider
    .when('/' , {
        templateUrl : 'pages/home.html',
        controller : 'homeCtrl'
    })
    .when('/statistic' , {
        templateUrl : 'pages/statistic.html',
        controller : 'statisticCtrl'
    })
})
        