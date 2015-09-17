var gulp = require('gulp');
var fs = require('fs');
var webpack = require('webpack-stream');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var s3 = require('gulp-s3');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var autoprefixer = require('gulp-autoprefixer');


//  webpack
gulp.task("webpack", function() {
  var webpackConfig = require('./config/webpack.config.js');

  return gulp.src('src/client.jsx')
    .pipe(webpack(webpackConfig))
    //.pipe(uglify())
    .pipe(gulp.dest('build/js/'));
});


//  scss
gulp.task('scss', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    //.pipe(uglifycss())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('build/css'));
});


//  watch
gulp.task('watch', function() {
  gulp.watch('src/scss/*.scss', ['scss']);
});


//  aws
gulp.task('aws', function() {
  var awsConfig = JSON.parse(fs.readFileSync('./config/aws.json'));
  
  return gulp.src('static/media/**')
    .pipe(s3(awsConfig));
});


//  server
gulp.task('start', function() {
  nodemon({
    script: 'server/server.js',
    ext: 'js jsx html',
    env: { 'NODE_ENV': 'development' } 
  });
});


gulp.task('default', ['webpack', 'watch', 'start']);