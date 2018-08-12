// read and set the env variables
require("dotenv").config();
// import the request npm package
var request = require("request");
// import the twitter npm package
var Twitter = require('twitter');
// import the spotify npm package
var Spotify = require('node-spotify-api');
// requiring the keys file
var keys = require('./keys.js');
// intitalizing the spotify API using client id and secret key
var spotify = new Spotify(keys.spotify);
// chalk for text color in terminal 
const chalk = require('chalk');


var argOne = process.argv[2];
var argTwo = process.argv[3];
var movieName = process.argv[4];

//  Functions 
// =======================================================================================
var run = (argOne, argTwo) => {
    pick(argOne, argTwo, );
}
//function/ switch-case statement to direct which command gets run
var pick = (caseData, functionData) => {
    switch (caseData) {
        case "my-tweets":
            myTweets(functionData);
            break;
    }
    switch (caseData) {
        case "spotify-this-song":
            mySpotify(functionData);
            break;
    }
    switch (caseData) {
        case "movie-this":
            myMovie();

            break;
    }
}
// ===============================================================================================
// ===============================================================================================
// ES6 way of writing function to get the tweet data
var myTweets = () => {
    var client = new Twitter(keys.twitter);

    var params = {
        screen_name: 'trice_rocky',
        count: 20
    };
    client.get('statuses/user_timeline', params, (error, tweets, response) => {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(chalk.blue.bold(tweets[i].created_at));
                console.log('');
                console.log(tweets[i].text);
            }
        }
    });
}
var getArtistNames = (artist) => {
    return artist.name;
}
// function for the spotify search
var mySpotify = (songName) => {
    if (songName === undefined) {
        songName = "The Sign";
    }
    spotify.search({
        type: 'track',
        query: songName
    }, (err, data) => {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var songs = data.tracks.items;

        for (var i = 0; i < songs.length; i++) {
            console.log(i);
            console.log("artist(s): " + songs[i].artists.map(getArtistNames));
            console.log("song name: " + songs[i].name);
            console.log("preview song: " + songs[i].preview_url);
        }
    })
}
var myMovie = () => {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&apikey=9379fb14";

    request(queryUrl, (error, response, body) => {
        // if the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
        if (movieName === undefined) {
            request("http://www.omdbapi.com/?t=mr+nobody&apikey=9379fb14", (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    console.log(JSON.parse(body), null, 2);

                }
            });
        }

        // If the request is successful
        if (!error && response.statusCode === 200) {

            // Parse the body of the site and recover the data specified 
            console.log("Movie name: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("Ratings: " + JSON.parse(body).imdbRating);
            console.log("Country produced in: " + JSON.parse(body).Country)
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);



        }
    });
}


run(argOne, argTwo);