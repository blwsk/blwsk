var gulp = require('gulp');
var webpack = require('gulp-webpack');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var uglifycss = require('gulp-uglifycss');


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
    .pipe(gulp.dest('static/build/js/'));
});


gulp.task('sass', function() {
  return gulp.src('static/css/*.scss')
    .pipe(sass())
    .pipe(concatCss('style.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('static/build/css'));
});


gulp.task('watch', function() {
  gulp.watch('static/css/*.scss', ['sass']);
});


gulp.task('default', ['webpack', 'watch']);