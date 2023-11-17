import React from "react";

import { Nav, NavLink, NavMenu, Link }
    from "./NavbarElements";

const Navbar = ({ user }) => {

    return (
        <>
            <div class={"navbarMenu"}>
                <NavLink to="./">
                    <div className={"loginHolder"}>
                        <div className={"loginWithinHolder"}>
                            <p className={"userFullName"}> <strong> {user.username}</strong>  </p>
                            <p className={"userUsername"}> @{user.company} </p>
                        </div>
                    </div>
                </NavLink>
                <div className={"menuButtonDic"}>
                    <NavLink to="/employees" activeStyle>
                        <p>Employees</p>
                    </NavLink>
                    <NavLink to="/admin" activeStyle>
                        <p>Settings</p>
                    </NavLink>
                    <NavLink to="/calendar" activeStyle>
                        <p>Calendar</p>
                    </NavLink>
                    <NavLink to="/paycalc" activeStyle>
                        <p>Pay Calculator</p>
                    </NavLink>
                </div>
            </div>

        </>
    );
};

export default Navbar;
