const express = require("express");
const bodyParser = require("body-parser");

// Déclaration de l'app express
const app = express();

// Pour pouvoir lire le body des requêtes
app.use(bodyParser.json());

// Si /api dans l'url -> vers les routes api
app.use("/api", require("./routes/api")());

// Sinon renvoie ce que tu veux
app.use("*", function(req, res) {
  res.status(404).send("Pas de route");
});

module.exports = app;
