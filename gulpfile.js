
var fs = require('fs');
var gulp = require('gulp');
var rename = require('gulp-rename');
var basswork = require('gulp-basswork');
var minifyCss = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var cssstats = require('gulp-cssstats');
var s3 = require('gulp-s3');
var gzip = require('gulp-gzip');
var Humanize = require('humanize-plus');
var through = require('through2');
var _ = require('lodash');
var geomicons = require('geomicons-open');
var cheerio = require('cheerio');

//var Autobass = require('autobass');

gulp.task('css', function() {
  gulp.src('./src/*.css')
    .pipe(basswork())
    .pipe(gulp.dest('./css'))
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'))
    .pipe(gzip())
    .pipe(rename({ extname: '.gz' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('stats', function() {
  gulp.src('./css/*.css')
    .pipe(cssstats())
    .pipe(gulp.dest('./stats'));
});

gulp.task('build', function() {
  var tpl = fs.readFileSync('./layouts/index.html', 'utf8');
  var data = require('./package.json');
  data.icon = function(key, options) {
    var options = options || {};
    var $ = cheerio.load(geomicons.toString(key));
    $('svg').addClass(options.className);
    return $.html();
  };
  data.colors = [
    'black',
    'navy',
    'blue',
    'aqua',
    'teal',
    'olive',
    'green',
    'lime',
    'yellow',
    'orange',
    'red',
    'maroon',
    'fuchsia',
    'purple',
  ];
  data.cdn = '//d2v52k3cl9vedd.cloudfront.net/blk/' + data.version + '/blk.min.css';

  // Development
  //data.cdn = '/css/blk.css';

  data.stats = require('./stats/blk.json');
  data.number = function(n) {
    return Humanize.formatNumber(n);
  };
  data.filesize = function(n) {
    return Humanize.filesize(n);
  };
  data.coreStats = require('./stats/blk-core.json');
  var typographySectionTpl = _.template(fs.readFileSync('./partials/typography-section.html', 'utf8'));
  data.partials = {
    typographySection: function(locals) {
      // color, background, dark, reverse
      _.assign({
        color: 'black',
        background: false,
        dark: false,
        reverse: false
      }, locals);
      return typographySectionTpl(locals);
    },
  };
  var compile = function() {
    return through.obj(function(file, encoding, callback) {
      var src = file.contents.toString();
      data.content = _.template(src, data);
      var html = _.template(tpl, data);
      file.contents = new Buffer(html);
      this.push(file);
      callback();
    });
  };
  gulp.src('./views/**/*.html')
    .pipe(compile())
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
    .pipe(s3(config, {
      uploadPath: 'blk/' + version + '/'
    }));
});

gulp.task('default', ['css', 'serve', 'stats', 'build'], function() {
  gulp.watch(['./src/**/*', './views/**/*', './layouts/**/*'], ['css', 'stats', 'build']);
});

