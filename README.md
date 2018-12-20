# LIRI-NODE-APP


## Overview
LIRI is a Node.js app for retrieving entertainment information using NPM packages installed to enhance Node.

This app allows a user to choose from one of four commands:

1. [concert-this] (associated with the Bands In Town API)<br>
2. [spotify-this-song] (associated with the Spotify API)<br>
3. [movie-this] (associated with the OMDb API)<br>
4. [do-what-it-says] (associated with a combination of the Spotify API and FS API)



## Running the application
### 1. Install Node

- NPM (Node Package Manager) (https://docs.npmjs.com/getting-started/installing-node)


### 2. Clone the applications

  Clone the application from the following location... (https://github.com/cbessjr/LIRI-Node-App

### 3. Install NPM Packages

  Install the packages from the terminal in the folder the application was cloned.

- Node-Spotify-API(https://www.npmjs.com/package/node-spotify-api)
- Axios (https://www.npmjs.com/package/axios)
- OMDb API (https://www.npmjs.com/package/omdb)
- Bands In Town API (http://www.artists.bandsintown.com/bandsintown-api)
- Moment (https://www.npmjs.com/package/moment)
- DotEnv (https://www.npmjs.com/package/dotenv)


### 4. Acquire API key(s)

 - Spotify (https://developer.spotify.com/dashboard/login)
        - Create a Spotify account (Or use an existing account)
        - Register for the API key and Spotify Secret
 - Once acquired, you will need to create the file .env. Paste your key and secret in the file in the following format:
 
  //Code Start Below
   #### Spotify API keys

  SPOTIFY_ID= key
  SPOTIFY_SECRET= secret

  //Code Ends Here


   #### Bands In Town API Key

   Provided in-code


   #### OMDb API Key

   Provided in-code
 
 
 ### 5. Using the Application
 
 Once the required packages have been installed, use the following commands to pull song, concert, and movie data using the following syntax for each command:
 
 - node liri.js spotify-this-song '<song name here>'
 - node liri.js movie-this '<movie name here>'
 - node liri.js do-what-it-says
 - node liri.js concert-this <artist/band name here>
  
  
  
  
  
  ### Future Updates
  
  - Additional error handling for null values and null returns (bands not found, songs and movies misspelled)
  - Command list to limit the user input to avoid typos
