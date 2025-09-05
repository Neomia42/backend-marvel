const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Ajout d'un favori
router.post("/", async (req, res) => {
  try {
    const { userId, marvelId, type } = req.body;
    if (!userId || !marvelId || !type) {
      return res.status(400).json({ message: "Champs manquants" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    // Vérifier si le favori existe déjà
    const alreadyFavorite = user.favorites.some(
      (fav) => fav.marvelId === marvelId && fav.type === type
    );
    if (alreadyFavorite) {
      return res.status(400).json({ message: "Déjà en favori" });
    }

    user.favorites.push({ marvelId, type });
    await user.save();
    return res.status(201).json(user.favorites);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Récupérer les favoris d'un utilisateur
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const { type } = req.query; // ?type=comic ou ?type=character definit dans enum du modèle User

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    let favorites = user.favorites;
    if (type) {
      favorites = favorites.filter((fav) => fav.type === type);
    }
    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
