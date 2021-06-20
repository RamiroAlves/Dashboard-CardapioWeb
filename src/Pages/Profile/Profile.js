import React from 'react';
import { 
    CForm, 
    CFormLabel, 
    CRow, 
    CContainer } from '@coreui/react'
import Navbar from '../../Components/Navbar/Navbar'    
import Sidebar from '../../Components/Sidebar/Sidebar';
import Footer from '../../Components/Footer/Footer'

function Profile(){

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
                        <div className="col-10 p-2">
                            <div className="content">
                                <div className="container-fluid">
                                    <CContainer className="container col-md-6">    
                                        <CForm>
                                            <legend>Meu Perfil</legend><hr/>
                                            <CRow className="row mb-3">
                                                <CFormLabel htmlFor="nome" className="col-sm-12 col-form-label">
                                                    Nome:<h5>Nome da Silva</h5>
                                                </CFormLabel>                            
                                            </CRow>
                                            <CRow className="mb-3">
                                                <CFormLabel htmlFor="email" className="col-sm-12 col-form-label">
                                                    E-mail:<h5>nomedasilva@email.com</h5>
                                                </CFormLabel>
                                                <CFormLabel htmlFor="email" className="col-sm-2 col-form-label">
                                                    
                                                </CFormLabel>
                                            </CRow>
                                            <CRow className="mb-3">
                                                <CFormLabel htmlFor="senha" className="col-sm-2 col-form-label">
                                                    Senha:<h5>******</h5>
                                                </CFormLabel>
                                            </CRow>

                                            
                                        </CForm>
                                    </CContainer>
                                </div>
                            </div>
                            <div className="col-10 offset-2 fixed-bottom">
                                <Footer />
                            </div>
                        </div>
                    </div>

                </div>
            
        </>
    )
}

export default Profile;