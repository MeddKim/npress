'use strict';

// 这里只能注入constant和各种Provider。本阶段主要用于通过Provider对各种服务进行配置。
// angular.module('npress').config(function() {
//
// });


/*
 *文章
 *	－所有文章
 *	－撰写文章
 *	－分类
 *	－专题
 *	－标签
 *	－评论
 *页面
 *	－所有页面
 *	－新建页面
 *	－评论
 *附件
 *	－所有附件
 *	－上传
 *微信
 *	－自动回复
 *	－默认回复
 *	－菜单设置
 *	－微信设置
 *用户
 *	－所有用户
 *	－添加
 *	－我的资料
 *模板
 *	－所有模板
 *	－模板安装
 *	－菜单
 *	－设置
 *	－编辑
 *插件
 *	－所有插件
 *	－安装
 *设置
 *	－常规
 *	－评论
 *	－通知
 *	－SEO
 *	－水印
 *	－连接形式
 *	－登陆注册
 *	－CDN加速
 *	－API应用
 *工具
 *	－导入
 *	－导出
 *	－同步
 */
// angular.module('npress').config(menuConfig);

// menuConfig.$inject = ['menuScroll'];

// function menuConfig(menuScroll){
  var menuScroll = [{
    "menuName":"NPress面板",
    "icon":'fa fontello-desktop',
    "url":'',
    "children":false
  },{
    "menuName":"文章",
    "icon":'fa fontello-pen',
    'url':'',
    'children':[{
      "menuName":"所有文章",
      "url":""
    },{
      "menuName":"撰写文章",
      "url":""
    },{
      "menuName":"分类",
      "url":""
    },{
      "menuName":"专题",
      "url":""
    },{
      "menuName":"标签",
      "url":""
    },{
      "menuName":"评论",
      "url":""
    }]
  },{
    "menuName":"页面",
    "icon":'fa fontello-inbox',
    'url':'',
    'children':[{
      "menuName":"所有页面",
      "url":""
    },{
      "menuName":"新建页面",
      "url":""
    },{
      "menuName":"评论",
      "url":""
    }]
  },{
    "menuName":"附件",
    "icon":'fa fontello-attach',
    'url':'',
    'children':[{
      "menuName":"所有附件",
      "url":""
    },{
      "menuName":"上传",
      "url":""
    }]
  },{
    "menuName":"微信",
    "icon":'fa fontello-chat-alt',
    'url':'',
    'children':[{
      "menuName":"自动回复",
      "url":""
    },{
      "menuName":"默认回复",
      "url":""
    },{
      "menuName":"菜单设置",
      "url":""
    },{
      "menuName":"微信设置",
      "url":""
    }]
  },{
    "menuName":"用户",
    "icon":'fa  fontello-users',
    'url':'',
    'children':[{
      "menuName":"所有用户",
      "url":""
    },{
      "menuName":"添加",
      "url":""
    },{
      "menuName":"我的资料",
      "url":""
    }]
  },{
    "menuName":"模板",
    "icon":'fa fontello-clipboard',
    'url':'',
    'children':[{
      "menuName":"所有模板",
      "url":""
    },{
      "menuName":"模板安装",
      "url":""
    },{
      "menuName":"菜单",
      "url":""
    },{
      "menuName":"设置",
      "url":""
    },{
      "menuName":"编辑",
      "url":""
    }]
  },{
    "menuName":"插件",
    "icon":'fa fontello-address',
    'url':'',
    'children':[{
      "menuName":"所有插件",
      "url":""
    },{
      "menuName":"安装",
      "url":""
    }]
  },{
    "menuName":"设置",
    "icon":'fa  fontello-wrench-outline',
    'url':'',
    'children':[{
      "menuName":"常规",
      "url":""
    },{
      "menuName":"评论",
      "url":""
    },{
      "menuName":"通知",
      "url":""
    },{
      "menuName":"SEO",
      "url":""
    },{
      "menuName":"水印",
      "url":""
    },{
      "menuName":"连接形式",
      "url":""
    },{
      "menuName":"登陆注册",
      "url":""
    },{
      "menuName":"CDN加速",
      "url":""
    },{
      "menuName":"API应用",
      "url":""
    }]
  },{
    "menuName":"工具",
    "icon":'fa  fontello-eject-outline',
    'url':'',
    'children':[{
      "menuName":"导入",
      "url":""
    },{
      "menuName":"导出",
      "url":""
    },{
      "menuName":"同步",
      "url":""
    }]
  }];

  //
// }

 angular.module('npress').constant('menuScroll',menuScroll);
