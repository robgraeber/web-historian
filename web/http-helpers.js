var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(response, asset) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  fs.readFile(__dirname + asset, function read(err, data) {
    if (err) {
      noPageFound(response);
      return;
    }
    response.end(data);
  });
};

exports.noPageFound = noPageFound = function(response){
  var status = 404;
  response.writeHead(status, headers);
  response.end('404');
};

// As you progress, keep thinking about what helper functions you can put here!
