require("dotenv").config();


//Spotify Keys
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

// console.log(keys);
// var spotify = new Spotify(keys.spotify);



// var song = process.argv.slice(2).join(" ");

 
var spotify = new Spotify(keys.spotify);
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
