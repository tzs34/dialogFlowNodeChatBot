'use strict'
const dialogFlow = require('dialogflow')
require('dotenv').config()

const sessionClient = new dialogFlow.SessionsClient({keyFilename: "../app/service_account.json"})
const sessionPath = sessionClient.sessionPath(process.env.GOOGLE_PROJECT_ID, process.env.DIALOGFLOW_SESSION_ID)

module.exports= {
    textQuery: async (text) =>{
        const request = {
            session: sessionPath,
            queryInput: {
              text: {
                // The query to send to the dialogflow agent
                text: 'I want to see a comedy',
                // The language used by the client (en-US)
                languageCode: process.env.DIALOGFLOW_LANG_CODE,
              },
            },
          };
        return await sessionClient.detectIntent(request);
    }
}