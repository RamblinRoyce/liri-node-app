
// Make a JavaScript file named liri.js

// At the top of the liri.js file make it so you grab the data from keys.js and store it into a variable to use

// Make it so liri.js can take in one of the following arguments

// my-tweets

// spotify-this-song

// movie-this

// do-what-it-says

// So if you succeed, running the following commands in your terminal will do the followig things

// node liri.js my-tweets
// will show your last 20 tweets and when they were created at in the terminal
// node liri.js spotify-this-song '<song name here>'
// shows the following information about the song in the terminal

// artist(s)
// song name
// preview link of the song from spotify
// album that the song is a part of
// song name
// if no song is provided then your program will default to

// "what's my age again" by blink 182
// node liri.js movie-this '<movie name here>'
// this would output the following information to the terminal:

// Title
// Year
// IMDB Rating
// Country
// Language
// Plot
// Actors
// Rotten Tomatoes Rating
// Rotton Tomatoes UrL

// if no movie is provided then the program will output information for the movie: 'Mr. Nobody'

// if you haven't watched Mr. Nobody then you should: http://www.imdb.com/title/tt0485947/
// You can catch it on Netflix
// node liri.js do-what-it-says 
// Using the fs package in node, the program would take the text inside of random.txt and use it to call the first command with the second part as it's parameter

// Currently in random.txt, the following text is there:

// spotify-this-song,"I Want it That Way"
// so according to those instructions, you would call the appropriate function and pass in "I Want it That Way" as the song.

// This should work for any function and paramter you use.

// To get the data for the above things you'll have to use the following npm packages:

// twitter
// spotify
// request

// The request npm package will be used to hit the OMDB API
// OMDB API
// to install these npm packages run these commands one at a time.

// npm install twitter
// npm install spotify
// npm install request
// BONUS
// In addition to outputting the data to the terminal, also output all data to a txt file called log.txt

// Make sure that each command you run gets appended to the log.txt file.

// Your log.txt file should not be overwritten each time you run a command.

// Copyright
// Coding Boot Camp (C) 2015. All Rights Reserved.


// use if then statements
// ? incorporate API's & AJAX queryurl calls for Twitter, Spotify, 
// use npm packages for twitter, sportify, request

var twitterKeys = require('./keys.js');

// Command Instructions possibilities: my-tweets, spotify-this-song, movie-this, do-what-it-says
var cmdinstr = inputString[2];
var num1 	= inputString[3];	
var num2	= inputString[4];

// Here's the variable we will be modifying with the new numbers
var output;

// OUTPUT VARIABLES - MAY NOT NEED CUZ USE OBJECT CALLS VIA AJAX
	// my-tweets
		var tweets = ""

	// spotify-this-song
		// artist(s)
		// song name
		// preview link of the song from spotify
		// album that the song is a part of
		// song name
		var artist = ""
		var songname = ""
		var link = ""
		var album = ""

	// movie-this
		// * Title
		// * Year
		// * IMDB Rating
		// * Country
		// * Language
		// * Plot
		// * Actors
		// * Rotten Tomatoes Rating 
		// * Rotton Tomatoes UrL
		var title = ""
		var year = 0
		var imdbRating = 0
		var country = ""
		var language = ""
		var plot = ""
		var actors = ""
		var rottenRating = ""
		var rotUrl = ""

	// do-what-it-says


// verify command instructions
if (cmdinstr !== "my-tweets") {
	console.log("Command not recognized.\n Please enter one of the following commands: \n my-tweets \n spotify-this-song 'song name' \n movie-this 'movie name' \n do-what-it-says");
	
}

// Determines the cmdinstr selected...
if (cmdinstr == "my-tweets"){
	// AJAX twitter data for last 20 tweets
	outputNum = parseFloat(num1) + parseFloat(num2);

	// append command and results to log.txt 
}

else if (cmdinstr == "spotify-this-song"){
	// AJAX spotify data
	outputNum = parseFloat(num1) - parseFloat(num2);
	
	// if no response data, then 
	// return "what's my age again" by blink 182

	// append command and results to log.txt 

}

else if (cmdinstr == "movie-this"){
	// AJAX request/OMDB data
	outputNum = parseFloat(num1) * parseFloat(num2);
	
	// if no response data, then 
	// if no movie is provided then the program will output information for the movie: 'Mr. Nobody'

	// append command and results to log.txt 
}

else if (cmdinstr == "do-what-it-says"){
	// Using the fs package in node, the program would take the text inside of random.txt and use it to call the first command with the second part as it's parameter
	// Currently in random.txt, the following text is there:
	// spotify-this-song,"I Want it That Way"
	// so according to those instructions, you would call the appropriate function and pass in "I Want it That Way" as the song.
	outputNum = parseFloat(num1) / parseFloat(num2);
	// to simplify, create functions for all cmdinstr so can call necessary function and not have to copy/paste code into this if statement

	// append command and results to log.txt 

}

else (){
	// respond with "command not found, please use my-tweets, spotify-this-song, movie-this, or do-what-it-says"
	console.log("command not found, please use my-tweets, spotify-this-song, movie-this, or do-what-it-says")

	// append command and results to log.txt 
}
