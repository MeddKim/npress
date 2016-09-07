'use strict';

angular.module('npress').controller('LayoutMenuCtrl', function LayoutMenuCtrl($scope) {
  var vm = $scope.vm = {};
});
angular.module('npress').directive('layoutMenu', function LayoutMenu() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: '/app/components/layout/menu.html',
    controller: 'LayoutMenuCtrl'
  };
});
