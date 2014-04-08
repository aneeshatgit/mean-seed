'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('seed.services', []).
  value('version', '0.1').
  factory('helperMethods', function() {
    var factory = {};

    factory.someMethod = function(obj) {
      //implement some logic here 
      return obj
  	};

    return factory;
  });
