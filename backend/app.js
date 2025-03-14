
const express = require('express');
const mongoose = require('mongoose');
const Recette = require('./models/Recette')
mongoose.connect("mongodb://dataRecettesMarwa:Marwa17041995@cluster0-shard-00-00.ezuqt.mongodb.net:27017,cluster0-shard-00-01.ezuqt.mongodb.net:27017,cluster0-shard-00-02.ezuqt.mongodb.net:27017/?ssl=true&replicaSet=atlas-kxg824-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0",
   { useNewUrlParser: true,
     useUnifiedTopology: true })
   .then(() => console.log('Connexion à MongoDB réussie !'))
   .catch(() => console.log('Connexion à MongoDB échouée !'));
 const app = express();
 app.use(express.json())
 app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
});
app.post('/api/recette', (req, res, next) => {
   delete req.body._id;
   const recette = new Recette({
     ...req.body
   })
   recette.save()
   .then(()=>res.status(201).json({message:'objet enregistré!'}))
   .catch(error=>res.status(400).json({message: error}));
});
// app.use((req, res) => {
//    res.json({ message: 'Votre requête a bien été reçue !' }); 
// });
app.get('/api/recette', (req, res, next) => {
   Recette.find()
    .then(things=>res.status(200).json(things))
    .catch(error=>res.status(400).json(error))
 });
module.exports = app;

