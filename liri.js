require("dotenv").config();


//Spotoify Keys
var keys = require("./keys.js");
var spotify = require('node-spotify-api');

console.log(keys);
var spotify = new spotify(keys.spotify);



// // var song = process.argv.slice(3).join(" ");


// var result = spotify.search: function({ type: 'artist OR album OR track', query: 'My search query' }, hollaback)


// var spotify = require('spotify');

spotify.search({ type: 'track', query: 'dancing in the moonlight', id: '2cdd6a42f4f4669aab9337cc3a6ed06' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

    console.log(data);

});






switch (action) {
    case "concert-this":
        concert();
        break;

    case "spotify-this-song":
        spotify();
        break;

    case "movie-this":
        movie();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;

    default:

    console.log("Placeholder Text");

}


//Function(s) Code
function concert() {



};

function spotify() {



};

function movie() {



};

function doWhatItSays() {



};
