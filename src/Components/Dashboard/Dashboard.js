import React from 'react';
import '../../Styles/Dashboard.css';
import { Chart } from 'react-google-charts';

function Dashboard() {


    const data = [
        ["Mês", "Vendas"],
        ['Jan', 188],
        ['Fev', 203],
        ['Mar', 246],
        ['Abri', 280],
        ['Mai', 343],
    ];

    const options = {
        title: "Quantidade de Pedidos",
        hAxis: { title: "Ano", viewWindow: { min: 0, max: 15 } },
        vAxis: { title: "Vendas", viewWindow: { min: 0, max: 15 } },
        legend: "none"
    };


    return (

      <>

            <div className="content">
                <div className="container-fluid">
                    <div className="row mt-4">
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
                        <div className="col-sm-4 text-center">
                            <div className="card text-white bg-danger mb-3">
                                <div className="card-header">
                                    Quantidade de Acessos &nbsp;
                                    <i className="fas fa-project-diagram fs-1 primary-text"></i>
                                </div>
                                <div className="panel-body p-2">
                                    <h3>2108</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 text-center">
                            <div className="card text-white bg-danger mb-3">
                                <div className="card-header">
                                    Mais Vendidos &nbsp;
                                    <i className="fas fa-shopping-cart fs-1 primary-text"></i>
                                </div>
                                <div className="panel-body p-2">
                                    <h3>4920</h3>
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
        {/* <div className="container-fluid px-4 float-right">
            <div className="row g-3 my-2">
                    <div className="col-md-3">
                        <div className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">720</h3>
                                <p className="fs-5">Qtd Pedidos</p>
                            </div>
                            <i className="fas fa-gift fs-1 primary-text border rounded-full p-3"></i>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">3899</h3>
                                <p className="fs-5">Qtd Vendidos</p>
                            </div>
                            <i className="fas fa-truck fs-1 primary-text border rounded-full p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">4920</h3>
                                <p className="fs-5">Mais Vendidos</p>
                            </div>
                            <i
                                className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full p-3"></i>
                        </div>
                    </div>

                    <div clasName="col-md-3">
                        <div className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">%25</h3>
                                <p className="fs-5">Increase</p>
                            </div>
                            <i className="fas fa-chart-line fs-1 primary-text border rounded-full p-3"></i>
                        </div>
                    </div>
                </div>

            <div className="row my-5">
                    <h3 className="fs-4 mb-3">Recent Orders</h3>
                    <div className="col">
                        <table className="table rounded shadow-sm  table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" width="50">#</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Television</td>
                                    <td>Jonny</td>
                                    <td>$1200</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Laptop</td>
                                    <td>Kenny</td>
                                    <td>$750</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Cell Phone</td>
                                    <td>Jenny</td>
                                    <td>$600</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Fridge</td>
                                    <td>Killy</td>
                                    <td>$300</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Books</td>
                                    <td>Filly</td>
                                    <td>$120</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Gold</td>
                                    <td>Bumbo</td>
                                    <td>$1800</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Pen</td>
                                    <td>Bilbo</td>
                                    <td>$75</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Notebook</td>
                                    <td>Frodo</td>
                                    <td>$36</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>Dress</td>
                                    <td>Kimo</td>
                                    <td>$255</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>Paint</td>
                                    <td>Zico</td>
                                    <td>$434</td>
                                </tr>
                                <tr>
                                    <th scope="row">11</th>
                                    <td>Carpet</td>
                                    <td>Jeco</td>
                                    <td>$1236</td>
                                </tr>
                                <tr>
                                    <th scope="row">12</th>
                                    <td>Food</td>
                                    <td>Haso</td>
                                    <td>$422</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </div> */}
      </>
    )
  }
  
  export default Dashboard;