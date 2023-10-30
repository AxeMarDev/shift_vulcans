import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';

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


function employeeCard(user, employee, handleDestoryEmployee, handleClockEmployee, handleAdminChange) {
    // this function will return a html layout for card elements in the employees view
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

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button onClick={() => handleDestoryEmployee(user, String(employee.id))} style={{ color: 'white' }}> Delete Employee </button>
                    {!employee.clockin ? (
                        <button onClick={() => handleClockEmployee(user, String(employee.id))} style={{ color: 'white' }}>Clock In</button>
                    ) : (
                        <button onClick={() => handleClockEmployee(user, String(employee.id))} style={{ color: 'white' }}>Clock Out</button>
                    )}
                    {!employee.admin ? (
                        <button onClick={() => handleAdminChange(user, String(employee.id))} style={{ color: 'white' }}>Give Admin</button>
                    ) : (
                        <button onClick={() => handleAdminChange(user, String(employee.id))} style={{ color: 'white' }}>Take Admin</button>
                    )}
                </div>
            </div>
        </div>
    )
}
function About({ user, employees, handleEmployeeList }) {

    const [isPopupVisible, setPopupVisible] = useState(false);
    const openPopup = () => {
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };
    // curl --header "Content-Type: application/json"  --request GET --data '{"adminname":"user1", "adminpassword":"2002068", "companyname":"axellelectric" }'  http://localhost:3000/companyemployees
    const handleEmployeelist = (user) => {

        const queryParams = new URLSearchParams({
            companyname: user.company,
        });
        const url = `http://localhost:3000/companyemployees?${queryParams}`;
        fetch(url, {
            method: 'GET', // Change the method if needed (e.g., POST)
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${user.token}`
            },
        })
            .then((response) => response.json())
            .then((json) => {
                // Handle the API response data here


                handleEmployeeList(json)

                // here
                // You can also perform any other actions or state updates based on the response
            })

            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
    };

    const [nameOfEmployee, setNameOfEmployee] = useState("")
    const HandleNameOfEmployee = (event) => {
        setNameOfEmployee(event.target.value)
    }
    const [passwordOfEmployee, setPasswordOfEmployee] = useState("")
    const HandlePasswordOfEmployee = (event) => {
        setPasswordOfEmployee(event.target.value)
    }

    const [image, setImage] = useState("");

    const onFileChange = (e) => {
        const file = e.target.files[0]
        var value = ''

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                value = e.target.result.split(',')[1];
                setImage(value);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddEmployee = (user, employees, image) => {

        const secondData = `${image}`

        const queryParams = new URLSearchParams({
            companyname: user.company,
            employeename: nameOfEmployee,
            employeepass: passwordOfEmployee,
        });

        const url = `http://localhost:3000/companyemployees?${queryParams}`;

        fetch(url, {
            method: 'POST', // Change the method if needed (e.g., POST),
            headers: {
                'Authorization': `${user.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userImage: secondData,
            })
        })
            .then((response) => response.json())
            .then(() => {
                setNameOfEmployee("")
                setPasswordOfEmployee("")
                setImage("")
                handleEmployeelist(user)
            })

            .catch((error) => {
                console.error(error);
            });
    };
    const handleDestoryEmployee = (user, id) => {

        const queryParams = new URLSearchParams({
            companyname: user.company,
        });
        const url = `http://localhost:3000/companyemployees/${id}?${queryParams}`;
        fetch(url, {
            method: 'DELETE', // Change the method if needed (e.g., POST)
            headers: {
                'Authorization': `${user.token}`,
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then(() => {
                // Handle the API response data here
                handleEmployeelist(user)
            })

            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
    };

    const handleClockEmployee = (user, id) => {

        const queryParams = new URLSearchParams({
            action: 0,
            companyname: user.company,
            updateAction: "clock",
        });
        const url = `http://localhost:3000/employee/${id}?${queryParams}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `${user.token}`,
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                // Handle the API response data here
                console.log(json)
                handleEmployeelist(user)
            })

            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
    }

    const handleAdminChange = (user, id) => {

        const queryParams = new URLSearchParams({
            action: 1,
            companyname: user.company,
            updateAction: "admin",
        });
        const url = `http://localhost:3000/employee/${id}?${queryParams}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `${user.token}`,
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                // Handle the API response data here
                console.log(json)
                handleEmployeelist(user)
            })

            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
    }

    // Use the useEffect hook to run the function when the component mounts
    useEffect(() => {
        handleEmployeelist(user);
        // The empty dependency array [] ensures that this effect runs only once when the component mounts
    }, []); // <- Empty dependency ar

    return (
        <>
            <div className="App">
                <button onClick={openPopup}>Add Employee</button>
                {isPopupVisible && (
                    <div style={popupStyle}>
                        <div style={popupContentStyle}>
                            <button style={closeBtnStyle} onClick={closePopup}>
                                Close
                            </button>
                            <p className={"welcomeText"}> welcome to dashboard</p>
                            <input type="file" onChange={onFileChange} />
                            <input type={"text"} onChange={HandleNameOfEmployee} placeholder={"name"} value={nameOfEmployee} />
                            <input type={"text"} onChange={HandlePasswordOfEmployee} placeholder={"password"} value={passwordOfEmployee} />
                            <button onClick={() => handleAddEmployee(user, employees, image)}> Add Employee </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2 bg-backGroundOfProjectAndPeopleTable">
                {
                    employees.items.map((item) => (
                        employeeCard(user, item, handleDestoryEmployee, handleClockEmployee, handleAdminChange)
                    ))
                }
            </div>

        </>
    )

}
export default About;