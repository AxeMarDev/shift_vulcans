import React, { useState } from "react";
import Employee from "../api/Employee";
import screenDimension from "../api/ScreenDimensionStyling";

const popupStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const popupContentStyle = {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
};

const closeBtnStyle = {
    backgroundColor: '#ff5733',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'absolute',
    top: '10px',
    right: '10px',
};

const AddEmployeeModal = ({ isVisible, handleVisible, backendAPI, handleEmployeeList }) => {

    const [employee, setEmployee] = useState(new Employee({ auth: backendAPI.auth }))

    const handleAddEmployee = () => {
        console.log("handle add employee")
        employee.addToCompany().then(handleEmployeeList)
        handleVisible(false)
    }
    const handleFieldChange = ((event, stringIn) => {
        setEmployee(new Employee({ ...employee.data, auth: employee.auth, [stringIn]: event.target.value }))
    })
    const onFileChange = (e) => {
        const file = e.target.files[0]
        var value = ''

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                value = e.target.result.split(',')[1];
                setEmployee(new Employee({ ...employee.data, auth: employee.auth, image: value }))
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        isVisible && (
            <div className={screenDimension("pl-4 pr-4  rounded-2xl bg-white border-2 flex flex-col justify-center content-center", "w-screen h-screen", "w-96", 700).style}>
                <div style={popupStyle}>
                    <div style={popupContentStyle}>
                        <button style={closeBtnStyle} onClick={handleVisible}>
                            Close
                        </button>
                        <div className={screenDimension("pl-4 pr-4  rounded-2xl bg-white border-2 flex flex-col justify-center content-center", "w-screen h-screen", "w-96", 700).style}>
                            <p className={"welcomeText"}>Welcome to dashboard</p>
                            <input
                                type="file"
                                onChange={onFileChange}
                                style={{
                                    border: "1px solid #ccc",
                                    padding: "10px",
                                    margin: "10px 0",
                                    width: "100%"
                                }}
                            />
                            <input
                                type={"text"}
                                onChange={(e) => handleFieldChange(e, "employeeName")}
                                placeholder={"name"}
                                value={employee.data.employeeName}
                                style={{
                                    border: "1px solid #ccc",
                                    padding: "10px",
                                    margin: "10px 0",
                                    width: "100%"
                                }}
                            />
                            <input
                                type={"text"}
                                onChange={(e) => handleFieldChange(e, "employeePassword")}
                                placeholder={"password"}
                                value={employee.data.employeePassword}
                                style={{
                                    border: "1px solid #ccc",
                                    padding: "10px",
                                    margin: "10px 0",
                                    width: "100%"
                                }}
                            />
                            <input
                                type={"text"}
                                onChange={(e) => handleFieldChange(e, "position")}
                                placeholder={"position"}
                                value={employee.data.position}
                                style={{
                                    border: "1px solid #ccc",
                                    padding: "10px",
                                    margin: "10px 0",
                                    width: "100%"
                                }}
                            />
                            <button onClick={() => handleAddEmployee()}>
                                Add Employee
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default AddEmployeeModal