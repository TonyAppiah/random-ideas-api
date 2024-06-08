const express = require("express");
const connectToDataBase = require("./config/db");
require("dotenv").config(); //this is to access the .env file and use its variables
const path = require("path");

const app = express();
const port = process.env.PORT; // this is a variable from .env

//calling function to connect to DB
connectToDataBase();

//to make public folder static to contain static file(html, css, js)
app.use(express.static(path.join(__dirname, "public")));

//Body parser middleware :this is so data can be sent when an http request is made
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/", (request, response) => {
//   response.send("Hello world");
// });

const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
