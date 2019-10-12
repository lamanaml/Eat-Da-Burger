var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
        cb(res);
    });
}, 

//help from tutor to push burger with a default value
 addBurger: function(name, cb) {

    orm.addBurger("burger", ["burger_name", "devoured"], [name, false], cb);

  },




eatBurger: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
}


module.exports = burger;