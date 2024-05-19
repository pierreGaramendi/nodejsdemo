const env = require("@dotenvx/dotenvx");
const fullEnvPath = require("./config/env-composed-path");
env.config({ path: fullEnvPath });

const app = require("./config/express-app");

app.listen(process.env.port || 3000);
