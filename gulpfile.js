var gulp = require('gulp');
var fs = require('fs');
var utils = require('./server/utils');
var webpack = require('webpack-stream');
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

  return gulp.src('src/main.jsx')
    .pipe(webpack(webpackConfig))
    .pipe(uglify())
    .pipe(gulp.dest('static/build/js/'));
});


//  scss
gulp.task('scss', function() {
  return gulp.src('static/css/*.scss')
    .pipe(sass())
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
    build index.html file for production
  */

  var awsConfig = JSON.parse(fs.readFileSync('./config/aws.json'));

  /*
  var time = Date.now();
  var cssString = time + '.css';
  var jsString = time + '.js';

  // prepare build/index.html
  var f = fs.readFileSync('static/index.html', {encoding: 'utf8'});
  f = utils.replaceAll('build/', 'http://d1xkznn4xi27rh.cloudfront.net/', f);
  f = utils.replaceAll('style.css', cssString, f);
  f = utils.replaceAll('app.js', jsString, f);
  fs.writeFileSync('static/build/index.html', f);

  // prepare css
  var cssFiles = fs.readdirSync('static/build/css');
  for (var i=0; i<cssFiles.length; i++)
    if (cssFiles[i] != 'style.css')
      fs.unlinkSync('static/build/css/' + cssFiles[i]);
  var c = fs.renameSync('static/build/css/style.css', 'static/build/css/' + cssString);

  // ...and js
  var jsFiles = fs.readdirSync('static/build/js');
  for (var i=0; i<jsFiles.length; i++)
    if (jsFiles[i] != 'app.js')
      fs.unlinkSync('static/build/js/' + jsFiles[i]);
  var j = fs.renameSync('static/build/js/app.js', 'static/build/js/' + jsString);
  */

  // upload
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