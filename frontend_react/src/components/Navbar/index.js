import React from "react";

import { Nav, NavLink, NavMenu,Link }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to ="./">
                     <img src= "./shiftlogo.png" height ="75%" width = "75%" />
                     </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/admin" activeStyle>
                        Admin
                    </NavLink>
                    <NavLink to="/login" activeStyle>
                        Login
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;
