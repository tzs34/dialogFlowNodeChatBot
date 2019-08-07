<<<<<<< HEAD
const chatBot = require('../chatbot/chatbot')

module.exports = (app) =>{

    app.get('/', (req, res) => {
        res.send({'hello': 'jon'})
    })
    
    app.get('/api/df_text_query', async (req, res) => {
        
          let response = await chatBot.textQuery(req.body.text)
          const result = response[0].queryResult;
          console.log(`  Query: ${result.queryText}`);
          console.log(`  Response: ${result.fulfillmentText}`);
          if (result.intent) {
            console.log(`  Intent: ${result.intent.displayName}`);
          } else {
            console.log(`  No intent matched.`);
          }

        res.send(response)
    })
    
    app.get('/api/df_event_query', (req, res) => {
        res.send({'hello': 'event'})
    })
=======
const chatBot = require('../chatbot/chatbot')

module.exports = (app) =>{

    app.get('/', (req, res) => {
        res.send({'hello': 'jon'})
    })
    
    app.get('/api/df_text_query', async (req, res) => {
        
          let response = await chatBot.textQuery(req.body.text)
          const result = response[0].queryResult;
          console.log(`  Query: ${result.queryText}`);
          console.log(`  Response: ${result.fulfillmentText}`);
          if (result.intent) {
            console.log(`  Intent: ${result.intent.displayName}`);
          } else {
            console.log(`  No intent matched.`);
          }

        res.send(response)
    })
    
    app.get('/api/df_event_query', (req, res) => {
        res.send({'hello': 'event'})
    })
>>>>>>> 4b2bf95dbc8f5e1e60a1730ef9b60bb6a5b0ffa4
}