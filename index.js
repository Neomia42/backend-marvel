require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Connexion à la base de données
mongoose.connect(process.env.MONGODB_URI);
const User = require("./models/User");

//config cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Import des Routes
const comicsRoutes = require("./routes/comics");
app.use("/comics", comicsRoutes);
const comicRoutes = require("./routes/comic");
app.use("/comic", comicRoutes);
const charactersRoutes = require("./routes/characters");
app.use("/characters", charactersRoutes);
const characterRoutes = require("./routes/character");
app.use("/character", characterRoutes);
const signupRoutes = require("./routes/signup");
app.use("/user", signupRoutes);
const authRoutes = require("./routes/auth");
app.use("/user", authRoutes);
const favoritesRoutes = require("./routes/favorites");
app.use("/favorites", favoritesRoutes);

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
