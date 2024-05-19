const GetEventsFireStore = require("../../frameworks/db/firestore/event/GetAllEvents")

async function getAllEventsController(req, res) {
  const data = req.query; // Aquí se accede a los parámetros de consulta de la URL
  try {    
    const events = await GetEventsFireStore()
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener Eventos" });
  }
}

module.exports = getAllEventsController;
