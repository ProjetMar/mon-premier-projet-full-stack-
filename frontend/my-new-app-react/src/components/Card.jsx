import { Link } from "react-router-dom"
// import "../../styles/Card/card.css"
function Card({ title, id }) {
    return (
      <Link className="card" to={`/add/${id}`}> 
          <p className="card__title">{title}</p>
      </Link>
    )
  }
  export default Card