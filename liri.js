require("dotenv").config();


//Spotify Keys
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

// console.log(keys);
// var spotify = new Spotify(keys.spotify);



// var song = process.argv.slice(2).join(" ");

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: e2cdd6a42f4f4669aab9337cc3a6ed06,
  secret: 35f5dd7986c1480aa4ad72c5bba40d03
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
