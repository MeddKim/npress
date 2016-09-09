'use strict';


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
    link:link,
    restrict: 'EA',
    scope: {},
    controller: 'AppLayoutCtrl'
  };

  function link(scope, element, attrs){
    element.click(function(){
      element.addClass('active');
      element.css("display",'block');
    });
  }
});

angular.module('npress').controller('LayoutMenuCtrl', function LayoutMenuCtrl($scope,menuScroll) {
  var vm = $scope.vm = {};
  vm.menuScroll = menuScroll;
  console.log("呵呵呵呵");
});
