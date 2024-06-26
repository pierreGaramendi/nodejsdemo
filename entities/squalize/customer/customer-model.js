const Sequelize = require("sequelize");
const sequelizeModule = require("../../../frameworks/db/squalize-connection"); // Importamos la instancia de Sequelize configurada
const sequelizeInstance = sequelizeModule.sequelizeInstance;
const Usuario = sequelizeInstance.define(
  "Customers",
  {
    CustomerID: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    CustomerName: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    ContactName: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    Address: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    City: {
      type: Sequelize.STRING(20),
      allowNull: true,
    },
    PostalCode: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    Country: {
      type: Sequelize.STRING(15),
      allowNull: true,
    },
  },
  {
    sequelizeInstance,
    tableName: "Customers",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "CustomerID" }],
      },
    ],
  }
);

module.exports = Usuario;
