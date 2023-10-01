import React from "react";

import { Nav, NavLink, NavMenu,Link }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <div class={"navbarMenu"}>
                    <NavLink to ="./">
                     <img src= "./shiftlogo.png" height ="75%" width = "75%" />
                     </NavLink>
                    <NavLink to="/about" activeStyle>
                        <p>Employees</p>
                    </NavLink>
                    <NavLink to="/admin" activeStyle>
                        <p>Settings</p>
                    </NavLink>
                    <NavLink to="/login" activeStyle>
                        <p>Login</p>
                    </NavLink>
                </div>

        </>
    );
};
 
export default Navbar;
