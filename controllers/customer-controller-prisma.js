const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getAllCustomersPrisma(req, res) {
  try {
    const users = await prisma.customers.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener Customers" });
  }
}

module.exports = getAllCustomersPrisma;
