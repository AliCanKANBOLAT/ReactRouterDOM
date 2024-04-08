import { Link, NavLink } from "react-router-dom";

export default function Navbar ({user,handleLogout}) {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3" data-bs-theme="dark">
        <div className="container">
        <Link className="navbar-brand" to="/">R-Store</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/Products">Products</NavLink>
        <NavLink className="nav-link" to="/About">About</NavLink>
        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        {
            user ? <button className="nav-link" onClick={handleLogout}>Logout ({user.name})</button> : 
            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        }
         </div>
         </div>
         </div>
        </nav>
        </>
     )
    }