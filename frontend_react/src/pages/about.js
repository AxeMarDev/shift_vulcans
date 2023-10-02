import React from "react";
import  { useEffect } from 'react';
 
function employeeCard(user,employee,handleDestoryEmployee){
    return (
        <div className={"consoleDisplayOuter"}>
            <div className={"employeelistinner"}>
                <p className={"welcomeText"}> {employee.name}</p>
                <p className={"welcomeText"}> clocked in: {String(employee.clockin)}</p>
                <p className={"welcomeText"}> employee id: {String(employee.id)}</p>
                <p className={"welcomeText"}> password id: {String(employee.password)}</p>
                <button onClick={()=>handleDestoryEmployee(user, String(employee.id) )}> delete </button>
            </div>
        </div>
    )
}
function About({user,employees, handleEmployeeList}){

    // curl --header "Content-Type: application/json"  --request GET --data '{"adminname":"user1", "adminpassword":"2002068", "companyname":"axellelectric" }'  http://localhost:3000/companyemployees
    const handleEmployeelist = (user) => {

        const queryParams = new URLSearchParams({
            adminname: user.username,
            adminpassword: user.password,
            companyname: user.company,
        });
        const url = `http://localhost:3000/companyemployees?${queryParams}`;
        fetch(url, {
            method: 'GET', // Change the method if needed (e.g., POST)
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response)=> response.json() )
            .then((json) => {
                // Handle the API response data here
                console.log(json);

                handleEmployeeList( json)

                // here
                // You can also perform any other actions or state updates based on the response
            })

            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
    };
    const handleAddEmployee = (user, employees) => {

        const queryParams = new URLSearchParams({
            adminname: user.username,
            adminpassword: user.password,
            companyname: user.company,
            employeename: "axell",
            employeepass: "0000",

        });
        const url = `http://localhost:3000/companyemployees?${queryParams}`;
        fetch(url, {
            method: 'POST', // Change the method if needed (e.g., POST)
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response)=> response.json() )
            .then(() => {
                // Handle the API response data here
                handleEmployeelist(user)


                // here
                // You can also perform any other actions or state updates based on the response
            })

            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
    };
    const handleDestoryEmployee = (user, id) => {
        console.log("companyname in")
        console.log(id)
        const queryParams = new URLSearchParams({
            adminname: user.username,
            adminpassword: user.password,
            companyname: user.company,
        });
        const url = `http://localhost:3000/companyemployees/${id}?${queryParams}`;
        fetch(url, {
            method: 'DELETE', // Change the method if needed (e.g., POST)
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response)=> response.json() )
            .then(() => {
                // Handle the API response data here
                handleEmployeelist(user)
            })

            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
    };

    // Use the useEffect hook to run the function when the component mounts
    useEffect(() => {
        handleEmployeelist(user);
        // The empty dependency array [] ensures that this effect runs only once when the component mounts
    }, []); // <- Empty dependency ar

    return(
        <>
            <div className={"consoleDisplayOuter"}>
                <div className={"consoleDisplayInner2"}>
                    <p className={"welcomeText"}> welcome to dashboard</p>
                    <button onClick={()=>handleAddEmployee(user, employees)}> Add employee </button>
                </div>
            </div>
            {
                employees.items.map((item) => (
                    employeeCard(user,item, handleDestoryEmployee)
                ))
            }
        </>
    )

}
export default About;