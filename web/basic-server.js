var http = require("http");
var handler = require("./request-handler");
var httpHelpers = require('./http-helpers');


var getRoutes = {
  '/': handler.getIndex,
  '/sites': handler.getArchive
};

var postRoutes = {
  '/': handler.postIndex
};
 // 'www.google.com': handler.handleRequest

router = function(request, response){
  var url = request.url || '/';
  var urlPieces = url.split('/');
  var argument = urlPieces.slice(2).join('/');
  var status = 200;
  var routeMethod;

  if(request.method === 'GET'){
    routeMethod = getRoutes['/'+urlPieces[1]];
  } else if (request.method === 'POST'){
    routeMethod = postRoutes['/'+urlPieces[1]];
  }
  if(!routeMethod){
    httpHelpers.noPageFound(response);
  } else{
    response.writeHead(status, httpHelpers.headers);
    routeMethod.call(this, request, response, argument);
  }
};

var port = 8080;
var ip = "127.0.0.1";
var server = http.createServer(router);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

