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

exports.readListOfUrls = function(callback) {
  //1) Input: callback; Output: callback function result; No side effects
  //2)This function will read the text file and output callback function result
  //3)This function will read the text file and output callback function result which in our  case is an array of strings 
  //  Where every item of array is a line in the text file, and every line
  //  consist of one URL
  //4)Diagram
  //5)Utilize fs library's Read file command that takes 'sites.txt' which is stored inside the variable object paths as its 
  //  first argument, 'utf8' as its second argument and callback as a third argument. 
  //    Inside the callback function if it encounter error 
  //      Let User know about it through console.log
  //    Otherwise, let user know that file was successfuly read
  //      return an array that contains the content split by '\n' newline
  //      run callback on array
  //6)Verified on the board
  fs.readFile(this.paths.list, 'utf8', function (err, content) {
    //console.log('Example from callbackReview.js');
    if (err) {
      console.log('fs.readFile failed :(\n', err);
    } else {
      console.log('fs.readFile successfully completed:)\n', content);
      var arr = content.split('\n');
      callback(arr);
    }
  });
};

exports.isUrlInList = function(url, callback) {
  //1) Input 1 Url, 1 Callback; Output result of a callback
        //No side effects
  //2) This function will accept url and callback, read list of all urls
  //   check if url in this list and run callback on that result
  //3) This function will accept url and callback, utilize readListOfUrls helper function
  //   check if url in the list, return true if it is and false if it isn't.
  //   It will then run callback on that result
  //4) Diagram
  //5) create a variable result and assign it to the fnc readListOfUrls
  //     callback of readListOfUrls will accept array and use outter callback on result-boolean 
  //      true if url inside the array and false if not
  //6)Verified
  var flag = false;
  this.readListOfUrls(function(array) {
    for (let i = 0; i < array.length; i++) {
      if (url === array[i]) {
        flag = true;      
      }
    }
    callback(flag);
  });
};

exports.addUrlToList = function(url, callback) {
  //1)Input url and callback; Output - none, side effect - potentially will change sites.txt file
  //2)This fnc will add new url to sites.txt if it didn't find it there
  //3)If sites.txt doesn't have url in it, this fnc will add url on the new line
  //4)Diagram 
  //5)run isUrlInList fnc; pass url and in the callback depending of the outcome:
  //  if outcome is true then do nothing, if false 
      // utilize fs.writeFileSync to add url and new line character
      //to the sites.txt
  //6)Verified

  this.isUrlInList(url, function(bool) {
    if (bool === false) {
      var newline = url.concat('\n');
      console.log('1-NEWLINE');
      fs.appendFile(exports.paths.list, newline, () => { callback(); console.log('THIS SHOULD WORK'); });
    }
  });
};

exports.isUrlArchived = function(url, callback) {
};

exports.downloadUrls = function(urls) {
};




















