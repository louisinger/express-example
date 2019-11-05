const router = require("express").Router();

// Ton fichier où tu centralises les routes

var api = function() {
  router.use("/routeType1", require("./routeType1")());
  router.use("/routeType2", require("./routeType2")());
  return router;
};

module.exports = api;
