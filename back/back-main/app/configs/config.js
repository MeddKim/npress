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
angular.module('npress').config(menuConfig);

menuConfig.$inject = ['menuScroll'];

function menuConfig(menuScroll){
  menuScroll = [{
    "menuName":"文章",
    "icon":'',
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
    "icon":'',
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
    "icon":'',
    'url':'',
    'children':[{
      "menuName":"所有附件",
      "url":""
    },{
      "menuName":"上传",
      "url":""
    }]
  }];
}
