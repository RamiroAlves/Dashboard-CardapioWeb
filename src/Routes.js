import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './auth';

import Login from './Components/Login/Login';
import Home from './Pages/Home/Home';
import QtdPedidos from './Pages/QtdPedidos/QtdPedidos';
import QtdAcessos from './Pages/QtdAcessos/QtdAcessos';
import Vendidos from './Pages/Vendidos/Vendidos';
import ContasPagar from './Pages/ContasPagar/ContasPagar';
import ContasReceber from './Pages/ContasReceber/ContasReceber';
import Profile from './Pages/Profile/Profile';

const PrivateRoute = ({ component: Component, ...rest }) =>{
    return(
    <Route { ...rest } render={props =>
        (
        isAuthenticated() ? (
            <Component { ...props } />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    )} />
    )
}

const Routes = () =>{
    return(
    <BrowserRouter>
        <Switch>
            <PrivateRoute exact path="/" component={Login} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/quantidade-pedidos" component={QtdPedidos} />
            <PrivateRoute path="/quantidade-acessos" component={QtdAcessos} />
            <PrivateRoute path="/vendidos" component={Vendidos} />
            <PrivateRoute path="/contas-pagar" component={ContasPagar} />
            <PrivateRoute path="/contas-receber" component={ContasReceber} />
            <PrivateRoute path="/profile" component={Profile} />
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;