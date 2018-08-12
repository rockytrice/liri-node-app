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
var fs = require("fs");
// chalk for text color in terminal 
const chalk = require('chalk');
const log = console.log;


var argOne = process.argv[2];
var argTwo = process.argv[3];
var movieName = process.argv[4] || "Mr. Nobody";

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
    switch (caseData) {
        case "do-what-it-says":
            liriCommand();
            break;

    }
}
// ===============================================================================================
// ===============================================================================================
// ES6 way of writing function to get the tweet data
var myTweets = () => {
    var client = new Twitter(keys.twitter);

    var params = {
        screen_name:'trice_rocky',
        count: 20
    };
    client.get('statuses/user_timeline', params, (error, tweets, response) => {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                log(chalk.bgBlue(tweets[i].created_at));
                log('');
                log(chalk.greenBright(tweets[i].text));
            }
        }
    });
}
var getArtistNames = (artist) => {
    return artist.name;
}
// function for the spotify search=======================================================================================================
var mySpotify = (songName) => {
    if (songName === undefined) {
        songName = "The Sign";
    }
    spotify.search({
        type: 'track',
        query: songName,
        limit: 1
    }, (err, data) => {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var songs = data.tracks.items;

        for (var i = 0; i < songs.length; i++) {
            console.log(i);
            log(chalk.red("artist(s): ") + chalk.cyan(songs[i].artists.map(getArtistNames)));
            log(chalk.yellow("song name: ") +chalk.bgGreen(songs[i].name));
            log(chalk.magenta("preview song: ") +chalk.grey(songs[i].preview_url));
        }
    })
}
// movie sear function=====================================================================================================================
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
            log(chalk.rgb(255,136,0)("Movie name: ") + JSON.parse(body).Title);
            log(chalk.redBright("Release Year: ") + JSON.parse(body).Year);
            log(chalk.magenta("Ratings: ") + JSON.parse(body).imdbRating);
            log(chalk.cyan("Country produced in: ") + JSON.parse(body).Country)
            log(chalk.yellow("Rotten Tomatoes Rating: ") + JSON.parse(body).Ratings[1].Value);
            log(chalk.blue("Language: ") + JSON.parse(body).Language);
            log(chalk.red("Plot: ") + JSON.parse(body).Plot);
            log(chalk.green("Actors: ") + JSON.parse(body).Actors);
        }
    });
}
// LIRI command function=========================================================================================================================
var liriCommand = () => {
    // Running the readFile module that's inside of fs.
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        // Break the string down by comma separation and store the contents into  command and input array
        var array = data.split(",");
        var command = array[0];
        var input = array[1];
        log(chalk.blueBright("your wish is granted: ") + chalk.yellowBright(command) + " " + chalk.greenBright(input));
        mySpotify(input);
    })
}

run(argOne, argTwo);