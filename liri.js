require("dotenv").config();


//Spotify Keys
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var song = process.argv.slice(2).join(" ");
// console.log(keys.spotify); 

spotify.search({ type: 'track', query: song }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
// console.log(data.tracks.items[0]); 


var tableArray = [];

            for (var i = 0; i < data.tracks.items.length; i++ ) {
                var result = {
                    artist : data.tracks.items[i].album.artists[0].name,
                    album_name : data.tracks.items[i].album.name,
                    song_name : data.tracks.items[i].name,
                    preview_url : data.tracks.items[i].preview_url 
                }
                tableArray.push(result);
            }
      
            
    
            console.log("Artist: " + result.artist);
            console.log("Song: " + result.song_name);
            console.log("Album: " + result.album_name);
            console.log("Preview: " + result.preview_url);
    
});
