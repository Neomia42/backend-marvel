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

## 🛠️ Dépendances principales

| Package | Version | Description                     |
| ------- | ------- | ------------------------------- |
| express | ^5.1.0  | Framework serveur Node.js       |
| axios   | ^1.11.0 | Requêtes HTTP vers l'API Marvel |
| dotenv  | ^17.2.2 | Variables d'environnement       |
| cors    | ^2.8.5  | Gestion du CORS                 |

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
├── routes/
│   ├── comics.js
│   ├── comic.js
│   ├── characters.js
│   └── character.js
├── utils/
│   └── apiKey.js
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

Ajouter Mongoose et des modèles pour gérer les utilisateurs 👤
Authentification et sécurisation des routes 🔒
Déploiement sur Northflank ou autre plateforme ☁️

## 👩‍💻 Auteur

Projet réalisé par [Neomia42](https://github.com/Neomia42)

✨ Amuse-toi bien avec l'API Marvel ! ✨
