require('dotenv').config();

const yelp = require('yelp-fusion');
const yelp_api_key = process.env.YELP_API_KEY;
const express = require('express');
const cors = require('cors');
// const transtar = require('./backend/transtar');

//HTTPS Apple BS
var path = require('path');
var fs = require('fs');
var https = require('https');

var certOptions = {
  key: fs.readFileSync(path.resolve('C:/Users/mralo/OneDrive/Map-Suite/built/cert/server.key')),
  cert: fs.readFileSync(path.resolve('C:/Users/mralo/OneDrive/Map-Suite/built/cert/server.crt')),
};
//end apple bs

var app = express();
app.use(express.json());
app.use(cors());

var MESSAGE = '';

//************************************************************************************************************ */
transtar = () => {
  const fs = require('fs');
  const readline = require('readline');
  const { google } = require('googleapis');

  // If modifying these scopes, delete token.json.
  const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
  // The file token.json stores the user's access and refresh tokens, and is
  // created automatically when the authorization flow completes for the first
  // time.
  const TOKEN_PATH = 'token.json';

  // Load client secrets from a local file.
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Gmail API.
    // Here....
    setInterval(() => {
      authorize(JSON.parse(content), listMsg);
    }, 5000);
  });

  /**
   * Create an OAuth2 client with the given credentials, and then execute the
   * given callback function.
   * @param {Object} credentials The authorization client credentials.
   * @param {function} callback The callback to call with the authorized client.
   */
  function authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getNewToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client);
    });
  }

  /**
   * Get and store new token after prompting for user authorization, and then
   * execute the given callback with the authorized OAuth2 client.
   * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
   * @param {getEventsCallback} callback The callback for the authorized client.
   */
  function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('Error retrieving access token', err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) return console.error(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        callback(oAuth2Client);
      });
    });
  }

  /**
   * Listing messages from user's account.
   */
  function listMsg(auth) {
    const gmail = google.gmail({ version: 'v1', auth });

    gmail.users.messages.list(
      {
        userId: 'me',
        maxResults: 1,
      },
      (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);

        const msg = res.data.messages;

        if (msg.length) {
          gmail.users.messages.get(
            {
              userId: 'me',
              id: msg[0].id,
            },
            (err, res) => {
              if (err) return console.log('The get API returned an error: ' + err);

              // Message being broadcast to terminal here
              MESSAGE = res.data.snippet;
            }
          );
        } else {
          console.log('No messages found.');
        }
      }
    );
  }
};
//************************************************************************************************************ */

transtar();

// Yelp interfacing with yelp-fusion
const client = yelp.client(yelp_api_key);

const searchRequest = {
  term: 'coffee',
  location: 'Houston',
  limit: 5,
};

let coffeePlaces = [];

client
  .search(searchRequest)
  .then((response) => {
    const obj = response.jsonBody;

    coffeePlaces = obj.businesses.map((business) => {
      const o = {
        name: business.name,
        coordinates: business.coordinates,
      };
      return o;
    });
  })
  .catch((error) => {
    console.log(error);
  });
// End yelp interfacing

// GET yelp locations
app.get('/api/yelp/coffee', (req, res) => {
  res.status(200).json(coffeePlaces);
});

app.get('/transtar', (req, res) => {
  res.status(200).json({ msg: MESSAGE });
});

const port = process.env.PORT || 5001;

var server = https.createServer(certOptions, app).listen(port, () => {
  console.log('Server live.. port: ' + port);
});

// app.listen(port, () => {
//   console.log('Server listening.. port: ' + port);
// });
