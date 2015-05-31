var fs = require('fs');

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var uglifycss = require('gulp-uglifycss');
var s3 = require('gulp-s3');


var webpackConfig = {
  watch: true,
  watchDelay: 200,
  output: {
    filename: "index.js"
  }
};

gulp.task("webpack", function() {
  return gulp.src('static/js/main.js')
    .pipe(webpack(webpackConfig))
    .pipe(uglify())
    .pipe(gulp.dest('static/build/js/'));
});


gulp.task('sass', function() {
  return gulp.src('static/css/*.scss')
    .pipe(sass())
    //.pipe(concatCss('style.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('static/build/css'));
});


/*
  watch
*/
gulp.task('watch', function() {
  gulp.watch('static/css/*.scss', ['sass']);
});


/*
  aws
*/
function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}

var aws = JSON.parse(fs.readFileSync('./aws.json'));

fs.readFile('static/index.html', {encoding: 'utf8'}, function(err, data) {
  if (err) throw err;

  // replace relative path with cloudfront url
  var newFile = replaceAll('../build/', 'http://d1xkznn4xi27rh.cloudfront.net/', data);

  // write to new file in static/build directory
  fs.writeFileSync('static/build/index.html', newFile);
});
gulp.task('aws', function() {
  return gulp.src('static/build/**')
    .pipe(s3(aws));
});


/*
  default
*/
gulp.task('default', ['webpack', 'watch']);