'use strict';

/* Directives */

angular.module('seed.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });  


