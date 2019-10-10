var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
        cb(res);
    });
}, 

 addBurger: function(name, cb) {
    orm.addBurger("burgers", ["burger_name", "devoured"], [name, false], cb);
  },



updateBurger: function(objColVals, condition, cb) {
    orm.updatBurger('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
}

module.exports = burger;