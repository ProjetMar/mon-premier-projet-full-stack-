import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recette(){
    const {id} = useParams()
    console.log(id)
    const [data, setData]= useState('');
    const loaddata = async () => {
        try {
        const response = await fetch(`http://localhost:3000/api/recette/${id}`); 
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération de la recette');
        }
        
        const recette = await response.json();  
        setData(recette)
        console.log(recette);  
        } catch (error) {
        console.error(error);  
        }
    };
    useEffect(() => {
        loaddata();
    }, [id]);
    return(
        <div>
            <div>{data.ingredients}</div>
            <div>{data.instructions}</div>
        </div>
    )
}
export default Recette