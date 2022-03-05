const app = require("./app")
const express = require("express");
const bodypaser = require("body-parser")
const dotenv = require("dotenv")
const { default: mongoose } = require("mongoose")

//const mongoose = require('mongoose')


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});




//database connect
const CONNECTION_URL = 'mongodb+srv://storeeasy:storeeasy123@cluster0.d53nh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 8000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));



// Unhandled Promise Rejection for errors in server link
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});



//config
dotenv.config({path:"backend/config/config.env"})


// app.listen(process.env.PORT,() =>
//     {
//         console.log("Server is working on http://localhost:$(process.env.PORT)");
//     })
