const express = require("express");
const router = express.Router();
const apiKey = require("../utils/apiKey");
const axios = require("axios");
const queries = require("../utils/queries");

router.get("/", async (req, res) => {
  try {
    const queriesParams = queries(req.query);

    const response = await axios.get(
      ` https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${apiKey}${queriesParams}`
    );
    const characters = response.data;
    res.status(200).json(characters);
    //   console.log(response.data);
  } catch (error) {
    console.error("Erreur =>", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
