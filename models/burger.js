module.exports = function(sequelize, DataTypes) {
// Creates a "Chirp" model that matches up with DB
var Burger = sequelize.define("Burger", {
  burger_name: DataTypes.STRING,
  devoured: {type: DataTypes.BOOLEAN, defaultValue: false}
});

// Syncs with DB
Burger.sync();
return Burger;
}
