
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

// = = = = = = = BEGIN TO DO LIST = = = = = = = 
// X = completed
// fix my-tweets errors
// 		get latest 20 tweets
// spotify-this-song
// 		research npm spotify and develop json.parse
// movie-this
// do-what-it-says
// 		research read, write, ... and develop
// log file
// 		research write, append, ... and develop
// JSON Package 
// 		research and develop so npm packages twitter, request, spotify, ... are installed
// = = = = = = = END TO DO LIST = = = = = = = 


// = = = = = = = END INSTRUCTIONS = = = = = = = 



// = = = = = = = BEGIN CODE = = = = = = = 
var twitterKeys = require('./keys.js');

// Takes in all of the command line arguments
	var inputString = process.argv;

// Parses the command line argument 
// Command Instructions possibilities: my-tweets, spotify-this-song, movie-this, do-what-it-says
	var cmdinstr = inputString[2];
	var num1 = inputString[3];	
	var num2 = inputString[4];

// Here's the variable we will be modifying with the new numbers
	var output;

// VARIABLES - MAY NOT NEED CUZ USE OBJECT CALLS VIA AJAX
	// my-tweets
		var tweets = ""
		var username ="RamblinRoyce"

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
// if (cmdinstr !== "my-tweets") {
// 	console.log("Command not recognized.\n Please enter one of the following commands: \n my-tweets \n spotify-this-song 'song name' \n movie-this 'movie name' \n do-what-it-says");

// }

// Determines the cmdinstr selected...
if (cmdinstr == "my-tweets") {
	// twitter data for last 20 tweets
	// var queryUrl = "https://twitter.com/" + username;
	// console.log(queryUrl)


	// = = = TEST FUNCTIONS = = = 
	// outputNum = parseFloat(num1) + parseFloat(num2);
	// console.log(outputNum)

	// console.log("--------------------------");
	// console.log("ALL THE STUFF I NEED");
	// console.log(twitterKeys);
	// console.log("--------------------------");
	// = = = END TEST FUNCTIONS = = = 
	
	// Include the twitter npm package (Don't forget to run "npm install twitter" in this folder first!)
	// var request = require('request');

		var Twitter = require('twitter');
 
			var client = new Twitter({
				twitterKeys
			  // twitterKeys.consumer_key;
			  // twitterKeys.consumer_secret;
			  // twitterKeys.access_token_key;
			  // twitterKeys.access_token_secret;
			  // consumer_key: 'rx8JsjFjuY2yCx0jemVtx4dth',
  			//   consumer_secret: 'emBy5jBDWT4PQzkop7kvF4pCuIdicsnXg5RCQLiRG5CQ5DMQnX',
  			//   access_token_key: '184956482-YvpiXNlyLVNohwFKaKt4vcUg1CWUNzgRg7YYeIvu',
  			//   access_token_secret: 'wBQhXAmfmvqAIwybeC4G7fLAEMIIXZBcp1fVM7PXCDvZY'
			});
 
			var params = {screen_name: 'RamblinRoyce'};
			client.get('statuses/user_timeline', params, function(error, tweets, response){
			  if (!error) {
			    console.log(tweets);
			  } else {
			  	console.log("error");
			  }
			});

		


	
	// append command and results to log.txt 

} else if (cmdinstr == "spotify-this-song") {
	// AJAX spotify data
	outputNum = parseFloat(num1) - parseFloat(num2);
	
	// if no response data, then 
	// return "what's my age again" by blink 182

	// append command and results to log.txt 

} else if (cmdinstr == "movie-this") {
	// AJAX request/OMDB data
	
	// = = = TEST FUNCTIONS = = = 
	// outputNum = parseFloat(num1) + parseFloat(num2);
	// console.log(outputNum)
	// = = = END TEST FUNCTIONS = = = 

	// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
	var request = require('request');

	// Store all of the arguments in an array 
	var nodeArgs = process.argv;

	// Create an empty variable for holding the movie name
	var movieName = "";

	// Loop through all the words in the node argument
	// And do a little for-loop magic to handle the inclusion of "+"s
	for (var i=3; i<nodeArgs.length; i++){
		if (i>3 && i< nodeArgs.length){
			movieName = movieName + "+" + nodeArgs[i];
		}
		else {
			movieName = movieName + nodeArgs[i];
		}
	}

	// Then run a request to the OMDB API with the movie specified 
	var queryUrl = 'http://www.omdbapi.com/?t=' + movieName +'&y=&plot=short&r=json&tomatoes=true';

	// This line is just to help us debug against the actual URL.  
	// console.log(queryUrl);

	request(queryUrl, function (error, response, body) {

		// If the request is successful (i.e. if the response status code is 200)
		if (!error && response.statusCode == 200) {

			// Parse the body of the site and recover just the imdbRating
			// (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it). 
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

			console.log(response)
			console.log("Title: " + JSON.parse(body)["Title"])
			console.log("Release Year: " + JSON.parse(body)["Year"])
		}
	});


	// if no response data, then 
	// if no movie is provided then the program will output information for the movie: 'Mr. Nobody'

	// append command and results to log.txt 



} else if (cmdinstr == "do-what-it-says") {
	// Using the fs package in node, the program would take the text inside of random.txt and use it to call the first command with the second part as it's parameter
	// Currently in random.txt, the following text is there:
	// spotify-this-song,"I Want it That Way"
	// so according to those instructions, you would call the appropriate function and pass in "I Want it That Way" as the song.
	outputNum = parseFloat(num1) / parseFloat(num2);
	// to simplify, create functions for all cmdinstr so can call necessary function and not have to copy/paste code into this if statement

	// append command and results to log.txt 

} else {
	// respond with "command not found, please use my-tweets, spotify-this-song, movie-this, or do-what-it-says"
	// console.log("command not found, please use my-tweets, spotify-this-song, movie-this, or do-what-it-says")

	console.log("Command not recognized.\n Please enter one of the following commands: \n my-tweets \n spotify-this-song 'song name' \n movie-this 'movie name' \n do-what-it-says");

	// append command and results to log.txt 
}
