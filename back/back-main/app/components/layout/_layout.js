'use strict';

angular.module('npress').controller('AppLayoutCtrl', function AppLayoutCtrl($scope) {
  // var vm = $scope.vm = {};
  // $scope.$on('$stateChangeSuccess', function(event, state) {
  //   // vm.controllerCss = utils.getControllerCss(state.controller);
  // });
});
angular.module('npress').directive('appLayout', function appLayout() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: '/app/components/layout/_layout.html',
    controller: 'AppLayoutCtrl'
  };
});
