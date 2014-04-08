'use strict';

// Declare app level module which depends on filters, and services

angular.module('seed', [
  'seed.controllers',
  'seed.filters',
  'seed.services',
  'seed.directives',
  'ngRoute'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/landing', {
      templateUrl: 'partials/landing',
      controller: 'landingController'
    }).
    otherwise({
      redirectTo: '/landing'
    });

  $locationProvider.html5Mode(true);
});
