const admin = require("firebase-admin");
const serviceAccount = require("../../../kalendar-df3f9-firebase-adminsdk-4uhmk-3a7e91fc5c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports = db;