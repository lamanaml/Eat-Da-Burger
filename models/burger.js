var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
        cb(res);
    });
}, 

 newBurger: function(cols, vals, cb) {
    orm.newBurger("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
// updateOne()
}

module.exports = burger;