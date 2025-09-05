const express = require("express");
const router = express.Router();
const apiKey = require("../utils/apiKey");
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const limit = 100; // Nombre de comics à récupérer
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${apiKey}`
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
module.exports = router;
