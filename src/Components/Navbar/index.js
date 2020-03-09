import React from 'react';
import styled from 'styled-components';

import './Navbar.css'

const NavbarTitle = styled.h1`
    margin: 0 !important;
    color: black;
    margin-bottom: 40px;
    font-size: 18px;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
`;

const Navbar = () => {

    return(
        <div className="Navbar">
            <div>
                <NavbarTitle>All Tasks</NavbarTitle>
            </div>
 
            <div style={{ display: 'flex' }}>
                {/* Temporary UI material */}
                <input type="text" placeholder="Search Tasks"/>
                <label style={{ marginLeft: '20px' }}>Connected User Name & LOGO</label>
            </div>
        </div>

    );
}

export default Navbar;