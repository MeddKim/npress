'use strict';

angular.module('npress').constant('api', {
  root: '/api',
  apiOf: function(path) {
    if (!path.match('^/')) {
      throw "path must start by /";
    }
    return this.root + path;
  }
});
