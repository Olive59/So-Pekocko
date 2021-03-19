const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  // UserId du createur
  userId: {
    type: String,
    required: true
  },
  // Nom de la sauce
  name: {
    type: String,
    required: true,
  },
  // Créateur de la sauce
  manufacturer: {
    type: String,
    required: true,
  },
  // description de la sauce
  description: {
    type: String,
    required: true,
  },
  // Ingredients qui pimentent la sauce
  mainPepper: {
    type: String,
    required: true,
  },
  // Adresse de l'image de presentation de la sauce
  imageUrl: {
    type: String,
    required: true
  },
  // Force le piquant de la sauce
  heat: {
    type: Number,
    required: true
  },
  // nombre de Like reçu
  likes: {
    type: Number
  },
  // nombre de dislike reçu
  dislikes: {
    type: Number
  },
  // Utilisateurs qui Like la sauce
  usersLiked: {
    type: [String]
  },
  // Utilisateur qui DisLike la sauce
  usersDisliked: {
    type: [String]
  },
})


module.exports = mongoose.model('Sauce', sauceSchema);

// ● name: string — nom de la sauce ;
// ● manufacturer: string — fabricant de la sauce ;
// ● description: string — description de la sauce ;
// ● mainPepper: string — principal ingrédient dans la sauce ;
// ● imageUrl: string — string de l'image de la sauce téléchargée par l'utilisateur ;
// ● heat: number — nombre entre 1 et 10 décrivant la sauce ;
// ● likes: number — nombre d'utilisateurs qui aiment la sauce ;
// ● dislikes: number — nombre d'utilisateurs qui n'aiment pas la sauce ;
// ● usersLiked: [string] — tableau d'identifiants d'utilisateurs ayant aimé la sauce
// ;
// ● usersDisliked: [string] — tableau d'identifiants d'utilisateurs n'ayant pas aimé
// la sauce.
