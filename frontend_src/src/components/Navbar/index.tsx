import React, {ReactNode} from "react";

interface NavbarProps{
    user:any
    children:ReactNode

}
const Navbar:React.FC<NavbarProps> =  ({ user,children }) => {

    return (
        user.isLoggedIn && (window.innerWidth > 700)  ? (
            <div className={"w-auto h-screen bg-white border-r-2 "}>
                <div className={"w-56 px-2 "}>

                    <div className={"border-2 rounded flex flex-row my-2 p-2"}>
                            <p className={"text-black"}> <strong> {user.username}</strong>  </p>
                            <p className={"text-black"}> @{user.company} </p>
                    </div>

                    <div className={" "}>
                        {children}
                    </div>
                </div>
            </div> ) : (<></>)
    );
};

export default Navbar;
