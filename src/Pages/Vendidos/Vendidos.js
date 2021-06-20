import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Chart } from 'react-google-charts';
import Footer from '../../Components/Footer/Footer';


function Vendidos(){

    const data = [
        ["Mês", "Vendas"],
        ['Jan', 158],
        ['Fev', 182],
        ['Mar', 176],
        ['Abri', 162],
        ['Mai', 148],
    ];

    const options = {
        title: "Mais Vendidos",
        hAxis: { title: "Mês", viewWindow: { min: 0, max: 15 } },
        vAxis: { title: "Vendas", viewWindow: { min: 0, max: 15 } },
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
                                               <h1>Mais Vendidos</h1>
                                        <div className="table-responsive col-sm-7">
                                            <table className="table table-striped table-hover table-danger mb-3">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Produto</th>
                                                    <th scope="col">Qtd</th>
                                                    <th scope="col">Valor</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Simply</td>
                                                        <td>158</td>
                                                        <td>R$ 48,00</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Dummy</td>
                                                        <td>82</td>
                                                        <td>R$ 56,99</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td >Been</td>
                                                        <td>76</td>
                                                        <td>R$ 78,65</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td >Printer</td>
                                                        <td>62</td>
                                                        <td>R$ 55,80</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td >Letraset</td>
                                                        <td>48</td>
                                                        <td>R$ 43,50</td>
                                                    </tr>
                                                </tbody>
                                                
                                            </table>
                                        </div>
                                        
                                        <div className="col-sm-4 text-center">
                                            <div className="card text-white bg-danger mb-3">
                                                <div className="card-header">
                                                    Mais Vendidos &nbsp;
                                                    <i className="fas fa-shopping-cart fs-1 primary-text"></i>
                                                </div>
                                                <div className="panel-body p-2">
                                                    <h3>426</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="row mt-2 mb-2 bg-white">
                                        <div className="columnchart_material p-3">
                                            <legend>Mais Vendidos</legend>
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

export default Vendidos;