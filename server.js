const http = require("http");
const mongoose = require("mongoose");
const config = require("./utils/config");
const observationsRouter = require("./controllers/observations");
const sslRedirect = require("heroku-ssl-redirect");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

mongoose
  .connect(config.mongoUrl, {useNewUrlParser: true})
  .then(() => {
    console.log("connected to database", config.mongoUrl);
  })
  .catch(err => {
    console.log(err);
  });

mongoose.Promise = global.Promise;

const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

server.on("close", () => {
  mongoose.connection.close();
});

app.use(cors());
app.use(sslRedirect());
app.use(bodyParser.json());
app.use(express.static("build"));

app.use("/api/observations", observationsRouter);

const error = (request, response) => {
  response.status(404).send({ error: "Unknown endpoint" });
};

app.use(error);

module.exports = {
  app,
  server
};
