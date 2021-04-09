const Sauce = require('../models/sauce');
const fs = require('fs');

exports.createSauce = (req, res, next) => {
  console.log('req.body=', req.body);
  const sauceObject = JSON.parse(req.body.sauce);
  const sauce = new Sauce({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  sauce.save()
    .then(() => res.status(201).json({
      message: 'Objet enregistré !'
    }))
    .catch(error => res.status(400).json({
      error
    }));
};

exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({
    _id: req.params.id
  }).then(
    (sauce) => {
      res.status(200).json(sauce);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifySauce = (req, res, next) => {
  const sauceObject = req.file ? {
    ...JSON.parse(req.body.sauce),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  } : {
    ...req.body
  };
  Sauce.updateOne({
      _id: req.params.id
    }, {
      ...sauceObject,
      _id: req.params.id
    })
    .then(() => res.status(200).json({
      message: 'Objet modifié !'
    }))
    .catch(error => res.status(400).json({
      error
    }));
};

exports.deleteSauce = (req, res, next) => {
  Sauce.findOne({
      _id: req.params.id
    })
    .then(sauce => {
      const filename = sauce.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Sauce.deleteOne({
            _id: req.params.id
          })
          .then(() => res.status(200).json({
            message: 'Objet supprimé !'
          }))
          .catch(error => res.status(400).json({
            error
          }));
      });
    })
    .catch(error => res.status(500).json({
      error
    }));
};

exports.getAllSauce = (req, res, next) => {
  console.log('req=', req)
  Sauce.find().then(
    (sauces) => {
      res.status(200).json(sauces);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.likeDislike = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
      .then(sauce => {

          if (sauce.usersLiked.includes(req.body.userId)) {
              sauce.usersLiked.splice(sauce.usersLiked.indexOf(req.body.userId), 1);
          }
          if (sauce.usersDisliked.includes(req.body.userId)) {
              sauce.usersDisliked.splice(sauce.usersDisliked.indexOf(req.body.userId), 1);
          }
          switch (req.body.like) {
              case 1:
                  sauce.usersLiked.push(req.body.userId);
                  break;
              case -1:
                  sauce.usersDisliked.push(req.body.userId);
                  break;
              case 0:
                  break;
              default:
                  res.status(400).json({ error: 'Bad Request' });
          }
          sauce.likes = sauce.usersLiked.length;
          sauce.dislikes = sauce.usersDisliked.length;
          sauce.save()
              .then(() => {
                  res.status(201).json({ message: 'Sauce enregistrée !' })
              })
              .catch(error => {
                  res.status(500).json({ error });
              })
      })
      .catch(error => res.status(500).json({ error }));

};
