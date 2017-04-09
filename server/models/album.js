// Album.js
"use strict";
module.exports = function(sequelize, DataTypes) {
  var Album = sequelize.define("Album", {
		id: {type: DataTypes.INTEGER, primaryKey: true},
        name: {type: DataTypes.STRING},
        description: {type: DataTypes.STRING}
  });

  return Album;
};