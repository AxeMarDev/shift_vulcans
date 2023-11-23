
import React, {ReactNode} from "react";

interface EmployeeCardContainerProps{
    children:ReactNode
}

const EmployeeCardContainer:React.FC<EmployeeCardContainerProps> = ({children}) =>{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2 bg-white">
            {children}
        </div>
    )
}
export default EmployeeCardContainer
