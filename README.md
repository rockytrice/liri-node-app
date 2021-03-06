# liri-node-app
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.


  spotify-this-song '<song name here>'

   * This will show the following information about the song in your terminal/bash window
     
     * Artist(s)
     
     * The song's name
     
     * A preview link of the song from Spotify
     
     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.
![Alt Text](http://g.recordit.co/NCAzuPXtLe.gif)

node liri.js movie-this <movie name here>

   * This will output the following information to your terminal/bash window:

     
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
![Alt Text](http://g.recordit.co/3f7z3MWNts.gif)
![Alt Text](http://g.recordit.co/zFB0MD7PnS.gif)

liri.js my-tweets

   * This will show your last 20 tweets and when they were created at in your terminal/bash window.
![Alt Text](http://g.recordit.co/TpOkgCkB7H.gif)

node liri.js do-what-it-says
   
   * Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in random.txt.
![Alt Text](http://g.recordit.co/8GCpVaqFyc.gif)

  

 If you would like  to clone this app from github and run it, you will  need to supply your own `.env` file for it to work.
 
 <h1>Technologies Used:</h1>
 <p>Javascript</p>
 <p>Node js</p>
 <p>Twitter API</p>
 <p>OMDB API<p>
  <p>Spotify API<p>
  <p> npm package manger</p>
