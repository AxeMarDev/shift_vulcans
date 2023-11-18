import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import AddEmployeeModal from "../components/AddEmployeeModal";
import MobileAddEmployeeModal from '../components/MobileAddEmplyeeModal';
import EmployeeCard from "../components/EmployeeCard";
import EmployeeCardContainer from "../components/EmployeeCardContainer";

function Employees({ backendAPI }) {

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
    }, []);

    return (
        <>
            <div className="App">
                <button
                    style={{
                        backgroundColor: 'white',
                        borderRadius: '5px', // You can adjust the value to your preference
                        padding: '5px 10px', // Add padding for better appearance
                        cursor: 'pointer',
                    }}
                    onClick={() => setPopupVisible(true)}
                >
                    Add Employee
                </button>
                {window.innerWidth < 768 ? (
                    <MobileAddEmployeeModal isVisible={isPopupVisible} handleVisible={() => setPopupVisible(false)} backendAPI={backendAPI} handleEmployeeList={() => loadEmployeeList()} />
                ) : (
                    <AddEmployeeModal isVisible={isPopupVisible} handleVisible={() => setPopupVisible(false)} backendAPI={backendAPI} handleEmployeeList={() => loadEmployeeList()} />
                )}
            </div>

            <EmployeeCardContainer>
                { employees.items.map((employee) => ( <EmployeeCard auth={backendAPI.auth} employee={employee} loadEmployeeList={loadEmployeeList} />))}
            </EmployeeCardContainer>

        </>
    )

}
export default Employees;