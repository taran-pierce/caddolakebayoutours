'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/css'))
    .pipe(livereload());
});

// TODO fix broken ass livereload
var options = {
  'port': 3000,
  'host': 'localhost',
}
 
gulp.task('sass:watch', function () {
  livereload.listen(options);
  gulp.watch('./styles/**/*.scss', gulp.series('sass'));
});



gulp.task('default', gulp.series('sass:watch'));