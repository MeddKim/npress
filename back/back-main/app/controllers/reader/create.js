'use strict';

//引用应用模块
angular.module('app')
//注册一个控制器
.controller(
	//控制器名称
	'ReaderCreateCtrl',
	//控制器实现
	function ReaderCreateCtrl(Reader,$scope){
	// 在ReaderCreateCtrl as vm语法下，当前函数的this指针指向的其实是$scope.vm变量，
	// 作为一项约定和最佳实践，我们把它赋值给vm变量。我们在程序中不再直接使用this，
	// 因为JavaScript中的this很容易给一些不熟悉JavaScript的程序员造成混乱。
	var vm = this;

	vm.submit = function(form){
		/**
		Reader.save(form,
			function(reader){
				console.log(reader);
			},
			function(resp){
				console.log(resp);
			}

		);
		**/
	}
});