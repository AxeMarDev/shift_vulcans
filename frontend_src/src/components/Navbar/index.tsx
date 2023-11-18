import React, {ReactNode} from "react";
import screenDimension from "../../api/ScreenDimensionStyling";

interface NavbarProps{
    user:any
    children:ReactNode

}
const Navbar:React.FC<NavbarProps> =  ({ user,children }) => {

    // screenDimension( "w-auto h-screen bg-white border-r-2", "","",700).style
    return (
        user.isLoggedIn ? (
            <div className={ screenDimension( " bg-white border-r-2", "w-screen  absolute bottom-0 ","w-auto h-screen",700).style }>
                <div className={ screenDimension( "flex", "flex-row ","w-56 px-2 flex-col ",700).style }>
                    <div className={ screenDimension( "border-2 rounded flex flex-row my-2 p-2", "hidden"," ",700).style }>
                            <p className={"text-black"}> <strong> {user.username}</strong>  </p>
                            <p className={"text-black"}> @{user.company} </p>
                    </div>
                    <div className={screenDimension( "flex", "w-full flex-row justify-between px-4 pb-4"," flex-col ",700).style}>
                        {children}
                    </div>
                </div>
            </div> ) : (<></>)
    );
};

export default Navbar;
