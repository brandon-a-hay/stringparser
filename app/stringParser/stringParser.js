'use strict';

angular.module('myApp.stringParser', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/stringparser', {
    templateUrl: 'stringParser/stringParser.html',
    controller: 'stringParserCtrl as vm'
  });
}])

.controller('stringParserCtrl', stringParserCtrl);
function stringParserCtrl () {
  var self = this;
  // user input of a string
  self.string = '';
  self.caseSensitive = false;
  self.mostFrequentChar = '';
  self.leastFrequentChar = '';

  self.getFrequency = function () {
    // instantiate a new string parser class
    self.stringParser = new StringParser(self.string, self.caseSensitive);
    // get frequency
    self.stringParser.getFrequency(self.stringParser.string);
  }
  
  // my string parser "class"
  function StringParser (str, caseSensitive) {

    // class properties
    this.caseSensitive = caseSensitive;
    this.mostFrequentChar = '';
    this.leastFrequentChar = '';
    // strip out whitespace from the string to parse
    this.string = str.replace(/\s/g, '');
    // downcase the string if user doesn't want it to be case sensitive
    if (this.caseSensitive == false) {
      this.string = this.string.toLowerCase();
    }

  };

  // returns the number of times a given character occurs in a string
  StringParser.prototype.givenOccurences = function (char, str) {
    var occurences = 0;
    var i = 0;
    for(i; i < str.length; i ++) {
      if (str[i] == char) {
        occurences += 1;
      }
    }
    return occurences;
  };
  
  // gets the least and most frequent characters in the string
  StringParser.prototype.getFrequency = function (str) {
    var i = 0;
    var characterCounts = {};
    var mostFrequent = "";
    var leastFrequent = "";
    for (i; i < str.length; i ++) {
      var key = str[i];
      if (!characterCounts[key]) {
        characterCounts[key] = 0;
        characterCounts[key] += StringParser.prototype.givenOccurences(key, str);
      }
      if (mostFrequent == "" || characterCounts[key] > characterCounts[mostFrequent]) {
        mostFrequent = key;
      }
      if (leastFrequent == "" || characterCounts[key] < characterCounts[leastFrequent]) {
        leastFrequent = key;
      }
    }
    self.mostFrequentChar = mostFrequent;
    self.leastFrequentChar = leastFrequent;
    console.log("Most frequent character is " + mostFrequent);
    console.log("Least frequent character is " + leastFrequent);
  };

}