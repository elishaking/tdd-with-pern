var express = require("express");
var router = express.Router();

// *** GET all shows *** //
router.get("/shows", function(req, res, next) {
  res.send("send shows back");
});

module.exports = router;
