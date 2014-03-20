var path = require('path');
var httpHelpers = require('./http-helpers');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  res.end(archive.paths.list);
};

exports.getIndex = function (req, res) {
  httpHelpers.serveAssets(res, '/public/index.html');
};

exports.postIndex = function (req, res) {
  httpHelpers.serveAssets(res, '/public/loading.html');
};

exports.getArchive = function (req, res, url) {
  httpHelpers.serveAssets(res, '/../archives/sites/' + url);
};
