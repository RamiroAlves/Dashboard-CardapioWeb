import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Chart } from 'react-google-charts';
import Footer from '../../Components/Footer/Footer';


function ContasPagar(){

    const data = [
        ["Mês", "Valor"],
        ['Jun', 698.00],
        ['Jun', 1423.15],
        ['Jun', 678.65],
        ['Jul', 1448.32],
        ['Jul', 751.10],
    ];

    const options = {
        title: "Contas à Pagar",
        hAxis: { title: "Mês", viewWindow: { min: 0, max: 15 } },
        vAxis: { title: "Valor", viewWindow: { min: 0, max: 15 } },
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
                                                <h1>Contas à Pagar</h1>
                                        <div className="table-responsive col-sm-7">
                                            <table className="table table-striped table-hover table-danger mb-3">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Fornecedor</th>
                                                    <th scope="col">Data</th>
                                                    <th scope="col">Valor</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>21/06/2021</td>
                                                        <td>R$ 698,00</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>22/06/2021</td>
                                                        <td>R$ 1.423,15</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Larry the Bird</td>
                                                        <td>25/06/2021</td>
                                                        <td>R$ 678,65</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>Contrary</td>
                                                        <td>02/07/2021</td>
                                                        <td>R$ 1.448,32</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td>Richard</td>
                                                        <td>06/07/2021</td>
                                                        <td>R$ 751,10</td>
                                                    </tr>
                                                </tbody>
                                                
                                            </table>
                                        </div>
                                        
                                        <div className="col-sm-4 text-center">
                                            <div className="card text-white bg-danger mb-3">
                                                <div className="card-header">
                                                    Contas à Pagar &nbsp;
                                                    <i className="fas fa-money-bill fs-1 primary-text"></i>
                                                </div>
                                                <div className="panel-body p-2">
                                                    <h3>R$ 4.999,22</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="row mt-2 mb-2 bg-white">
                                        <div className="columnchart_material p-3">
                                            <legend>Contas à Pagar</legend>
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

export default ContasPagar;