// creating api routes
const express = require("express");
const router = express.Router(); //in order to use the express Router
const Idea = require("../models/Idea"); //bringing in the model and using that with the methods on it to manipulate data from and to the database

//get all ideas
router.get("/", async (request, response) => {
  try {
    const ideas = await Idea.find();
    response.send({ success: true, data: ideas }); //or response.json({})
  } catch (error) {
    response
      .status(500)
      .json({ success: false, error: "Something went wrong" });
  }
});

//get single idea
router.get("/:id", async (request, response) => {
  try {
    const idea = await Idea.findById(request.params.id);
    response.send({ success: true, data: idea });
  } catch (error) {
    response
      .status(500)
      .json({ success: false, error: "Something went wrong" });
  }
});

//Add an idea
router.post("/", async (request, response) => {
  const idea = new Idea({
    text: request.body.text,
    tag: request.body.tag,
    username: request.body.username,
  });

  try {
    await idea.save();
    response.send({ success: true, data: idea });
  } catch (error) {
    response
      .status(500)
      .json({ success: false, error: "Something went wrong" });
  }
});

//update an idea
router.put("/:id", async (request, response) => {
  try {
    const idea = await Idea.findByIdAndUpdate(
      request.params.id,
      {
        text: request.body.text,
        tag: request.body.tag,
      },
      { new: true }
    );
    response.send({ success: true, data: idea });
  } catch (error) {
    response
      .status(500)
      .json({ success: false, error: "Something went wrong" });
  }
});

//Delete an idea
router.delete("/:id", async (request, response) => {
  try {
    await Idea.findByIdAndDelete(request.params.id);
    response.send({ success: true, data: {} });
  } catch (error) {
    response
      .status(500)
      .json({ success: false, error: "Something went wrong" });
  }
});

module.exports = router;
