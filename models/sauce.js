const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  mainPepper: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  heat: {
    type: Number,
    required: true
  },
  // likes: {
  //   type: Number,
  //   required: true
  // },
  // dislikes: {
  //   type: Number,
  //   required: true
  // },
  // usersLiked: {
  //   type: String,
  //   required: true
  // },
  // usersDisliked: {
  //   type: String,
  //   required: true
  // },
});

module.exports = mongoose.model('sauce', sauceSchema);

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
