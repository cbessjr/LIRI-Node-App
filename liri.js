require("dotenv").config();


//Spotify Keys
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var APP_ID = "codingbootcamp";
var Bandsintown = require('bandsintown')(APP_ID);
var bandsintown = new Bandsintown(APP_ID);

var action = process.argv[2];

switch (action) {

    case "concert-this":
        concert();
        console.log("concert works");
        break;

    case "spotify-this-song":
        spotifyDo();
        break;

    case "movie-this":
        movie();
        console.log("movie works");
        break;

    case "do-what-it-says":
        doWhatItSays();
        console.log("Do what it says works");
        break;

    default:

    console.log("Placeholder Text");

}

//Function(s) Code
function concert() {

    var band = process.argv.slice(3). join(" ");

    if (band === "") {

        console.log("Please enter a concert search with the syntax: node liri.js concert-this <artist/band name here>");

    } else {

        axios.get("https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp")

 
        // bandsintown
        // .getArtistEventList('Skrillex')
        // .then(function(events) {
        //     // return array of events

        //     console.log(data);

            // var eventsArray = [];

            // for (var i = 0; i < data.tracks.items.length; i++) {
            //     var result = {
            //         artist: data.tracks.items[i].album.artists[0].name,
            //         album_name: data.tracks.items[i].album.name,
            //         song_name: data.tracks.items[i].name,
            //         preview_url: data.tracks.items[i].preview_url
            //     }
            //     eventsArray.push(result);
            // }

//   });


    }

};

function spotifyDo() {

    var song = process.argv.slice(3).join(" ");

        if (song === "") {

            console.log("Artist: " + "Ace of Base");
            console.log("Song: " + "The Sign");
            console.log("Album: " + "The Sign");
            console.log("Preview: " + "https://www.youtube.com/watch?v=iqu132vTl5Y");


        } else {

            spotify.search({ type: 'track', query: song }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }


                var tableArray = [];

                for (var i = 0; i < data.tracks.items.length; i++) {
                    var result = {
                        artist: data.tracks.items[i].album.artists[0].name,
                        album_name: data.tracks.items[i].album.name,
                        song_name: data.tracks.items[i].name,
                        preview_url: data.tracks.items[i].preview_url
                    }
                    tableArray.push(result);
                }



                console.log("Artist: " + result.artist);
                console.log("Song: " + result.song_name);
                console.log("Album: " + result.album_name);
                console.log("Preview: " + result.preview_url);

            });


    };

}
function movie() {


};

function doWhatItSays() {


};
