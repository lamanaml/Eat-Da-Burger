var orm = require("../config/orm.js");

var burger = {

selectAll: function(cb) {
    orm.all("burgers", function(res) {
        cb(res);
    });
}

// insertOne()

// updateOne()


}

module.exports = burger;