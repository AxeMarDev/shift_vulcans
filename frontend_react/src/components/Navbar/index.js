import React from "react";

import { Nav, NavLink, NavMenu,Link }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <div class={"navbarMenu"}>
                    <NavLink to ="./">
                        <div className={"loginHolder"}>
                            <div className={"loginWithinHolder"}>
                                <p className={"userFullName"}> <strong>No user logged in</strong>  </p>
                                <p className={"userUsername"}> please click to login </p>
                            </div>
                        </div>
                    </NavLink>
                    <div className={"menuButtonDic"}>
                        <NavLink to="/about" activeStyle>
                            <p>Employees</p>
                        </NavLink>
                        <NavLink to="/admin" activeStyle>
                            <p>Settings</p>
                        </NavLink>
                    </div>
                </div>

        </>
    );
};
 
export default Navbar;
