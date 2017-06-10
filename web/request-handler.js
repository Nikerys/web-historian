var path = require('path');
var archive = require('../helpers/archive-helpers');
var utils = require('./http-helpers');
// require more modules/folders here!



var actions = {
  'GET': function(request, response) {
    utils.sendResponse(response, {results: messages});  
  }
  // 'POST': function(request, response) {
  //   utils.collectData(request, function(message) {
  //     messages.push(message);
  //     message.objectId = ++objectId;
  //     utils.sendResponse(response, {objectId: 1}, 201);  
  //   });
  // }
};





exports.handleRequest = function (req, res) {

  var action = actions[request.method];

  if (action) {
    //Before we send response to user we need to check
    //our database

    action(request, response);
  } else {
    utils.sendResponse(response, 'Not Found', 404);
  }


  // res.end(archive.paths.list);
};
