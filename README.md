# 🚀 Marvel Backend API

Bienvenue dans le backend Marvel !

## ✨ Fonctionnalités

- 🔎 **Recherche de Comics**
  - `/comics` : Liste tous les comics Marvel
  - `/comics/:characterId` : Liste les comics d'un personnage
- 🦸‍♂️ **Recherche de Personnages**
  - `/characters` : Liste tous les personnages Marvel
  - `/character/:characterid` : Détails d'un personnage
- 📚 **Détails d'un Comic**
  - `/comic/:comicid` : Détails d'un comic
- 👤 **Gestion des utilisateurs**
  - `/user/signup` : Inscription avec avatar (upload en base64)
  - `/user/login` : Authentification, retourne le token, l'id et les favoris
- ⭐ **Favoris**
  - `/favorites` (POST) : Ajoute un favori (comic ou personnage) à l'utilisateur
  - `/favorites/:userId` (GET) : Liste les favoris d'un utilisateur, filtrage possible par type

## 🛠️ Dépendances principales

| Package            | Version | Description                        |
| ------------------ | ------- | ---------------------------------- |
| express            | ^5.1.0  | Framework serveur Node.js          |
| mongoose           | ^8.18.0 | ODM MongoDB pour Node.js           |
| axios              | ^1.11.0 | Requêtes HTTP vers l'API Marvel    |
| dotenv             | ^17.2.2 | Variables d'environnement          |
| cors               | ^2.8.5  | Gestion du CORS                    |
| cloudinary         | ^2.7.0  | Upload et gestion d'images         |
| express-fileupload | ^1.5.2  | Middleware pour upload de fichiers |
| crypto-js          | ^4.2.0  | Hash et chiffrement                |
| uid2               | ^1.0.0  | Génération de tokens et de salt    |

## ⚙️ Configuration

1. Crée un fichier `.env` à la racine du dossier backend :
   ```env
   MARVEL_API_KEY=ton_api_key
   ```
2. Installe les dépendances :
   ```bash
   npm install
   ```
3. Lance le serveur :
   ```bash
   npx nodemon index.js
   ```

## 📦 Structure du projet

```
backend-marvel/
├── index.js
├── package.json
├── models/
│   ├── User.js         # Modèle utilisateur avec favoris
│   └── ...
├── routes/
│   ├── comics.js
│   ├── comic.js
│   ├── characters.js
│   ├── character.js
│   ├── favorites.js    # Routes pour gérer les favoris
│   ├── signup.js       # Inscription utilisateur
│   ├── auth.js         # Authentification utilisateur
│   └── ...
├── utils/
│   ├── apiKey.js
│   └── convertToBase64.js # Middleware pour convertir les fichiers en base64
└── .env
```

## 💡 Astuce

Pour construire l'URL d'une image Marvel :

```js
const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
```

À utiliser côté frontend !

---

## 🚧 Évolutions possibles:

- Sécurisation des routes favorites (authentification requise)
- Suppression de favoris
- Pagination des résultats
- Déploiement sur Northflank ou autre plateforme ☁️

## 👩‍💻 Auteur

Projet réalisé par [Neomia42](https://github.com/Neomia42)

---

## 📖 Modèle User (extrait)

```js
const User = mongoose.model("User", {
  email: String,
  account: {
    username: String,
    avatar: Object,
  },
  favorites: [
    {
      marvelId: String,
      type: { type: String, enum: ["character", "comic"] },
      addedAt: Date,
    },
  ],
  // ...
});
```

---

✨ Amuse-toi bien avec l'API Marvel ! ✨
