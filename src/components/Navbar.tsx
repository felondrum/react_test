import React from "react";
import * as NavStyle from '../styles/NavbarStyle.tsx'

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#e85a4f'}}>
            <div style={NavStyle.navBarCustomStyle}>
                <NavLink style={NavStyle.navLinkCustomStyle} to='/'>Главная</NavLink>
                <NavLink style={NavStyle.navLinkCustomStyle} to='/cards'>Карточки</NavLink>
            </div>
        </div>

        </>
    )
}

export default Navbar
