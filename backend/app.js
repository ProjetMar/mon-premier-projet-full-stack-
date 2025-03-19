
const express = require('express');
const mongoose = require('mongoose');
const recetteRoutes = require('./routes/recette')

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

app.use('/api/recette',recetteRoutes);

module.exports = app;

