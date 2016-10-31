
"use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    purify = require('gulp-purifycss'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    rev = require('gulp-rev-append'),   //cashing
    connectPHP = require('gulp-connect-php'),
    browserSync = require('browser-sync').create();


gulp.task('serve', ['styles', 'scripts'], function() {
    browserSync.init({
        server: "./build",
        port:8000
    });
});


gulp.task('styles', function () {
  gulp.src('./src/sass/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
    //.pipe(sourcemaps.write())
    //.pipe(plumber())
    //.pipe(purify(['./build/js/*.js']))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream());
});

gulp.task('css', function() {
  return gulp.src('./build/css/*.css')
    .pipe(purify(['./build/js/*.js', './build/*.php']))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('scripts', function() {
  return gulp.src(['./src/js/*.js'])
    //.pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'))
    .pipe(browserSync.stream());
});

gulp.task('rev', function() {
  gulp.src('./build/index.php')
    .pipe(rev())
    .pipe(gulp.dest('./build/'));
});


gulp.task('watch', function() {
  gulp.watch('./src/sass/**/*.*', ['styles']);
  gulp.watch(['./src/js/functions.js'], ['scripts']);
  gulp.watch("./build/*.*").on('change', browserSync.reload);
});

gulp.task('builder', ['styles', 'scripts']);

gulp.task('default', ['serve', 'watch']);
