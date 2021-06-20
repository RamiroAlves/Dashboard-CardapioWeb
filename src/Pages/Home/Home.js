import React from 'react';
import { Route, Switch } from 'react-router';
import Dashboard from '../../Components/Dashboard/Dashboard';
import Navbar from '../../Components/Navbar/Navbar';
import QtdPedidos from '../../Pages/QtdPedidos/QtdPedidos';
import Sidebar from '../../Components/Sidebar/Sidebar';
import '../../Styles/Home.css'
import ContasPagar from '../ContasPagar/ContasPagar';
import Footer from '../../Components/Footer/Footer';

function Home(){

        return(
            <>
                <div id="page-content-wrapper" className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Navbar />
                        </div>
                        <div id="sidebar" className="col-2 ml-0">
                            <Sidebar />
                        </div>
                        <div className="col-10">
                            <Switch>
                                <Route path="/home">
                                    <Dashboard />
                                </Route>
                                <Route path="/quantidade-pedidos">
                                    <QtdPedidos />
                                </Route>
                                <Route path="contas-pagar">
                                    <ContasPagar />
                                </Route>
                            </Switch>
                <Footer />
                        </div>
                    </div>

                </div>
                

            </>
        )
}

export default Home;