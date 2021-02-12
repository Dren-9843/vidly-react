import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles.css'

const NavBar = ({ user }) => {
  

    return ( 
        <nav class="navbar" className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/movies">Magenta Box</Link>
    <button 
    className="navbar-toggler" 
    type="button" 
    data-toggle="collapse" 
    data-target="#navbarNavAltMarkup" 
    aria-controls="navbarNavAltMarkup" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="nav navbar-nav">

          <NavLink className="nav-link active" to="/movies">Movies</NavLink>
          <NavLink className="nav-link nav-item" to="/customers">Customers</NavLink>
  
          <NavLink className="nav-link nav-item" to="/rentals">Rentals</NavLink>
      </ul>
          
    <ul className="nav navbar-nav ml-auto">
            {user && <React.Fragment><NavLink className="nav-link nav-item" to="/profile">
            {user.name}
            </NavLink>
            <NavLink className="nav-link nav-item" to="/logout">
            Logout
            </NavLink></React.Fragment>}
          {!user && <React.Fragment><NavLink className="nav-link nav-item" to="/login">
            Login
            </NavLink>
            <NavLink className="nav-link nav-item" to="/register">
            Register
            </NavLink>
            </React.Fragment>}
      </ul>
    </div>
</nav>
     );
}
 
export default NavBar;