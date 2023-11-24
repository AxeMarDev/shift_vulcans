import React, {ReactNode} from "react";
import ResponsiveDiv from "../ResponsiveDiv";

interface NavbarProps{
    user:any
    children:ReactNode

}
const Navbar:React.FC<NavbarProps> =  ({ user,children }) => {

    // screenDimension( "w-auto h-screen bg-white border-r-2", "","",700).style
    return (
        user.isLoggedIn && (
                <ResponsiveDiv styleBoth={" bg-white border-r-2"} styleOnlyDesktop={"w-auto h-screen"} styleOnlyMobile={"w-screen  absolute bottom-0 "}>
                    <ResponsiveDiv styleBoth={" flex"} styleOnlyDesktop={"w-56 px-2 flex-col "} styleOnlyMobile={"flex-row "}>
                        <ResponsiveDiv styleBoth={" border-2 rounded flex flex-row my-2 p-2"} styleOnlyMobile={"hidden "}>
                            <p className={"text-black"}> <strong> {user.username}</strong>  </p>
                            <p className={"text-black"}> @{user.company} </p>
                        </ResponsiveDiv>
                        <ResponsiveDiv styleBoth={"flex"} styleOnlyMobile={"w-full flex-row justify-between px-4 pb-4"} styleOnlyDesktop={"flex-col"}>
                            {children}
                        </ResponsiveDiv>
                    </ResponsiveDiv>
                </ResponsiveDiv>
        )
    )
};

export default Navbar;
