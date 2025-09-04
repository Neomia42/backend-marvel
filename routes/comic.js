const express = require("express");
const router = express.Router();
const apiKey = require("../utils/apiKey");
const axios = require("axios");

router.get("/:comicid", async (req, res) => {
  try {
    const { comicid } = req.params;
    const response = await axios.get(
      ` https://lereacteur-marvel-api.herokuapp.com/comic/${comicid}?apiKey=${apiKey}`
    );
    const comic = response.data;
    res.status(200).json(comic);
    //   console.log(response.data);
  } catch (error) {
    console.error("Erreur =>", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
