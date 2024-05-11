const CustomerModel = require("../entities/squalize/customer/customer-model");

customerListHandler = (request, response, next) => {
  CustomerModel.findAll()
    .then((usuarios) => {
      console.log("Usuarios encontrados:");
      response.status(200).json(usuarios);
    })
    .catch((err) => {
      console.error("Error al consultar usuarios:", err);
    });
};

module.exports = customerListHandler;
