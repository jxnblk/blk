
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var cssstats = require('cssstats');
var data = require('./package.json');
var colorsCss = require('colors.css');
var filesize = require('filesize');
var css = fs.readFileSync('css/blk.min.css', 'utf8');

var tpl = _.template(fs.readFileSync('template.html', 'utf8'));

data.colors = Object.keys(colorsCss);
data.styles = css;
data.stats = cssstats(css);
data.filesize = filesize;

data.partials = {
  typography: _.template(fs.readFileSync('partials/typography-section.html', 'utf8'))
};

data.include = function(name, locals) {
  return data.partials[name](locals);
}

var html = tpl(data);

fs.writeFileSync('index.html', html);

