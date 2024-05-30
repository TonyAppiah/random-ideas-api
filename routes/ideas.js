// creating api routes
const express = require("express");
const router = express.Router();

const ideas = [
  {
    id: 1,
    text: "This is idea 1",
    tag: "Technology",
    username: "TonyAppiah",
    date: "2023-01-02",
  },
  {
    id: 2,
    text: "This is idea 2",
    tag: "Invention",
    username: "ZionAppiah",
    date: "2023-01-02",
  },
  {
    id: 3,
    text: "This is idea 3",
    tag: "Software",
    username: "EuniceAppiah",
    date: "2023-01-02",
  },
  {
    id: 4,
    text: "This is idea 4",
    tag: "Software",
    username: "AndyAppiah",
    date: "2023-01-02",
  },
];

//get all ideas
router.get("/", (request, response) => {
  response.send({ success: true, data: ideas }); //or response.json({})
});

//get single idea
router.get("/:id", (request, response) => {
  const idea = ideas.find((idea) => idea.id === +request.params.id);

  if (!idea) {
    return response
      .status(404)
      .json({ success: false, error: "Idea not found." });
  }

  response.send({ success: true, data: idea });
});

module.exports = router;
