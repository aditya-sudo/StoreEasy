const bodyParser = require('body-parser');
const express = require('express')
const cookieParser = require("cookie-parser")

const app = express()

app.use(express.json())
app.use(cookieParser());


//Route Imports

const storage = require("./routes/storageRoutes");
const user = require("./routes/userRoutes")
const order = require("./routes/orderRoute")

app.use("/api/v1", storage)
app.use("/api/v1", user)
app.use("/api/v1", order)


app.use(bodyParser.json())


module.exports = app

// Middleware for Errors
// app.use(errorMiddleware);