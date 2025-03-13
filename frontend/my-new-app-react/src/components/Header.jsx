import { NavLink } from "react-router-dom"
import LOGO from "../assets/LOGO.jpg"
import '../styles/Header.css'
function Header() {
    return(
        <div className="conteneur">
            <header className="header"> 
                <img src={LOGO} alt="logo de kasa" className="header__logo"/>
                <nav className="header__nav">
                    <ul className="header__menu">
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
                            Liste des recettes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Add" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Ajouter une recette
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header