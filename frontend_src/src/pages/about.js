import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import AddEmployeeModal from "../components/AddEmployeeModal";

const TapInLabel = ({ tapIn }) => {

    return (
        <div className={`w-28 h-auto ${tapIn ? ("bg-emerald-600") : ("bg-red-600")} flex justify-center `}>
            <p> {tapIn ? ("Tapped In") : ("Tapped Out")}</p>
        </div>
    )
}
const AdminLable = ({ adminStatus }) => {

    return (
        <div className={`w-28 h-auto ${adminStatus ? ("bg-emerald-600") : ("bg-red-600")} flex justify-center `}>
            <p> {adminStatus ? ("ADMIN") : ("USER")}</p>
        </div>
    )
}



function employeeCard( employee) {

    return (
        <div className={"bg-neutral-600 flex flex-col rounded-lg p-1"}>
            <div>
                <div className={"z-10"} style={{ display: 'flex' }}>
                    <TapInLabel tapIn={employee.clockin} />
                    <AdminLable adminStatus={employee.admin}></AdminLable>
                </div>
                <div className={"z-0"}>
                    {employee.userImage === "" ? (
                        <img className={"w-full rounded-lg"} src={"data:image/jpeg;base64,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"} />
                    ) : (
                        <img className={"w-full rounded-lg"} src={`data:image/jpeg;base64,${employee.userImage}`} />
                    )}
                </div>
            </div>

            <div className={"employeeinfoStack"}>
                <p className={"welcomeText"}> {employee.name}</p>

                {/*<div style={{ display: 'flex', justifyContent: 'space-between' }}>*/}
                {/*    <button onClick={() => handleDestoryEmployee(user, String(employee.id))} style={{ color: 'white' }}> Delete Employee </button>*/}
                {/*    {!employee.clockin ? (*/}
                {/*        <button onClick={() => handleClockEmployee(user, String(employee.id))} style={{ color: 'white' }}>Clock In</button>*/}
                {/*    ) : (*/}
                {/*        <button onClick={() => handleClockEmployee(user, String(employee.id))} style={{ color: 'white' }}>Clock Out</button>*/}
                {/*    )}*/}
                {/*    {!employee.admin ? (*/}
                {/*        <button onClick={() => handleAdminChange(user, String(employee.id))} style={{ color: 'white' }}>Give Admin</button>*/}
                {/*    ) : (*/}
                {/*        <button onClick={() => handleAdminChange(user, String(employee.id))} style={{ color: 'white' }}>Take Admin</button>*/}
                {/*    )}*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
function About({ backendAPI, setBackendAPI, employees, handleEmployeeList }) {

    const [isPopupVisible, setPopupVisible] = useState(false);


    useEffect(() => {
        backendAPI.getEmployees().then( (employees) => (
            handleEmployeeList(employees)
        ))
    }, []); // <- Empty dependency ar


    return (
        <>
            <div className="App">
                <button style={{ backgroundColor: 'white' }} onClick={()=>setPopupVisible(true)}>
                    Add Employee
                </button>
                <AddEmployeeModal isVisible={isPopupVisible} handleVisible={()=>setPopupVisible(false)} backendAPI={backendAPI} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2 bg-backGroundOfProjectAndPeopleTable">
                {
                    employees.items.map((item) => (
                        employeeCard(item)
                    ))
                }
            </div>

        </>
    )

}
export default About;