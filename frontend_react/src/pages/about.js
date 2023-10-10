import React from "react";
import  { useEffect } from 'react';
import { useState } from 'react';
 
function employeeCard(user,employee,handleDestoryEmployee, handleClockEmployee){
    // this function will return a html layout for card elements in the employees view
    return (
        <div className={"consoleDisplayOuter"}>
            <div className={"employeelistinner"}>
                <div>
                    <img className={"image1"} src={`data:image/jpeg;base64,${employee.userImage}`} />
                </div>
                <div className={"employeeinfoStack"}>
                    <p className={"welcomeText"}> {employee.name}</p>
                    <p className={"welcomeText"}> clocked in: {String(employee.clockin)}</p>
                    <p className={"welcomeText"}> employee id: {String(employee.id)}</p>
                    <p className={"welcomeText"}> password id: {String(employee.password)}</p>
                    {/* hanfleDestroyEmployee will handle an api call that will destroy an employee on the server*/}
                    <button onClick={()=>handleDestoryEmployee(user, String(employee.id) )}> delete </button>
                    <button onClick={()=>handleClockEmployee(user,String(employee.id) )}> clock </button>
                </div>


            </div>
        </div>
    )
}
function About({user,employees, handleEmployeeList}){

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
            .then((response)=> response.json() )
            .then((json) => {
                // Handle the API response data here


                handleEmployeeList( json)

                // here
                // You can also perform any other actions or state updates based on the response
            })

            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
    };

    const [image, setImage] = useState();

    const onFileChange = (e) => {
        const file = e.target.files[0]
        var value = ''

        if (file){
            const reader = new FileReader();
            reader.onload = (e) => {
                value = e.target.result.split(',')[1];
                setImage(value);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddEmployee = (user, employees,image) => {
        //.log("sent")
        //onsole.log(image)
        //const data = `${ image }`
        const secondData = `${image}`


        const queryParams = new URLSearchParams({
            companyname: user.company,
            employeename: "axell",
            employeepass: "0000",

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
            .then((response)=> response.json() )
            .then(() => {
                // Handle the API response data here
                handleEmployeelist(user)
                // You can also perform any other actions or state updates based on the response
            })

            .catch((error) => {
                // Handle any errors here
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

    const handleClockEmployee =(user,id)=>{

        const queryParams = new URLSearchParams({
            adminname: user.username,
            adminpassword: user.password,
            companyname: user.company,
        });
        const url = `http://localhost:3000/companyemployee/${id}?${queryParams}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response)=> response.json() )
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

    return(
        <>
            <div className={"consoleDisplayOuter"}>
                <div className={"consoleDisplayInner2"}>

                    <p className={"welcomeText"}> welcome to dashboard</p>
                    <input type="file"  onChange={onFileChange}/>
                    <button onClick={()=>handleAddEmployee(user, employees,image)}> Add employee </button>

                </div>
            </div>
            {
                employees.items.map((item) => (
                    employeeCard(user,item, handleDestoryEmployee, handleClockEmployee)
                ))
            }
        </>
    )

}
export default About;