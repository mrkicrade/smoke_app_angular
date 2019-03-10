angular.module('smokeApp')

.controller('statisticCtrl' , function($scope){
    // $scope.name = 'Luka';
    $scope.statistics = [];
    $scope.statistics = JSON.parse(localStorage.getItem('stat'));
    // console.log($scope.statistics);
    $scope.monday = $scope.statistics.monday;
    $scope.tuesday = $scope.statistics.tuesday;
    $scope.thursday = $scope.statistics.thursday;
    $scope.wednesday = $scope.statistics.wednesday;
    $scope.friday = $scope.statistics.friday;
    $scope.saturday = $scope.statistics.saturday;
    $scope.sunday = $scope.statistics.sunday;
})