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

//Add an idea
router.post("/", (request, response) => {
  const idea = {
    id: ideas.length + 1,
    text: request.body.text,
    tag: request.body.tag,
    username: request.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea);

  response.send({ success: true, data: idea });
});

//update an idea
router.put("/:id", (request, response) => {
  const idea = ideas.find((idea) => idea.id === +request.params.id);

  if (!idea) {
    return response
      .status(404)
      .json({ success: false, error: "Idea not found." });
  }

  idea.text = request.body.text || idea.text; //sets idea.text to the text that will be in the PUT request or leaves it as is
  idea.tag = request.body.tag || idea.tag; //sets idea.tag to the tag that will be in the PUT request or leaves it as is

  response.send({ success: true, data: idea });
});

//Delete an idea
router.delete("/:id", (request, response) => {
  const idea = ideas.find((idea) => idea.id === +request.params.id);

  if (!idea) {
    return response
      .status(404)
      .json({ success: false, error: "Idea not found." });
  }

  ideas.splice(idea, 1);

  response.send({ success: true, data: {} });
});

module.exports = router;
