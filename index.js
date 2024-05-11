
const env = require("@dotenvx/dotenvx");
const fullEnvPath = require("./config/env-composed-path");
env.config({ path: fullEnvPath });

const sequelizeModule = require("./frameworks/db/squalize-connection");
const conectarBDSqualize = sequelizeModule.conectarBDSqualize;
conectarBDSqualize();

const app = require("./express-app");

app.listen(process.env.port || 3000);
