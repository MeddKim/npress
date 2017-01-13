var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session'); //
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');

var index = require('./routes/index');
var users = require('./routes/users');
var settings = require('./settings');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set(flash())

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); //设置favicon
app.use(logger('dev')); // 使用logger日志中间件
app.use(bodyParser.json()); //json解析中间件
app.use(bodyParser.urlencoded({ extended: false })); //urlencodded请求体解析中间件
app.use(cookieParser()); //cookie解析的中间件
app.use(express.static(path.join(__dirname, 'public'))); //设置public文件夹为静态文件存放目录

app.use('/', index); 
app.use('/users', users);


app.use(session({
	secret:settings.cookieSecret,
	key:settings.db, //cookie name
	cookie:{maxAge: 1000 * 60 * 60 * 24 * 30}, //30 days
	store:new MongoStore({
		// db:settings.db,
		// host:settings.host,
		// port:settings.port
		url: 'mongodb://localhost/blog'
	})
}));

// index(app);
// app.get("/",function(req,res){
// 	res.render("index",{"title":"EveryBody"});
// });
 
// app.use('/',express.Router().get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// }))
// app.use('/users',express.Router().get('/list', function(req, res, next) {
//   res.send('every day');
// }))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});//捕获404错误，转发至错误处理器

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
