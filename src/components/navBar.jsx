import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/movies">Magenta Box</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

          <NavLink className="nav-link active" to="/movies">Movies</NavLink>
          <NavLink className="nav-link nav-item" to="/customers">Customers</NavLink>
  
          <NavLink className="nav-link nav-item" to="/rentals">Rentals</NavLink>

          <NavLink className="nav-link nav-item" to="/login">
            Login
            </NavLink>
            <NavLink className="nav-link nav-item" to="/register">
            Register
            </NavLink>
      </ul>
    </div>
</nav>
     );
}
 
export default NavBar;