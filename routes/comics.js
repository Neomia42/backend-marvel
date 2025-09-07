const express = require("express");
const router = express.Router();
const apiKey = require("../utils/apiKey");
const axios = require("axios");
const queries = require("../utils/queries");
// Route pour récupérer tous les comics
router.get("/", async (req, res) => {
  try {
    // const limit = 100; // Nombre de comics à récupérer
    const queriesParams = queries(req.query);
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${apiKey}${queriesParams}`
    );
    const comics = response.data;
    res.status(200).json(comics);
    //   console.log(response.data);
  } catch (error) {
    console.error("Erreur =>", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/:characterid", async (req, res) => {
  try {
    const { characterid } = req.params;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterid}?apiKey=${apiKey}`
    );
    const comicsCaracterId = response.data;
    res.status(200).json(comicsCaracterId);
  } catch (error) {
    console.error("Erreur =>", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
router.post("/batch", async (req, res) => {
  try {
    const { ids } = req.body; // tableau d'IDs envoyé dans le body
    // console.log("ids =>", ids);
    if (!Array.isArray(ids)) {
      return res.status(400).json({ error: "ids doit être un tableau" });
    }

    // Récupère tous les comics en parallèle pour le preview du front
    const comics = await Promise.all(
      ids.map(async (comicid) => {
        const response = await axios.get(
          `https://lereacteur-marvel-api.herokuapp.com/comic/${comicid}?apiKey=${apiKey}`
        );
        return response.data;
      })
    );

    res.status(200).json(comics);
  } catch (error) {
    console.error("Erreur =>", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
