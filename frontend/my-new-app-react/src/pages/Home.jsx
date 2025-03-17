import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { useEffect, useState } from "react";
function Home() {
  const [data, setData]= useState([]);
  const loaddata = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/recette'); 
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      
      const recettes = await response.json();  
      setData(recettes)
      console.log(recettes);  
    } catch (error) {
      console.error(error);  
    }
  };
  // recuperation des données au chargement du composant grace à useEffect
  useEffect(()=>{
    loaddata()
  },[])
  console.log(data)
    return <>
    <Header />
    <Banner />
    <div>
      {data.map((recette) => (
          <Card
              key={recette._id}
              title={recette.title}
              id={recette._id}
          />
      ))} 
    </div>
  </>
    
}
export default Home;
