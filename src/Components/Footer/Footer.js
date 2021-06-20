import React from 'react';
import { CFooter } from '@coreui/react'

function Footer() {

    return(
        <>
            <CFooter>
                    <hr />
                <div className="d-flex justify-content-center">
                    <span>Desenvolvido por <i>Ramiro Alves</i></span>
                </div>
            </CFooter>
        </>
    )
}

export default Footer;