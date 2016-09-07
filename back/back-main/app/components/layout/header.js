'use strict';

angular.module('npress').controller('LayoutHeaderCtrl', function LayoutHeaderCtrl($scope) {
  var vm = $scope.vm = {};
});

angular.module('npress').directive('layoutHeader', function LayoutHeader() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: '/app/components/layout/header.html',
    controller: 'LayoutHeaderCtrl'
  };
});
