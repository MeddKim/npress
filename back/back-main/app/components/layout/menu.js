'use strict';

angular.module('npress').controller('LayoutMenuCtrl', function LayoutMenuCtrl($scope,menuScroll) {
  var vm = $scope.vm = {};
  console.log(menuScroll);
});
angular.module('npress').directive('layoutMenu', function LayoutMenu() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: '/app/components/layout/menu.html',
    controller: 'LayoutMenuCtrl'
  };
});

angular.module('npress').directive('menuScroll', function menuScroll() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: '/app/components/layout/_layout.html',
    controller: 'AppLayoutCtrl'
  };
});
