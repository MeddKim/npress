'use strict';
// 声明config函数，它的参数是一个回调函数，这个回调函数将在模块加载时运行，
// 以便对模块进行配置，路由就是配置的一种
angular.module('npress').config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('default', {
    url: '',
    templateUrl: 'app/controllers/home/index.html',
    controller: 'HomeIndexCtrl'
  });

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'app/controllers/home/index.html',
    controller: 'HomeIndexCtrl'
  });

  $stateProvider.state('notFound', {
    url: '/notFound',
    templateUrl: 'controllers/home/notFound.html',
    controller: 'HomeNotFoundCtrl'
  });

  $urlRouterProvider.otherwise('/notFound');

  // //定义一个父路由，只用于提供URL
  // $stateProvider.state('reader', {
  //   //所有的子路由都会继承这个URL
  //   url: '/reader',
  //   //父路由中一般只要提供一个这样的template就够了，不必使用templateUrl，
  //   //页面中公共的部分通过组件型指令去实现会更灵活、更漂亮
  //   template: '<div ui-view></div>',
  //   // 抽象路由不能通过URL直接访问，比如直接访问/reader路径会跳转到otherwise中去
  //   abstract: true
  // });
  //
  // //定义一个子路由
  // // 子路由的路径，angular-ui-router会把各级父路由与当前路由的URL组合起来
  // //作为最终的访问路径，如：`/reader/create`
  // $stateProvider.state('reader.create', {
  //   // 子路由的路径，angular-ui-router会把各级父路由与当前路由的URL组合起来，
  //   // 作为最终的访问路径，如：`/reader/create`
  //   url: '/create',
  //   //子路由模板
  //   templateUrl: 'controllers/reader/create.html',
  //   // 子路由控制器
  //   controller: 'ReaderCreateCtrl as vm'
  // });
  //
  //
  $stateProvider.state('reader',{
    url:'/reader',
    template: '<div ui-view></div>',
    abstract:true
  }).state('reader.list',{
    url:'/list',
    templateUrl:'app/controllers/reader/list.html',
    controller:'ReaderListCtrl as vm'
  }).state('reader.create',{
    url:'/create',
    // params:["id","name"],
    params:{"id":null,"name":null},
    templateUrl:'app/controllers/reader/create.html',
    controller:'ReaderCreateCtrl as vm'
  });


  $stateProvider.state('article',{
    url:'/article',
    template: '<div ui-view></div>',
    abstract:true
  }).state('article.list',{
    url:'/list',
    templateUrl:'app/controllers/article/list.html',
    controller:'ArticleListCtrl as vm'
  }).state('article.create',{
    url:'/create',
    templateUrl:'app/controllers/article/article.create.html',
    controller:'ArticleCreateCtrl as vm'
  });

});
