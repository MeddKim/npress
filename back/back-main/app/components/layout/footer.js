'use strict';

angular.module('npress').controller('LayoutFooterCtrl', function LayoutFooterCtrl($scope) {
  var vm = $scope.vm = {};

});
angular.module('npress').directive('layoutFooter', function LayoutFooter() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: '/app/components/layout/footer.html',
    controller: 'LayoutFooterCtrl'
  };
});
