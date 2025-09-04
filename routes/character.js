const express = require("express");
const router = express.Router();
const apiKey = require("../utils/apiKey");
const axios = require("axios");

// router.get("/", async (req, res) => {
//   try {
//     const response = await axios.get(
//       ` hhttps://lereacteur-marvel-api.herokuapp.com/character?apiKey=${apiKey}`
//     );
//     const characters = response.data;
//     res.status(200).json(characters);
//     //   console.log(response.data);
//   } catch (error) {
//     console.error("Erreur =>", error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// });

router.get("/:characterid", async (req, res) => {
  try {
    const { characterid } = req.params;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${characterid}?apiKey=${apiKey}`
    );
    const characterIdData = response.data;
    res.status(200).json(characterIdData);
  } catch (error) {
    console.error("Erreur =>", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
