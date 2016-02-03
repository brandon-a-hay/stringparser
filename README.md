This project was built using angular-seed https://github.com/angular/angular-seed

## Getting Started

Clone the repository:

```
git clone https://github.com/brandon-a-hay/stringparser.git
cd stringparser
```

Install node packages

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/`.

# String Parser class

### Properties

string - The string to be parsed.

caseSensitive - If true, then we treat different cased characters in the string as unique (a vs. A).

mostFrequentChar - The most frequent character that occurs in the string.

leastFrequentChar - The least frequent character that occurs in the string.

### Methods

StringParser.prototype.givenOccurences - returns an integer representing the number of times a character appears in a string

StringParser.prototype.getFrequency - gets the most and least frequent characters in a string

The string parser class can be found at app/stringParser/stringParser.js. It is designed to take an input string and return the most and least frequent character in that string.

You can also call it's methods using StringParser.prototype.method()
