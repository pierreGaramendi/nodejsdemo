const GetUsers = require("../../frameworks/db/firestore/users/GetAllUsers")

async function getAllUsersFS(req, res) {
  const data = req.query; // Aquí se accede a los parámetros de consulta de la URL
  try {    
    const users = await GetUsers()
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener Customers" });
  }
}

module.exports = getAllUsersFS;
