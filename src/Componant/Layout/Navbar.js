import React from 'react'
import { Link, NavLink} from "react-router-dom";

const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    React User
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContant" 
                    aria-controLs="navbarSupportedContant" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" exact to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" exact to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" exact to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-outline-light" to="/users/adduser">Add User</Link>
            </div>
        </nav>
    )
}

export default Navbar;