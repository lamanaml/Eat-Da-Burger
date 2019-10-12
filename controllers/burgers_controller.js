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
  burger.addBurger(
    req.body.burger_name, 
    function(result) {
      res.redirect("/");
      
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
console.log("condition", condition);

  burger.eatBurger({
   devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
module.exports = router;