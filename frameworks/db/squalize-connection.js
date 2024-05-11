const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.squalize_db_name,
  process.env.squalize_db_user,
  process.env.squalize_db_password,
  {
    host: process.env.squalize_connectiong_string,
    dialect: "mysql",
  }
);

module.exports = sequelize;
