const mongoose = require('mongoose');
const sanitizerPlugin = require('mongoose-sanitizer-plugin');

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
    type: Number, default:0
  },
  // nombre de dislike reçu
  dislikes: {
    type: Number, default:0
  },
  // Utilisateurs qui Like la sauce
  usersLiked: {
    type: [String], default:[]
  },
  // Utilisateur qui DisLike la sauce
  usersDisliked: {
    type: [String], default:[]
  },
})

// Plugin qui purifie les champs avant de les enregistrer dans la base de donnée.
sauceSchema.plugin(sanitizerPlugin);

module.exports = mongoose.model('Sauce', sauceSchema);