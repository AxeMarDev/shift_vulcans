import React, {ReactNode} from "react";
import screenDimension from "../api/ScreenDimensionStyling";

interface ResponsiveDivProps{
    styleBoth?:string
    styleOnlyMobile?:string
    styleOnlyDesktop?:string
    children:ReactNode
}
const ResponsiveDiv:React.FC<ResponsiveDivProps> = ({children, styleOnlyMobile,styleOnlyDesktop,styleBoth}) =>{
    return(
        <div className={ screenDimension( styleBoth || "",  styleOnlyMobile || "" ,styleOnlyDesktop || "",700 ).style }>
            {children}
        </div>
    )
}
export default ResponsiveDiv