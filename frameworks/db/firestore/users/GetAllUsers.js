const fsDB = require("../firestore-connection");

async function GetUsers() {
  const snapshot = await fsDB.collection("company").get();
  const promiseArray = snapshot.docs.map((doc) => {
    return doc.data();
  });
  return promiseArray;
}

module.exports = GetUsers