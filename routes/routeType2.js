const router = require("express").Router();

// Un fichier de route spécifique

var route_type2 = function() {
  router.get("/test", function(req, res) {
    res.send("Route test route type2");
  });

  router.post("/test/post", function(req, res) {
    res.json({ message: "post request route type2", body: req.body });
  });

  return router;
};

module.exports = route_type2;
