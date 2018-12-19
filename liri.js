require("dotenv").config();


//Spotify
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//Bands In Town
var APP_ID = "codingbootcamp";
var Bandsintown = require('bandsintown')(APP_ID);
// var bandsintown = new Bandsintown(APP_ID);

//OMDB
var omdbKey = "adaf8b76";
var OMDB = require('omdb');
// var omdb = new OMDB(omdbKey);


//AXIOS
var axios = require("axios");

//Action from the console to determin the case/function to be processed
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

//_______________________________________Function(s) Code__________________________________________


//Concert function for the Bands In Town NPM
function concert() {

    var band = process.argv.slice(3).join(" ");

    if (band === "") {

        console.log("Please enter a concert search with the syntax: node liri.js concert-this <artist/band name here>");

    } else {

        axios.get("https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp").then(

            function (response) {

                console.log(response.data);
            })

    }

};

//SpotifyDo function for the Spotify NPM
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

//Movie function for the OMDB NPM
function movie() {

    var movie = process.argv.slice(3).join(" ");

    if (movie === "") {

        console.log("Please enter a movie search with the syntax: node liri.js movie-this '<movie name here>");

    } else {

            axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=" + omdbKey).then(
                function(response) {
                    
                    // console.log(response.data);

                    console.log("Title: " + response.data.Title);
                    console.log("Year: " + response.data.Year);
                    console.log("IMDB Rating: " + response.data.imdbRating);
                    console.log("Rotten Tomatoe Rating: " + response.data.Source);
                    console.log("Country: " + response.data.Country);
                    console.log("Language: " + response.data.Language);
                    console.log("Plot: " + response.data.Plot);
                    console.log("Actors: " + response.data.Actors);


                }
            )};
      

};

function doWhatItSays() {

    console.log("Hello");

};
