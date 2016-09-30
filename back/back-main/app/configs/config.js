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
    "url":'home',
    "children":false
  },{
    "menuName":"文章",
    "icon":'fa fontello-pen',
    'url':'article',
    'children':[{
      "menuName":"所有文章",
      "url":"article.list"
    },{
      "menuName":"撰写文章",
      "url":"article.create"
    },{
      "menuName":"分类",
      "url":"article/list"
    },{
      "menuName":"专题",
      "url":"article/list"
    },{
      "menuName":"标签",
      "url":"article/list"
    },{
      "menuName":"评论",
      "url":"/article/list"
    }]
  },{
    "menuName":"页面",
    "icon":'fa fontello-inbox',
    'url':'/page',
    'children':[{
      "menuName":"所有页面",
      "url":"/page/list"
    },{
      "menuName":"新建页面",
      "url":"/page/create"
    },{
      "menuName":"评论",
      "url":"/page/comment"
    }]
  },{
    "menuName":"附件",
    "icon":'fa fontello-attach',
    'url':'/accessory',
    'children':[{
      "menuName":"所有附件",
      "url":"/accessory/list"
    },{
      "menuName":"上传",
      "url":"/accessory/upload"
    }]
  },{
    "menuName":"微信",
    "icon":'fa fontello-chat-alt',
    'url':'wechat',
    'children':[{
      "menuName":"自动回复",
      "url":"/wechat/auto"
    },{
      "menuName":"默认回复",
      "url":"/wechat/default"
    },{
      "menuName":"菜单设置",
      "url":"/wechat/menu"
    },{
      "menuName":"微信设置",
      "url":"/wechat/settings"
    }]
  },{
    "menuName":"用户",
    "icon":'fa  fontello-users',
    'url':'user',
    'children':[{
      "menuName":"所有用户",
      "url":"/user/list"
    },{
      "menuName":"添加",
      "url":"/user/add"
    },{
      "menuName":"我的资料",
      "url":"/user/mine"
    }]
  },{
    "menuName":"模板",
    "icon":'fa fontello-clipboard',
    'url':'template',
    'children':[{
      "menuName":"所有模板",
      "url":"/template/list"
    },{
      "menuName":"模板安装",
      "url":"/template/install"
    },{
      "menuName":"菜单",
      "url":"/template/menu"
    },{
      "menuName":"设置",
      "url":"/template/settings"
    },{
      "menuName":"编辑",
      "url":"/template/edit"
    }]
  },{
    "menuName":"插件",
    "icon":'fa fontello-address',
    'url':'plugin',
    'children':[{
      "menuName":"所有插件",
      "url":"/plugin/list"
    },{
      "menuName":"安装",
      "url":"/template/install"
    }]
  },{
    "menuName":"设置",
    "icon":'fa  fontello-wrench-outline',
    'url':'settings',
    'children':[{
      "menuName":"常规",
      "url":"/settings/normal"
    },{
      "menuName":"评论",
      "url":"/settings/comment"
    },{
      "menuName":"通知",
      "url":"/settings/normal"
    },{
      "menuName":"SEO",
      "url":"/settings/seo"
    },{
      "menuName":"水印",
      "url":"/settings/seo"
    },{
      "menuName":"连接形式",
      "url":"/settings/seo"
    },{
      "menuName":"登陆注册",
      "url":"/settings/seo"
    },{
      "menuName":"CDN加速",
      "url":"/settings/seo"
    },{
      "menuName":"API应用",
      "url":"/settings/seo"
    }]
  },{
    "menuName":"工具",
    "icon":'fa  fontello-eject-outline',
    'url':'tool',
    'children':[{
      "menuName":"导入",
      "url":"/tool/import"
    },{
      "menuName":"导出",
      "url":"/tool/export"
    },{
      "menuName":"同步",
      "url":"/tool/sync"
    }]
  }];

  //
// }

 angular.module('npress').constant('menuScroll',menuScroll);
