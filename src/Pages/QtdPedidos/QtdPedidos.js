import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Chart } from 'react-google-charts';
import Footer from '../../Components/Footer/Footer';


function QtdPedidos(){

    const data = [
        ["Mês", "Pedidos"],
        ['Jan', 188],
        ['Fev', 203],
        ['Mar', 246],
        ['Abri', 280],
        ['Mai', 343],
    ];

    const options = {
        title: "Quantidade de Pedidos",
        hAxis: { title: "Ano", viewWindow: { min: 0, max: 15 } },
        vAxis: { title: "Pedidos", viewWindow: { min: 0, max: 15 } },
        legend: "none"
    };

    return (
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
                            <div className="content">
                                <div className="container-fluid">
                                    <div className="row mt-4">
                                               <h1>Quantidade Pedidos</h1>
                                        <div className="table-responsive col-sm-7">
                                            <table className="table table-striped table-hover table-danger mb-3">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Cliente</th>
                                                    <th scope="col">Data</th>
                                                    <th scope="col">Valor</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mateus</td>
                                                        <td>21/06/2021</td>
                                                        <td>R$ 698,00</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>José</td>
                                                        <td>22/06/2021</td>
                                                        <td>R$ 1.423,15</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td >Lucas</td>
                                                        <td>25/06/2021</td>
                                                        <td>R$ 678,65</td>
                                                    </tr>
                                                </tbody>
                                                
                                            </table>
                                        </div>
                                        
                                        <div className="col-sm-4 text-center">
                                            <div className="card text-white bg-danger mb-3">
                                            <div className="card-header">
                                                Quantidade de Pedidos &nbsp;
                                                 <i className="fas fa-chart-line fs-1 primary-text"></i>
                                            </div>
                                            
                                                <div className="panel-body p-2">
                                                    <h3>1260</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="row mt-2 mb-2 bg-white">
                                        <div className="columnchart_material p-3">
                                            <legend>Quantidade Pedidos</legend>
                                            <Chart
                                                className="chart"
                                                chartType="Bar"
                                                title="Quantidade de Pedidos"
                                                options={options}
                                                data={data}
                                                width="100%"
                                                height="400px"
                                                legendToggle
                                            />    
                                        </div>
                                     </div>

                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>

                </div>
        </>
    )
}

export default QtdPedidos;