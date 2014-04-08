'use strict';

/* Filters */

angular.module('seed.filters', []).
  filter('sampleFilter', function () {
    return function (items) {
      //do some manipulation on items and then return the new item array.
    	return items;
    }
  });
