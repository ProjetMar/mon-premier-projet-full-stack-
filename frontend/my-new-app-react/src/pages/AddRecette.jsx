import Header from "../components/Header";
import React, { useState } from "react";
function AddRecette() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = { title };
    
    try {
      const response = await fetch("http://localhost:3000/api/recette", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi des données");
      }
      
      setMessage("Données envoyées avec succès !");
      setTitle("");
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
        <button type="submit">Envoyer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  </>
  );
  
    
}
export default AddRecette;
