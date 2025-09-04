//creation d'un fichier pour stocker la clé API
//et l'importer dans les fichiers où elle est nécessaire
//cela évite de répéter process.env.MARVEL_API_KEY partout

const apiKey = process.env.MARVEL_API_KEY;
module.exports = apiKey;
// ou directement process.env.MARVEL_API_KEY
