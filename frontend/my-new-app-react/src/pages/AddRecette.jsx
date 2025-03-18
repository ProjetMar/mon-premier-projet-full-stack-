import Header from "../components/Header";
import React, { useState } from "react";
import { apiService } from '../service/apiService';
function AddRecette() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = { title, ingredients,
      instructions };
    
    try {
      await apiService.createRecette(data);
      setMessage("Données envoyées avec succès !");
      setTitle("");
      setIngredients('');
      setInstructions('');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
    <Header />
    <div>
      <h2>Ajouter une recette</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingrédients:</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  </>
  );
  
    
}
export default AddRecette;
