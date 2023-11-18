import Employee from "../api/Employee";
import CardActionButton from "./CardActionButton";
import React, { useState } from "react";

const ShowCaseLabel = ({ condition, label1, label2 }) => {
    return (

        <div className={`w-auto h-auto ${condition ? ("bg-emerald-600/60") : ("bg-red-600/60")} flex justify-center rounded-lg border-solid border-2 ${condition ? ("border-emerald-600") : ("border-red-600")} `}>
            <p className={`text-white`}> {condition ? (label1) : (label2)}</p>
        </div>


    )
}

const EditMenu = ({ targetEmployee, employee, loadEmployeeList }) => {
    return (
        <div className={"bg-gray-600 h-auto w-auto p-2 flex flex-col"}>
            <CardActionButton action={targetEmployee.removeFromCompany} handler={loadEmployeeList} label={"Remove Employee"} />
            <CardActionButton
                action={targetEmployee.toggleAdmin}
                handler={loadEmployeeList}
                label={employee.admin ? "Revoke Admin" : "Grant Admin"}
            />
            <CardActionButton
                action={targetEmployee.toggleClock}
                handler={loadEmployeeList}
                label={employee.clockin === true ? "Clock Out" : "Clock In"}
            />

        </div>
    )
}

const MobileEmployeeCard = ({ employee, loadEmployeeList, auth }) => {
    const targetEmployee = new Employee({ auth: auth, target: employee });
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="bg-[#404041] rounded-lg p-2 mb-4">
            <div
                className="w-full h-60"
                style={{
                    backgroundImage: `url(data:image/jpeg;base64,${employee.userImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100%",
                }}
            >
                <div className="z-10 flex justify-between">
                    <ShowCaseLabel label2="Clocked Out" label1="Clocked In" condition={employee.clockin} />
                    <ShowCaseLabel label2="User" label1="Admin" condition={employee.admin} />
                </div>
            </div>
            <div className="flex flex-col mt-2">
                <p className="font-bold text-lg">{employee.name}</p>
                <p className="font-light text">{employee.position === null ? "no position" : employee.position}</p>
            </div>
            <div className="relative">
                <button
                    className="w-10 h-10 bg-gray-500 rounded-lg"
                    onClick={() => setShowMenu(!showMenu)}
                >
                </button>
                {showMenu && (
                    <div className="absolute -bottom-20 -left-4">
                        <EditMenu employee={employee} targetEmployee={targetEmployee} loadEmployeeList={loadEmployeeList} />
                    </div>
                )}
            </div>
        </div>
    );
};


export default MobileEmployeeCard;