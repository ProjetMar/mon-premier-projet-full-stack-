
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiService } from "../service/apiService";
import '../styles/pageRecette.css'
function Recette() {
    const { id } = useParams();
    const navigate = useNavigate(); // Permet de rediriger après suppression
    const [data, setData] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedRecette, setEditedRecette] = useState({ ingredients: "", instructions: "" });

    const loaddata = async () => {
        try {
            const recette = await apiService.getRecette(id)
            setData(recette);
            setEditedRecette(recette); // Pré-remplir les champs pour l'édition
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loaddata();
    }, [id]);

    const handleDelete = async () => {
        try { 
             await apiService.deleteRecette(id)
            console.log("Recette supprimée !");
            navigate("/"); // Redirige vers la page d'accueil après suppression
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = async () => {
        try {
            await apiService.updateRecette(id, editedRecette)
            console.log("Recette mise à jour !");
            setEditMode(false);
            loaddata(); // Recharge les données mises à jour
        } catch (error) {
            console.error(error);
        }
    };

    if (!data) {
        return <p>Chargement...</p>;
    }

    return (
        <div className="recette-container">
            {editMode ? (
                // Formulaire d'édition
                <div className="recette-edit">
                    <label className="recette-label" htmlFor="ingredients">Ingrédients:</label>
                    <textarea
                        id="ingredients"
                        type="text"
                        value={editedRecette.ingredients}
                        onChange={(e) => setEditedRecette({ ...editedRecette, ingredients: e.target.value })}
                        className="recette-textarea"
                    />
                    <label htmlFor="instructions" className="recette-label">Instructions:</label>
                    <textarea
                        id="instructions"
                        value={editedRecette.instructions}
                        onChange={(e) => setEditedRecette({ ...editedRecette, instructions: e.target.value })}
                        className="recette-textarea"
                    />
                    <div className="recette-buttons">
                        <button onClick={handleEdit} className="recette-button recette-button--save">Sauvegarder</button>
                        <button onClick={() => setEditMode(false)} className="recette-button recette-button--cancel">Annuler</button>
                    </div>
                </div>
            ) : (
                // Affichage normal
                <div className="recette-view">
                    <div className="recette-info"><strong>Ingrédients:</strong> {data.ingredients}</div>
                    <div className="recette-info"><strong>Instructions:</strong> {data.instructions}</div>
                    <div className="recette-buttons">
                        <button onClick={() => setEditMode(true)} className="recette-button recette-button--edit">Modifier</button>
                        <button onClick={handleDelete} className="recette-button recette-button--delete">Supprimer</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Recette;