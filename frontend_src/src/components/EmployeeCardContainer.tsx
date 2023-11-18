
import React, {ReactNode} from "react";

interface EmployeeCardContainerProps{
    children:ReactNode
}

const EmployeeCardContainer:React.FC<EmployeeCardContainerProps> = ({children}) =>{
    return(
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2 bg-white">
            {children}
        </div>
    )
}
export default EmployeeCardContainer
