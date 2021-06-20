import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Chart } from 'react-google-charts';
import Footer from '../../Components/Footer/Footer';


function QtdAcessos(){

    const data = [
        ["Mês", "Acessos"],
        ['Jan', 361],
        ['Fev', 412],
        ['Mar', 436],
        ['Abri', 448],
        ['Mai', 451],
    ];

    const options = {
        title: "Quantidade de Pedidos",
        hAxis: { title: "Mês", viewWindow: { min: 0, max: 15 } },
        vAxis: { title: "Acessos", viewWindow: { min: 0, max: 15 } },
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
                                               <h1>Quantidade Acessos</h1>
                                        <div className="table-responsive col-sm-7">
                                            <table className="table table-striped table-hover table-danger mb-3">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Cidade</th>
                                                    <th scope="col">Mês</th>
                                                    <th scope="col">Qtd</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Fortaleza</td>
                                                        <td>Jan</td>
                                                        <td>156</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Maracanaú</td>
                                                        <td>Jan</td>
                                                        <td>117</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td >Caucaia</td>
                                                        <td>Jan</td>
                                                        <td>88</td>
                                                    </tr>
                                                </tbody>
                                                
                                            </table>
                                        </div>
                                        
                                        <div className="col-sm-4 text-center">
                                            <div className="card text-white bg-danger mb-3">
                                                <div className="card-header">
                                                    Quantidade de Acessos &nbsp;
                                                    <i className="fas fa-project-diagram fs-1 primary-text"></i>
                                                </div>
                                                    <div className="panel-body p-2">
                                                        <h3>361</h3>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="row mt-2 mb-2 bg-white">
                                        <div className="columnchart_material p-3">
                                            <legend>Quantidade Acessos</legend>
                                            <Chart
                                                className="chart"
                                                chartType="Bar"
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

export default QtdAcessos;