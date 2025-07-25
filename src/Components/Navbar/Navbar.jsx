import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css";

export default function Navbar() {
  return (
     <nav className="navbar navbar-expand-lg">
  <div className="container ">
    <NavLink className="navbar-brand text-white text-uppercase fw-bolder" to="/">start framwork</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/protfolio">Protfolio</NavLink>
        </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>

       
     
      </ul>
    
    </div>
  </div>
</nav>
  )
}

