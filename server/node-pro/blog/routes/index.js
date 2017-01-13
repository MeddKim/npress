var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var flash = require('connect-flash');
User = require('../models/user.js')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;

// module.exports = function(app){
// 	app.get("",function(req,res){
// 		res.render("index",{"title":"Worrld"});
// 	});
// }

router.get('/reg',function(req,res){
	res.render('reg',{title:'注册'});
});
router.post('/reg',function(req,res){
	var name = req.body.name,
		password = req.body.password,
		password_re = req.body['password-repeat'];

	//检查两次输入的密码是否一致
	if(password != password_re){
		req.flash('error','两次输入的密码不一致');
		return res.redirct('/reg');
	}
	//生成密码的md5值
	var md5 = crypto.createHash('md5'),
		password = md5.update(req.body.password).digest('hex');
	var newUser = new User({
		name:req.body.name,
		password:password,
		email:req.body.email
	});

	//检查用户名是否已经存在
	User.get(newUser.name,function(err,user){
		if(err){
			req.flash('error',err);
			return res.redirect('/');
		}

		if(user){
			req.flash('error','用户已经存在！');
		}

		//如果不存在则新增用户
		newUser.save(function(err,usr){
			if(err){
				req.flash('error',err);
				return res.redirect('/reg'); //注册失败返回注册页
			}
			req.session.user = user;
			req.flash('success','注册成功！');
			res.redirect('/');//注册成功返回主页
		});

	});

});

router.get('/login',function(req,res){
	res.render('login',{title:'登陆'});
});
router.post('/login',function(req,res){
});

router.get('/post',function(req,res){
	res.render('reg',{title:'发表'});
});
router.post('/post',function(req,res){
});


router.get('/logout',function(req,res){
});
