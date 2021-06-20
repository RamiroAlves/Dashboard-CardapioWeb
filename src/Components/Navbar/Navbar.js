import React from 'react';
import '../../Styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){

        return(
            <>
            <div className="page-content-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-2 px-2">
                    <div className="d-flex align-items-center">
                        <Link className="navbar-brand" to="#">
                            <i className="fas fa-align-left fs-4 me-3" id="menu-toggle"></i>
                        </Link>    
                        <h2 className="fs-2 m-0">Dashboard</h2>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle fw-bold" to="#" id="navbarDropdown"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-user me-2"></i>Nome da Silva
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                    <li><Link className="dropdown-item" to="/">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>    
            <hr/>

            </>
        )
}

export default Navbar;