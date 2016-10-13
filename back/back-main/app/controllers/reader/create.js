
;(function(){
	'use strict';

	//引用应用模块
	angular.module('npress')
		    //注册一个控制器
		.controller('ReaderCreateCtrl',function ReaderCreateCtrl($scope,$stateParams) {
        var vm = this;
				console.log($stateParams);
        vm.submit = function(form) {

        }

		});
})()
