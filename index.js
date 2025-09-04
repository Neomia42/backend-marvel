require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

//Import des Routes
const comicsRoutes = require("./routes/comics");
app.use("/comics", comicsRoutes);
const comicRoutes = require("./routes/comic");
app.use("/comic", comicRoutes);
const charactersRoutes = require("./routes/characters");
app.use("/characters", charactersRoutes);
const characterRoutes = require("./routes/character");
app.use("/character", characterRoutes);

//Route d'accueil
app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Welcome to MARVEL API by Neomia42" });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
//Route pour les erreurs 404
app.all(/.*/, (req, res) => {
  return res.status(404).json("Not found");
});

const PORT = process.env.PORT || 3000; // Port d'écoute, par défaut 3000
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
