import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import AddEmployeeModal from "../components/AddEmployeeModal";
import MobileAddEmployeeModal from '../components/MobileAddEmplyeeModal';
import EmployeeCard from "../components/EmployeeCard";
import MobileEmployeeCard from "../components/MobileEmployeeCard";

function Employees({ backendAPI }) {

    const isMobile = window.innerWidth < 768;

    const [employees, setEmployees] = useState({ items: [] })

    const [isPopupVisible, setPopupVisible] = useState(false);

    const loadEmployeeList = () => {
        backendAPI.getEmployees().then((employeesNew) => {
            setEmployees({
                items: employeesNew,
            });
        })
    }

    useEffect(() => {
        loadEmployeeList()
    }, []); // <- Empty dependency ar


    return (
        <>
            <div className="App">
                <button style={{ backgroundColor: 'white' }} onClick={() => setPopupVisible(true)}>
                    Add Employee
                </button>
                {isMobile ? (
                    <MobileAddEmployeeModal isVisible={isPopupVisible} handleVisible={() => setPopupVisible(false)} backendAPI={backendAPI} handleEmployeeList={() => loadEmployeeList()} />
                ) : (
                    <AddEmployeeModal isVisible={isPopupVisible} handleVisible={() => setPopupVisible(false)} backendAPI={backendAPI} handleEmployeeList={() => loadEmployeeList()} />
                )}
            </div>
            {isMobile ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2 bg-backGroundOfProjectAndPeopleTable">
                    {
                        employees.items.map((employee) => (
                            <EmployeeCard auth={backendAPI.auth} employee={employee} loadEmployeeList={loadEmployeeList} />
                        ))
                    }
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2 bg-backGroundOfProjectAndPeopleTable">
                    {
                        employees.items.map((employee) => (
                            <MobileEmployeeCard auth={backendAPI.auth} employee={employee} loadEmployeeList={loadEmployeeList} />
                        ))
                    }
                </div>
            )}


        </>
    )

}
export default Employees;