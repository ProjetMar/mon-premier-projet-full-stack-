import Header from "../components/Header";
import React, { useState } from "react";
import { apiService } from '../service/apiService';
import '../styles/pageAddRecette.css'
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
    <div className="form-container">
      <h2 className="form-title">Ajouter une recette</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="form-label">Titre:</label>
          <input className="form-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients" className="form-label">Ingrédients:</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
            className="form-textarea"
          />
        </div>
        <div className="form-group">
          <label htmlFor="instructions" className="form-label">Instructions:</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
            className="form-textarea"
          />
        </div>
        <button type="submit" className="form-button">Envoyer</button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  </>
  );
  
    
}
export default AddRecette;
