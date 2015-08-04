var gulp = require('gulp');
var fs = require('fs');
var utils = require('./server/utils');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var uglifycss = require('gulp-uglifycss');
var s3 = require('gulp-s3');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');


//  webpack
gulp.task("webpack", function() {
  var webpackConfig = require('./config/webpack.config.js');

  return gulp.src('src/app.jsx')
    .pipe(webpack(webpackConfig))
    //.pipe(uglify())
    .pipe(gulp.dest('static/build/js/'));
});


//  scss
gulp.task('scss', function() {
  return gulp.src('static/css/*.scss')
    .pipe(sass())
    //.pipe(concatCss('style.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('static/build/css'));
});


//  watch
gulp.task('watch', function() {
  gulp.watch('static/css/*.scss', ['scss']);
});


//  aws
gulp.task('aws', function() {
  /*
    Invalidating objects removes them from CloudFront edge caches.
    A faster and less expensive method is to use versioned object or directory names.

    TODO:
      use current unix time as version stamp
      create and push styleXXXXXXXXX...css to S3
      won't have to invalidate style.css
  */

  var awsConfig = JSON.parse(fs.readFileSync('./config/aws.json'));
  var oldFile = fs.readFileSync('static/index.html', {encoding: 'utf8'});
  var newFile = utils.replaceAll('build/', 'http://d1xkznn4xi27rh.cloudfront.net/', oldFile);
  fs.writeFileSync('static/build/index.html', newFile);

  return gulp.src('static/build/**')
    .pipe(s3(awsConfig));
});


//  server
gulp.task('start', function() {
  nodemon({
    script: 'server/app.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' } 
  });
});


gulp.task('default', ['webpack', 'watch', 'start']);