var express = require("express");
var router = express.Router();

//import model
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
    });
}),

router.post("/api/burgers", function(req, res) {
  burger.newBurger([
    "burger_name", 
  ], [
    req.body.burger_name
  ], function(result) {
       res.render("results");
  });
});

module.exports = router;