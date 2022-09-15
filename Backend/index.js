
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
require('dotenv').config();
const PORT =  process.env.PORT || 5000;
const app = express()
app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    express.json(),
    cors({ origin: ['http://localhost:3000'], })
)
const routers = require("./routes.js")
routers(app)

app.listen(PORT, () => console.log(`server statsrt ${PORT}`))
