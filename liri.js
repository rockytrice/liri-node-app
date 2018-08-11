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







//function/ switch-case statement to direct which command gets run
var pick = (caseData, functionData) => {
    switch (caseData) {
        case "my-tweets":
            myTweets(functionData);
            break;
    }

}


// ES6 way of writing function to get the tweet data
var myTweets = () => {
    var client = new Twitter(keys.twitter);

    var params = {
        screen_name: 'trice_rocky'
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at);
                console.log('');
                console.log(tweets[i].text);
            }
        }
    });
}
// function for the spotify search
var mySpotify = () => {
    if (songName === undefined) {
        songName === "The Sign";
    }
}
spotify.search({
            type: 'track',
            query: songName
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
        })
    
        