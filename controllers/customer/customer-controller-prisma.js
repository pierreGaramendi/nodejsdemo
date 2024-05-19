const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getAllCustomersPrisma(req, res) {
  const data = req.query; // Aquí se accede a los parámetros de consulta de la URL
  console.log(data);
  console.log(JSON.parse(JSON.stringify(data)));
  console.log({
    CustomerName: true,
    Address: true,
  });
  try {
    const users = await prisma.customers.findMany({
      select: {
        CustomerName: true,
        Address: true,
      },
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener Customers" });
  }
}

module.exports = getAllCustomersPrisma;
