
var gulp = require('gulp');
var rename = require('gulp-rename');
var basswork = require('gulp-basswork');
var minifyCss = require('gulp-minify-css');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var cssstats = require('gulp-css-statistics');
var handlebars = require('gulp-compile-handlebars');

gulp.task('css', function() {
  gulp.src('./src/css/*.css')
    .pipe(basswork())
    .pipe(gulp.dest('./css'))
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('js', function() {
  gulp.src('./src/js/app.js')
    .pipe(browserify())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./js'));
});

gulp.task('stats', function() {
  gulp.src('./css/*.css')
    .pipe(cssstats())
    .pipe(gulp.dest('./stats'));
});

gulp.task('build', function() {
  var model = {};
  model.blk = require('./stats/base.json');
  model.blkCore = require('./stats/base-core.json');
  gulp.src('./views/**/*.hbs')
    .pipe(handlebars(model))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('.'));
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({}));
});

gulp.task('default', ['css', 'js', 'serve', 'stats', 'build'], function() {
  gulp.watch(['./src/**/*', './views/**/*'], ['css', 'js', 'stats', 'build']);
});

