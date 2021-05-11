import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "../../css/main.css";
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Pollingo</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/" className="navbar-brand">View Polls</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create" className="navbar-brand">Create Polls</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/user/create" className="navbar-brand">Create User</Link>
                    </li>                                        
                </ul>
            </div>
            <Link to="/" className="navbar-brand">Pollingo</Link>            
        </nav>

    )
}

export default Navbar;
