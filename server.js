const express = require("express");

const app = express();
const port = 5000;

app.get("/", (request, response) => {
  response.send("Hello world");
});

const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
