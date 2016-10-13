'use strict';

angular.module('npress').service('ui', function Ui() {
  this.error = function(message) {
    // TODO: 实现界面显示逻辑
    console.log(message);
  }
});
