
// 'use strict';

// angular.module('app').directive('bfFieldError', function bfFieldError($compile) {
//   return {
//     restrict: 'A',
//     require: 'ngModel',
//     link: function (scope, element, attrs, ngModel) {
//       var subScope = scope.$new(true);
//       subScope.hasError = function() {
//         return ngModel.$invalid && ngModel.$dirty;
//       };
//       subScope.errors = function() {
//         return ngModel.$error;
//       };
//       subScope.customMessages = scope.$eval(attrs.bfFieldError);
//       var hint = $compile('<ul class="bf-field-error" ng-if="hasError()"><li ng-repeat="(name, wrong) in errors()" ng-if="wrong">{{name|error:customMessages}}</li></ul>')(subScope);
//       element.after(hint);
//     }
//   };
// });
//
//
// angular.module('app').directive('bfFieldError', function bfFieldError($compile) {
//   return {
//     restrict:'A',
//     require:'ngModle',
//     link:function(scope, element, attrs, ngModel){}
//   };
// });

angular.module('npress').directive('bfFieldError', function bfFieldError($compile) {
  return {
    restrict: 'A',
    // 这个元素上必须有一个ng-model属性，如果没有，就会报错
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      // 创建一个`子scope`，`true`参数表示这个子scope是个独立作用域，它不会从父级作用域自动继承属性
      var subScope = scope.$new(true);
      //在子scope中添加两个函数，供模板使用
      //是否需要使用错误
      // subScope.hasError =
    }
  };
});
