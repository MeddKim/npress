var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var flash = require('connect-flash');

var multer = require('multer');  //文件上传
var storage = multer.diskStorage({
	destination:function(req,file,cb){
		cb(null, './public/images')
	},
	filename:function(req,file,cb){
		cb(null,file.fieldname+"-"+Date.now()+file.originalname);
	}
});
var upload = multer({storage:storage});

User = require('../models/user.js')
Post = require('../models/post.js')
/* GET home page. */
router.get('/', function(req, res, next) {

	Post.get(null,function(err,posts){
		if(err){
			posts = [];
		}
		res.render('index', { 
	    	title: '主页' ,
	    	posts: posts,
	    	user:req.session.user,
	    	success:req.flash('success').toString(),
	    	error:req.flash('error').toString()
    	});
	});
});

module.exports = router;

// module.exports = function(app){
// 	app.get("",function(req,res){
// 		res.render("index",{"title":"Worrld"});
// 	});
// }

router.get('/reg',function(req,res){
	res.render('reg',{
		title:'注册',
    	user:req.session.user,
    	success:req.flash('success').toString(),
    	error:req.flash('error').toString()
	});
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
			return res.redirect('/');//注册成功返回主页
		}

		//如果不存在则新增用户
		newUser.save(function(err,user){
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
	res.render('login',{
		title:'登陆',
    	user:req.session.user,
    	success:req.flash('success').toString(),
    	error:req.flash('error').toString()
	});
});
router.post('/login',function(req,res){
	//生成
	var md5 = crypto.createHash('md5'),
		password = md5.update(req.body.password).digest('hex');

		//检查用户名是否已经存在
	User.get(req.body.name,function(err,user){
		if(!user){
			req.flash('error','!用户不存在');
			return res.redirect('/login');
		}

		//检查密码是否一致
		if(user.password != password){
			req.flash('error','密码错误');
			return res.redirect('/login');
		}

		//用户密码都匹配，将用户信息存入session
		req.session.user = user;
		req.flash('success','登陆成功！');
		res.redirect('/');
	});
});

router.get('/post',function(req,res){
	res.render('post',{
		title:'发表',
    	user:req.session.user,
    	success:req.flash('success').toString(),
    	error:req.flash('error').toString()
	});
});
router.post('/post',function(req,res){
	var currentUser = req.session.user,
		post = new Post(currentUser.name,req.body.title,req.body.post);
	post.save(function(err){
		if(err){
			req.flash("error",err);
			return res.redirect("/");
		}
		req.flash('success','发布成功');
		res.redirect("/");
	});
});


router.get('/logout',function(req,res){
	req.session.user = null;
	req.flash('success','登出成功');
	res.redirect('/');
});

 router.get('/upload',function(req,res){
	res.render('upload',{
		title:'文件上传',
    	user:req.session.user,
    	success:req.flash('success').toString(),
    	error:req.flash('error').toString()
	});
 });  
 router.post('/upload',upload.single('avatar'),function(req,res){
	req.flash('success','文件上传成功');
	res.redirect('/upload'); 	
 });

function checkLogin(req,res,next){
	if(!req.session.user){
		req.flash("error",'未登录');
		res.redirect('/login');
	}

	next();
}

function checkLogin(req,res,next){
	if(req.session.user){
		req.flash("error",'已经登录');
		res.redirect('/back');
	}

	next();
}