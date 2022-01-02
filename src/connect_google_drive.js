//googleapis
const { google } = require('googleapis');

//path module
const path = require('path');

//file system module
const fs = require('fs');


const CLIENT_ID = '936273387991-hd91h53adrnbao85gd71a7u62merl734.apps.googleusercontent.com'

//client secret
const CLIENT_SECRET = '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';

const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN = '1//04swXOtlMQvFVCgYIARAAGAQSNwF-L9Ir7zb6fkgoebnlv1-kYZnNJYRWC4H9eG6H_CNOv3vzhqJnh0D5yznSA4Jq4jHfEVQ3zvQ'

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// //initialize google drive
const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
});

const filePath = path.join(__dirname, 'hero.png');

async function uploadFile() {
  try{
    const response = await drive.files.create({
          requestBody: {
              name: 'hero.png', //file name
              mimeType: 'image/png',
          },
          media: {
              mimeType: 'image/png',
              body: fs.createReadStream(filePath),
          },
      });  
      // report the response from the request
      console.log(response.data);
  }catch (error) {
      //report the error message
      console.log(error.message);
  }
}

for(let i = 0; i < 100; i++){
    uploadFile()
}