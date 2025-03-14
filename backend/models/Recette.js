const mongoose = require('mongoose');
const recetteSchema = mongoose.Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model('Recette', recetteSchema);
