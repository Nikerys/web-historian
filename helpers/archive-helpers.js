var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(done) {
  //1) Input: callback aka done; Output: array of strings; No side effects
  //2)This function will read the text file and output array of strings
  //3)This function will read the text file and output array of strings 
  //  Where every item of array is a line in the text file, and every line
  //  consist of one URL
  //4)Diagram
  //5)Utilize fs library's Read file command that takes 'sites.txt' as its 
  //  first argument, 'utf8' as its second argument and callback as a third
  //  argument. 
  //    Inside the callback function if it encounter error 
  //      Let User know about it through console.log and run done on error
  //    Otherwise, let user know that file was successfuly read
  //    return an array that contains the content split by '\n' newline
  //    run done on error and array
};

exports.isUrlInList = function(url, callback) {
};

exports.addUrlToList = function(url, callback) {
};

exports.isUrlArchived = function(url, callback) {
};

exports.downloadUrls = function(urls) {
};
