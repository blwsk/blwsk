var gulp = require('gulp');
var fs = require('fs');
var utils = require('./utils/utils');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var uglifycss = require('gulp-uglifycss');
var s3 = require('gulp-s3');


//  webpack
gulp.task("webpack", function() {
  var webpackConfig = JSON.parse(fs.readFileSync('./config/webpack.json'));

  return gulp.src('static/js/main.js')
    .pipe(webpack(webpackConfig))
    .pipe(uglify())
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
  var awsConfig = JSON.parse(fs.readFileSync('./config/aws.json'));
  var oldFile = fs.readFileSync('static/index.html', {encoding: 'utf8'});
  var newFile = utils.replaceAll('../build/', 'http://d1xkznn4xi27rh.cloudfront.net/', oldFile);
  fs.writeFileSync('static/build/index.html', newFile);

  return gulp.src('static/build/**')
    .pipe(s3(awsConfig));
});


gulp.task('default', ['webpack', 'watch']);