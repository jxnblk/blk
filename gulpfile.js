
var gulp = require('gulp');
var rename = require('gulp-rename');
var basswork = require('gulp-basswork');
var minifyCss = require('gulp-minify-css');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var cssstats = require('gulp-css-statistics');
var handlebars = require('gulp-compile-handlebars');
var s3 = require('gulp-s3');
var gzip = require('gulp-gzip');
var Humanize = require('humanize-plus');

gulp.task('css', function() {
  gulp.src('./src/css/*.css')
    .pipe(basswork())
    .pipe(gulp.dest('./css'))
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'))
    .pipe(gzip())
    .pipe(rename({ extname: '.gz' }))
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
  model.blk = require('./stats/blk.json');
  model.blkCore = require('./stats/blk-core.json');
  gulp.src('./views/**/*.hbs')
    .pipe(handlebars(model, {
      helpers: {
        filesize: function(string) {
          return Humanize.fileSize(string);
        }
      }
    }))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('.'));
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({}));
});

gulp.task('s3', function() {
  var version = require('./package.json').version;
  var config = require('./aws.json');
  gulp.src('./css/*.css')
    .pipe(rename({ prefix: version + '-' }))
    .pipe(s3(config, {
      uploadPath: 'blk/'
    }));
});

gulp.task('default', ['css', 'js', 'serve', 'stats', 'build'], function() {
  gulp.watch(['./src/**/*', './views/**/*'], ['css', 'js', 'stats', 'build']);
});

