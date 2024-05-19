const fsDB = require("../firestore-connection");

async function GetEventsFireStore() {
  const snapshot = await fsDB.collection("Event").get();
  const promiseArray = snapshot.docs.map((doc) => {
    return doc.data();
  });
  return promiseArray;
}

module.exports = GetEventsFireStore