const express  = require('express')
const bodyParser = require('body-parser')
const dialogFlowRoutes = require('./routes/dialogFlowRoutes')
const app = express()

app.use(bodyParser.json())
dialogFlowRoutes(app)


const PORT = process.env.PORT || 5000

app.listen(PORT)