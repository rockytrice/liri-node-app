// read and set the env variables
require("dotenv").config();
// import the request npm package
// var request = require("request");
// import the twitter npm package
var Twitter = require('twitter');
// import the spotify npm package
var Spotify = require('node-spotify-api');
// requiring the keys file
var keys = require('./keys.js');

// switch-case statement to direct which function gets run
switch (action) {
    case "my-tweets":
      myTweets(functionData);
      break;
}

// ES6 way of writing function to get the tweet data
var myTweets = () => {
    var client = new Twitter(keys.twitter);

    var params = {screen_name: 'trice_rocky'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
      for(var i = 0; i < tweets.length; i++){

        console.log(tweets[i].created_at);

      }
  }
});
}













