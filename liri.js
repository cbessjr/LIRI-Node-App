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

//FS
var fs = require("fs");

//AXIOS
var axios = require("axios");

//MOMENT
var moment = require("moment");

//Action from the console to determin the case/function to be processed
var action = process.argv[2];
var request = process.argv.slice(3).join(" ");
console.log(action);

selections(action, request);



//_______________________________________Function(s) Code__________________________________________


//Concert function for the Bands In Town NPM
function concert(band) {


    if (band === "") {
        console.log("Please enter a concert search with the syntax: node liri.js concert-this <artist/band name here>");
    } else {
        axios.get("https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp").then(
            function (response) {
                console.log("Venue: " + response.data[0].venue.name);
                console.log("Location (City): " + response.data[0].venue.city);
                console.log("Location (Region): " + response.data[0].venue.region);
                console.log("Location (Country): " + response.data[0].venue.country);

                var concertDate = response.data[0].datetime;
                var date = moment(concertDate['datetime']).format('dddd, MMMM Do YYYY');
                console.log("Concert Date: " + date);

                // fs.writeFileSync("output.txt", JSON.stringify(response.data));
            })
    }
};

//SpotifyDo function for the Spotify NPM
function spotifyDo(song) {


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
function movie(movie) {


    if (movie === "") {
        console.log("Please enter a movie search with the syntax: node liri.js movie-this '<movie name here>");
    } else {
        axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=" + omdbKey).then(
            function (response) {

                // console.log(response.data);
                console.log("Title: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoe Rating: " + response.data.Ratings[1].Value);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);

            }
        )
    };
};

function doWhatItSays() {

    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        // console.log(data);
        var dataArr = data.split(",");

        // console.log(dataArr);
        var command = dataArr[0];
        var request = dataArr[1];

        if (command === "do-what-it-says") {
            console.log("error");
        } else {
            selections(command, request);
        }
    })
};


function selections(action, request) {
    switch (action) {
        case "concert-this":
            concert(request);
            // console.log("concert works");
            break;

        case "spotify-this-song":
            spotifyDo(request);
            break;

        case "movie-this":
            movie(request);
            // console.log("movie works");
            break;

        case "do-what-it-says":
            doWhatItSays();
            // console.log("Do what it says works");
            break;

        default:
            console.log("Pleae enter a command: concert-this, spotify-this-song, movie-this, do-what-it-says");
    }
}