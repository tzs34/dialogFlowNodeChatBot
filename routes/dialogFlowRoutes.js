const chatBot = require('../chatbot/chatbot')

module.exports = (app) =>{

    app.get('/', (req, res) => {
        res.send({'hello': 'jon'})
    })
    
    app.get('/api/df_text_query', async (req, res) => {
        
          let response = await chatBot.textQuery(req.body.text, req.body.parameters)
          res.send(response[0].queryResult);
    })
    
    app.get('/api/df_event_query', (req, res) => {
        res.send({'hello': 'event'})
    })
}