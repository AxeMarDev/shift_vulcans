import React from "react";

import { Nav, NavLink, NavMenu,Link }
    from "./NavbarElements";
 
const Navbar = ({user}) => {
    console.log(user.name)
    console.log(user.password)
    console.log(user.company)
    return (
        <>
            <div class={"navbarMenu"}>
                    <NavLink to ="./">
                        <div className={"loginHolder"}>
                            <div className={"loginWithinHolder"}>
                                <p className={"userFullName"}> <strong> {user.username}</strong>  </p>
                                <p className={"userUsername"}> @{user.company} </p>
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
