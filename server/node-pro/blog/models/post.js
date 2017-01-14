var mongodb = require("./db.js");
var markdown = require('markdown').markdown;

function Post(name, title, post) {
    this.name = name;
    this.title = title;
    this.post = post;
}

module.exports = Post;

Post.prototype.save = function(callback) {
    var date = new Date();
    //存储各种时间格式，方便以后拓展
    var time = {
        date: date,
        year: date.getFullYear(),
        month: date.getFullYear() + "-" + (date.getMonth() + 1),
        day: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
        minute: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + (
            date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
    };

    var post = {
        name: this.name,
        time: time,
        title: this.title,
        post: this.post
    };
    mongodb.open(function(err, db) {
    	if(err){
    		callback(err);
    		return callback(err);
    	}
        db.collection('posts', function(err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }

            //将数据插入到posts文档
            collection.insert(post, { safe: true }, function(err) {
                mongodb.close();
                if (err) {
                    return callback(err);
                }
                callback(null);
            });
        });
    });
};

Post.get = function(name, callback) {
    mongodb.open(function(err,db){
    	if(err){
    		return callback(err);
    	}

        db.collection('posts', function(err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            var query = {};
            if(name){
            	query.name = name;
            }
            //根据query对象查询信息
            collection.find(query).sort({
            	time:-1
            }).toArray(function(err,docs){
            	mongodb.close();
            	if(err){
            		return callback(err);
            	}
            	//将markdown解析为markdown
            	docs.forEach(function(doc){
            		doc.post = markdown.toHTML(doc.post);
            	});
            	callback(null,docs);
            });
        });
    });
}
