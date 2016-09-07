var gulp = require('gulp'),
    connect = require('gulp-connect'),
    inject = require('gulp-inject');

gulp.task('webserver', function() {
    connect.server({
        port: 1355
    });
});

gulp.task('inject', function() {
    var target = gulp.src('./main.html');

    var sources = gulp.src(['./app/**/*.js', './app/**/*.css'], {
        read: false
    });

    return target.pipe(inject(sources))
    .pipe(gulp.dest('./src'));
});

gulp.task('default', ['webserver']);

  // "dependencies": {
  //   "modernizr": "~2.8.3",
  //   "es5-shim": "~4.1.1",
  //   "es6-shim": "~0.28.2",
  //   "jquery": "~1.11.1",
  //   "angular": "~1.5.3",
  //   "angular-animate": "~1.5.3",
  //   "angular-cookies": "~1.5.3",
  //   "angular-touch": "~1.2.28",
  //   "angular-sanitize": "~1.2.28",
  //   "angular-resource": "~1.2.28",
  //   "angular-ui-router": "~0.2.13",
  //   "bootstrap-sass-official": "~3.3.3",
  //   "angular-bootstrap": "0.12.x"
  // },
  // "devDependencies": {
  //   "angular-mocks": "~1.2.28"
  // },
  // "resolutions": {
  //   "jquery": "~1.11.1",
  //   "angular": "~1.2.28"
  // }
