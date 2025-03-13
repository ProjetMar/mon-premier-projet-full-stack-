import Header from "../components/Header";
import Banner from "../components/Banner";
import data from "../data.json"
import Card from "../components/Card";
function Home() {
    return <>
    <Header />
    <Banner />
    <div>
      {data.map((recette) => (
          <Card
              key={recette.id}
              title={recette.title}
              id={recette.id}
          />
      ))} 
    </div>
  </>
    
}
export default Home;
