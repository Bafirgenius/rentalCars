const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const dbConnection = require("./db")
const cors = require("cors")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const routes = require('./routes')

app.use(cors())
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(routes)

app.listen(port, () => console.log(`Exemple app listening on port ${port}`))