import React, { Component } from 'react';
import Logo from '../../Images/logo.png';
import '../../Styles/Sidebar.css';
import { Link } from 'react-router-dom';

class Sidebar extends Component{
    
    render(){
        return(
            <>
                <div className="d-flex visible-xs" id="sidebar">
                    <div className="active bg-white" id="sidebar-wrapper">
                         <div className="sidebar-heading text-center py-4 fs-4 fw-normal text-uppercase border-bottom">
                            <img src={Logo} alt="Logo Cardápio Web" width="45" height="37" />
                            <div className="text-dark">Cardápio Web</div>
                        </div>
                        <div id="menu" className="list-group list-group-flush my-3">
                            <Link to="/home" className="list-group-item list-group-item-action bg-transparent active">
                                <i className="fas fa-tachometer-alt me-2"></i>
                                Dashboard
                            </Link>
                            <Link to="/quantidade-pedidos" className="list-group-item list-group-item-action bg-transparent fw-normal">
                                <i className="fas fa-chart-line me-2"></i>
                                Qtd Pedidos
                            </Link>
                            <Link to="/quantidade-acessos" className="list-group-item list-group-item-action bg-transparent fw-normal">
                                <i className="fas fa-project-diagram me-2"></i>
                                Qtd Acessos
                            </Link>
                            <Link to="/vendidos" className="list-group-item list-group-item-action bg-transparent fw-normal">
                                <i className="fas fa-shopping-cart me-2"></i>
                                Mais Vendidos
                            </Link>
                            <Link to="/contas-pagar" className="list-group-item list-group-item-action bg-transparent fw-normal">
                                <i className="fas fa-money-bill me-2"></i>
                                Contas à Pagar
                            </Link>
                            <Link to="/contas-receber" className="list-group-item list-group-item-action bg-transparent fw-normal">
                                <i className="fas fa-hand-holding-usd me-2"></i>
                                Contas à Receber
                            </Link>
                            <Link to="/" className="list-group-item list-group-item-action bg-transparent text-danger fw-normal">
                                <i className="fas fa-power-off me-2"></i>
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Sidebar;