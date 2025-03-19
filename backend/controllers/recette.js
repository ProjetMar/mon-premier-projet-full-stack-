const Recette = require('../models/Recette');

exports.createThing = (req, res, next) => {
    delete req.body._id;
    const recette = new Recette({
      ...req.body
    })
    recette.save()
    .then(()=>res.status(201).json({message:'objet enregistré!'}))
    .catch(error=>res.status(400).json({message: error}));
}

exports.getOneThing = (req, res, next) => {
    Recette.findOne({ _id: req.params.id })
    .then(recette => res.status(200).json(recette))
    .catch(error => res.status(404).json({ error }));
}

exports.modifyThing = (req, res, next) => {
    Recette.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
}

exports.deleteThing = (req, res, next) => {
    Recette.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
}

exports.getAllThings = (req, res, next) => {
    Recette.find()
    .then(things=>res.status(200).json(things))
    .catch(error=>res.status(400).json(error))
}