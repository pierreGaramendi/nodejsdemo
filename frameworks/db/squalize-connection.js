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

const conectarBD = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};

module.exports = {
  sequelizeInstance: sequelize,
  conectarBDSqualize: conectarBD,
};
