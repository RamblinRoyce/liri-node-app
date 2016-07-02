<<<<<<< HEAD
# liri-node-app
UT Coding Bootcamp Homework Week 10 - LIRI Bot - Language Interpretation and Recognition Interface
=======

To whom it may concern:

In GitBash:
* 1 Please run npm install
* 2 $ node liri.js my-tweets  
  (doesn't work, couldn't parse out the response data.  tried stringify/parse separate and together)
* 3 $ node liri.js spotify-this-song 'song name'   
  (coudn't get damn spotify to return any response data. downloaded one of the developer's https://github.com/thelinmichael/spotify-web-api-node and tried running his code and couldn't get it to work)
* 4 $ node liri.js movie-this 'movie name'  
  (sorta works)
* 5 $ node liri.js do-what-it-says  
  (sorta works)

The code is sloppy and there's more code commented out than actual functional code.  I didn't have time to clean it up but I also wanted you to see my testing/coding process.  If i were being paid (aka if i cared more) i like to think i'd be able to apply myself more. But i'm starting to wonder if i'd be more suited to data science and/or project management instead of coding...guess that's "imposter syndrome".


In pseudocode,  
I would've liked to create functions for each method such as function tweets(), function spotify(), function movie(), ... and then create the boolean statements to call the functions.   
For the do-what-it-says, I'd parse out the text in the random.txt file using fs.readFile, and then pass the command and argument into the necessary functions, again based on booleans.


In reality code,  
I don't have the skills yet to accomplish the pseudocode.


// = = = = = = = BEGIN TO DO LIST = = = = = = =   
// X = completed  
// 1, 2, 3, ... = priority list 
//  
// 3. fix my-tweets errors  
//    getting response data, can't parse it out 
//    get latest 20 tweets  
// 2. spotify-this-song   
//    can't get response data 
//    research npm spotify and develop json.parse 
// 4. movie-this  
//    add movie check if title = "undefined" then run mr. nobody  
// 1. do-what-it-says 
//    research read, write, ... and develop 
// 6. log file (Bonus)  
//    research write, append, ... and develop 
// 5. JSON Package  
//    getting errors  
//    research and develop so npm packages twitter, request, spotify, fs, ... are installed 
// = = = = = = = END TO DO LIST = = = = = = =   
