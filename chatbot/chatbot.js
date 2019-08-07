'use strict'
const dialogFlow = require('dialogflow')
require('dotenv').config()

const sessionClient = new dialogFlow.SessionsClient({keyFilename: "../app/service_account.json"})
const sessionPath = sessionClient.sessionPath(process.env.GOOGLE_PROJECT_ID, process.env.DIALOGFLOW_SESSION_ID)

const handlAction = (response) => response


const textQuery = async (text, params={}) =>{
        const request = {
            session: sessionPath,
            queryInput: {
              text: {
                // The query to send to the dialogflow agent
                text: 'I want to see a comedy',
                // The language used by the client (en-US)
                languageCode: process.env.DIALOGFLOW_LANG_CODE,
              },
              queryParams:{
                payload:{
                  data: params
                }
              }
            },
          };
        let responses = await handlAction(request)
        return await sessionClient.detectIntent(responses);
    }

module.exports= {
  textQuery
}