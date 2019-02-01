const observationRouter = require("express").Router();
const Observation = require("../models/observation");

observationRouter.get("/", async (request, response) => {
  try {
    const observations = await Observation.find({});
    return response.status(200).send(observations.map(Observation.format));
  } catch (error) {
    console.log(error);
    response.status(400).send({ error: "Something went wrong, try again later" });
  }
});

observationRouter.get("/:id", async (request, response) => {
  try {
    const observation = await Observation.findById(request.params.id);
    return response.status(200).send(Observation.format(observation));
  } catch (error) {
    console.log(error);
    response.status(400).send({ error: `Observation with id ${request.params.id} not found`});
  }
});

observationRouter.post("/", async (request, response) => {
  try {
    console.log(request.body);
    const body = request.body;
    console.log(body.constructor === Object && Object.keys(body).length === 0)
    if (body === undefined || (body.constructor === Object && Object.keys(body).length === 0)) {
      return response.status(400).json({ error: "Content missing" });
    }
    console.log(body);
    const observation = new Observation({
      species: body.species,
      rarity: body.rarity,
      notes: body.notes,
      time: body.time,
      latitude: body.latitude,
      longitude: body.longitude
    });
    console.log(observation);
    let newObservation = await observation.save();

    response.status(200).send(Observation.format(newObservation));
  } catch (error) {
    console.log(error);
    response.status(400).send({ error: "Something went wrong, try again later" });
  }
});

observationRouter.delete("/:id", async (request, response) => {
  try {
    const observationToBeDeleted = await Observation.findById(request.params.id);
    if (!observationToBeDeleted) {
      return response.status(404).send({ error: "Observation not found" });
    }
    await Observation.findOneAndDelete(Observation.findById(request.params.id));
    response.status(200).send(Observation.format(observationToBeDeleted));
  } catch (error) {
    console.log(error);
    response.status(400).send({ error: "Something went wrong, try again later" });
  }
});

module.exports = observationRouter;
