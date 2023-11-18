import Employee from "../api/Employee";
import CardActionButton from "./CardActionButton";
import React, { useState } from "react";


const ShowCaseLabel = ({ condition, label1, label2, }) => {
    return (
        <div className={`w-auto h-auto ${condition ? ("bg-emerald-600/60") : ("bg-red-600/60")} flex justify-center rounded-lg border-solid border-2 ${condition ? ("border-emerald-600") : ("border-red-600")} `}>
            <p className={`text-white`}> {condition ? (label1) : (label2)}</p>
        </div>
    )
}


const EditMenu = ({targetEmployee,currentId, loadEmployeeList}) =>{
    return(
        <div className={"bg-gray-100 h-auto w-auto p-2 flex flex-col"}>

            {currentId !== targetEmployee.target.id && (
                <CardActionButton action={targetEmployee.removeFromCompany} handler={loadEmployeeList} label={"remove"} />
            )}
            <CardActionButton
                action={targetEmployee.toggleAdmin}
                handler={loadEmployeeList}
                label={targetEmployee.isAdmin ? "revoke admin" : "grant admin"}
            />
            <CardActionButton
                action={targetEmployee.toggleClock}
                handler={loadEmployeeList}
                label={targetEmployee.clockin === true ? "clock out" : "clock in"}
            />

        </div>
    )
}

const EmployeeCard = ({ employee, loadEmployeeList, auth }) => {

    const targetEmployee = new Employee({ auth: auth, target: employee })
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className={"bg-white flex flex-col border-2 rounded-lg "}>

            <div className={"w-full h-60"}>
                <div style={{
                    backgroundImage: `url(data:image/jpeg;base64,${employee.userImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: `100%`,
                    height: `100%`
                }} className={"p-1 rounded-lg bg-gray-100 "}>
                    <div className={"z-10 justify-between"} style={{ display: 'flex' }}>
                        <ShowCaseLabel label2={"Clocked Out"} label1={"Clocked In"} condition={employee.clockin} />
                        <ShowCaseLabel label2={"User"} label1={"Admin"} condition={employee.admin} />
                    </div>
                </div>
            </div>
            <div className={"flex flex-row justify-between"}>
                <div className={"flex flex-col"}>
                    <p className={"font-bold text-lg text-black"}>{employee.name}</p>
                    <p className={"font-light text-gray-500"}>{employee.position === null ? ("no position") :(employee.position)}</p>
                </div>
                <div className={"relative h-full grid content-center"}> <button className={"w-10 h-10 bg-white rounded-lg"} onClick={()=>setShowMenu(!showMenu)}>i</button>
                    { showMenu && (
                        <div className="absolute -bottom-20 -left-4  ">
                            <EditMenu targetEmployee={targetEmployee} currentId={auth.id} loadEmployeeList={loadEmployeeList} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default EmployeeCard