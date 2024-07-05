import React from 'react'

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
    return (
        <div>
            <MDBNavbar light style={{backgroundColor:'#0461C0'}}>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/'>
                        EMI ( Equated Monthly Instalment )
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header