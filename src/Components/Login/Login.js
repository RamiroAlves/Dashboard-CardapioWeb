import React, { Component } from 'react';
import { 
    CForm, 
    CFormLabel, 
    CFormControl, 
    CButton, 
    CRow, 
    CCol,
    CContainer } from '@coreui/react';
import '../../Styles/Login.css'    

class Login extends Component{

    render(){
        return(
            <>
                <div id="form" className="container-fluid mt-5">
                    <CContainer className="container col-md-3">
                        <CRow className="row g-3 d-flex align-items-center m-auto">
                            <CCol xs="auto">
                            <legend>Login</legend>
                                <CForm className="">
                                    <div className="mb-3">
                                        <CFormLabel htmlFor="email">Email</CFormLabel>
                                        <CFormControl
                                        type="email"
                                        id="email"
                                        aria-describedby="emailHelp"
                                        required
                                        />
                                        
                                    </div>
                                    <div className="mb-3">
                                        <CFormLabel htmlFor="senha">Senha</CFormLabel>
                                        <CFormControl type="password" id="senha" required/>
                                    </div>
                                    <CButton type="submit" color="primary">
                                        Logar
                                    </CButton>
                                </CForm>
                            </CCol>
                        </CRow>
                    </CContainer>    
                </div>      
            </>
        )
    }
}

export default Login;