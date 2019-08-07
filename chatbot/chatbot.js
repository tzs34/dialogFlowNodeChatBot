'use strict'
const dialogFlow = require('dialogflow')
const structjson = require('./structjson')

if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const credentials = {
  client_email: process.env.GA_CLIENT_EMAIL,
  private_key: process.env.GA_PRIVATE_KEY
}

const sessionClient = new dialogFlow.SessionsClient({projectID:process.env.GOOGLE_PROJECT_ID, credentials:credentials})
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

    const eventQuery = async (e, params={}) =>{
      const request = {
          session: sessionPath,
          queryInput: {
            event: {
              // The query to send to the dialogflow agent
              name: 'welcome', //e,
              parameters: structjson.jsonToStructProto(params),
              // The language used by the client (en-US)
              languageCode: process.env.DIALOGFLOW_LANG_CODE,
            }
          },
        };
      let responses = await handlAction(request)
      return await sessionClient.detectIntent(responses);
  }

module.exports= {
  textQuery,
  eventQuery
}