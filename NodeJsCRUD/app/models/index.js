const dbConfig = require("../config/db.config.js");
const { Sequelize, Model, Op, DataTypes } = require("sequelize");

const db = new Sequelize("crudapp", "postgres", "123", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: console.log,
});

module.exports = db;
