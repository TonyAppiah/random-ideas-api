const express = require("express");

const app = express();
const port = 5000;

//Body parser middleware :this is so data can be sent when a post request is made
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (request, response) => {
  response.send("Hello world");
});

const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
