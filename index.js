
const env = require("@dotenvx/dotenvx");
const fullEnvPath = require("./config/env-composed-path");
env.config({ path: fullEnvPath });

const sequelize = require("./frameworks/db/squalize-connection");
async function conectarBD() {
  try {
    await sequelize.authenticate();
    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}
conectarBD();

const app = require("./express-app");

app.listen(process.env.port || 3000);
