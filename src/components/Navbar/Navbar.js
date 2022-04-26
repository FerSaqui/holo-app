import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
 
export const Navbar = () => {
    const navegacion = useNavigate();

    const handleLogout = () => {
        navegacion("/login", {
            replace: true //Reemplaza la vista actual o que reemplace la historia en lugar de crear una nueva entrada en la historia
        });
    }

    return (
 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">Hololive</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/holoEN" className="nav-link">Holo EN</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/holoJP" className="nav-link">Holo JP</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/search" className="nav-link">Search</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <button 
                            className="nav-item bg-danger"
                            onClick={handleLogout}
                        >
                            {/* <NavLink to="/login" className="nav-link">Logout</NavLink> */}
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}