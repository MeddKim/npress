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
    scope: {
      pageForward:'&pageForward'
    },
    controller: 'AppLayoutCtrl'
  };

  function link(scope, element, attrs){
      // console.log(element.siblings().removeClass('active'));
      // element.addClass('active');
      // console.log(element.find('ul').css('display','block'));
      // element.find('ul').slideDown();
      // element.siblings().find('ul').slideUp();
      // element.find('ul').slideToggle();
      // element.css("display",'block');
    element.find('a.main-menu-content').click(function(){
      element.siblings().removeClass('active')
      element.siblings().find('ul').slideUp();
      element.addClass('active');
      element.find('ul').slideToggle();

    });
  }
});

angular.module('npress').controller('LayoutMenuCtrl', function LayoutMenuCtrl($scope,menuScroll,$state) {
  var vm = $scope.vm = {};
  vm.menuScroll = menuScroll;
  vm.pageForward = function(url){
    // $state.go('home');
    console.log("hehehhe");
  }

});
