
;(function(){
	'use strict';

	//引用应用模块
	angular.module('npress')
		    //注册一个控制器
		.controller('ReaderListCtrl',function ReaderCreateCtrl($scope,$state) {
        var vm = this;

        vm.goTO = function(form) {
          $state.go("reader.create",{"id":1000,"name":"happy"});
        }

		});
})()
