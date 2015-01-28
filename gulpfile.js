var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var uglifycss = require('gulp-uglifycss');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


/*
  scss stylesheets
*/
gulp.task('sass', function() {
  return gulp.src('public/css/*.scss')
    .pipe(sass())
    .pipe(concatCss('style.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('public/css'));
});

/*
  browserify, uglify
*/
gulp.task('browserify', function() {
  return browserify('./public/scripts/main.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./public/scripts'));
});

/*
  watch .scss files
*/
gulp.task('watch', function() {
  gulp.watch('public/css/*.scss', ['sass']);
});


gulp.task('default', ['watch']);