const express = require('express')
const router = express.Router();
const recetteCtrl = require('../controllers/recette')

router.post('/', recetteCtrl.createThing);

router.put('/:id', recetteCtrl.modifyThing);

router.delete('/:id', recetteCtrl.deleteThing);

router.get('/:id', recetteCtrl.getOneThing);

router.get('/', recetteCtrl.getAllThings);

module.exports = router;