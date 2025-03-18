
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiService } from "../service/apiService";
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
        <div>
            {editMode ? (
                // Formulaire d'édition
                <div>
                    <label htmlFor="ingredients">Ingrédients:</label>
                    <textarea
                        id="ingredients"
                        type="text"
                        value={editedRecette.ingredients}
                        onChange={(e) => setEditedRecette({ ...editedRecette, ingredients: e.target.value })}
                    />
                    <label htmlFor="instructions">Instructions:</label>
                    <textarea
                        id="instructions"
                        value={editedRecette.instructions}
                        onChange={(e) => setEditedRecette({ ...editedRecette, instructions: e.target.value })}
                    />
                    <button onClick={handleEdit}>Sauvegarder</button>
                    <button onClick={() => setEditMode(false)}>Annuler</button>
                </div>
            ) : (
                // Affichage normal
                <div>
                    <div>Ingredients: {data.ingredients}</div>
                    <div>Instructions: {data.instructions}</div>
                    <button onClick={() => setEditMode(true)}>Modifier</button>
                    <button onClick={handleDelete} style={{ color: "red" }}>Supprimer</button>
                </div>
            )}
        </div>
    );
}

export default Recette;