'use strict';

/* Controllers */
angular.module('seed.controllers', []).
  controller('landingController', function ($scope, $http) {
    $scope.names = [];
    $http.get('/getsampledata').
    success(function(data){
      $scope.names = data.data;
    }).
    error(function(data){
      //handle error.      
    });

    
    $scope.addName = function(){
      var postData = {name: $scope.eName};
      $http.post('/addsampledata', postData).
      success(function(data){
        $scope.names.push({sampleName: $scope.eName});
      }).
      error(function(data) {
        //handle error
      });
    }
  });
