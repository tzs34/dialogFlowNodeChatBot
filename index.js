<<<<<<< HEAD
const express  = require('express')
const bodyParser = require('body-parser')
const dialogFlowRoutes = require('./routes/dialogFlowRoutes')
const app = express()

app.use(bodyParser.json())
dialogFlowRoutes(app)


const PORT = process.env.PORT || 5000

=======
const express  = require('express')
const bodyParser = require('body-parser')
const dialogFlowRoutes = require('./routes/dialogFlowRoutes')
const app = express()

app.use(bodyParser.json())
dialogFlowRoutes(app)


const PORT = process.env.PORT || 5000

>>>>>>> 4b2bf95dbc8f5e1e60a1730ef9b60bb6a5b0ffa4
app.listen(PORT)