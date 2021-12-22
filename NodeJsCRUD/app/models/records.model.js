const Sequelize = require("sequelize");
const db = require("../models/index");

const Sportsman = db.define("sportsman", {
  name: {
    type: Sequelize.STRING,
  },
  surname: {
    type: Sequelize.STRING,
  },
  sporttype: {
    type: Sequelize.STRING,
  },
  team: {
    type: Sequelize.STRING,
  },
  country: {
    type: Sequelize.STRING,
  },
  isAchiv: {
    type: Sequelize.BOOLEAN,
  },
  year: {
    type: Sequelize.STRING,
  },
  comment: {
    type: Sequelize.STRING,
  },
});

module.exports = Sportsman;
