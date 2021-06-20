import React from 'react';


export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <i className="fas fa-tachometer-alt me-2"></i>,
        cName: 'nav-text'
    },
    {
        title: 'Qtd Pedidos',
        path: '/quantidade-pedidos',
        icon: <i className="fas fa-chart-line me-2"></i>,
        cName: 'nav-text'
    },
    {
        title: 'Qtd Acessos',
        path: '/quantidade-acessos',
        icon: <i className="fas fa-project-diagram me-2"></i>,
        cName: 'nav-text'
    },
    {
        title: 'Mais Vendidos',
        path: '/mais-vendidos',
        icon: <i className="fas fa-shopping-cart me-2"></i>,
        cName: 'nav-text'
    },
    {
        title: 'Contas à Pagar',
        path: '/contas-pagar',
        icon: <i className="fas fa-money-bill me-2"></i>,
        cName: 'nav-text'
    },
    {
        title: 'Contas à Receber',
        path: '/contas-receber',
        icon: <i className="fas fa-hand-holding-usd me-2"></i>,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/',
        icon: <i className="fas fa-power-off me-2"></i>,
        cName: 'nav-text'
    }
]