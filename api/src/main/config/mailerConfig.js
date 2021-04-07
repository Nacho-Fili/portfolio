const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2


const CLIENT_ID = process.env.CLIENT_ID 
const CLIENT_SECRET = process.env.CLIENT_SECRET 
const REDIRECT_URL = process.env.REDIRECT_URL 
const REFRESH_TOKEN = process.env.REFRESH_TOKEN 

const myOAuth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)

myOAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

const config = accessToken => ({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER, 
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
    },
    tls:{
        rejectUnauthorized: false
    }
})

module.exports = {
    config,
    myOAuth2Client
}