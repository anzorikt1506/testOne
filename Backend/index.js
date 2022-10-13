
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
require('dotenv').config();
const PORT =  process.env.PORT || 5000;
const app = express()
app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    express.json(),
    cookieParser(),
    cors({ 
        credentials: true,
        origin: ['http://localhost:3000'], })
)
const routers = require("./routes.js")
routers(app)

// let now = new Date();
// let now1 = now.setDate(now.getDate()+30);
// let ff = new Date(now1)
// console.log(`${ff.getFullYear()}-${ff.getMonth()+1}-${ff.getDate()}  `);
app.listen(PORT, () => console.log(`server statsrt ${PORT}`))
