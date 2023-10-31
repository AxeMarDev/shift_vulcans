

class EmployeeData{
    employeePassword
    employeeName
    image
    constructor(options) {
        if(options){
            this.employeeName = options.employeeName || ""
            this.employeePassword = options.employeePassword || ""
            this.image = options.image || ""
        } else{
            this.employeeName =  ""
            this.employeePassword =  ""
            this.image = ""
        }

    }
}




export default class Employee{
    data
    auth
    constructor(options) {
        if(options){
            this.data = options || {}
            this.auth = options.auth || {}
        } else{
            this.employeeName = new EmployeeData()
            this.auth = {}
        }
    }

    addToCompany = (user) => {

        const secondData = `${this.data.image}`

        const queryParams = new URLSearchParams(
            {
                companyname: this.auth.company,
                employeename: this.data.employeeName,
                employeepass: this.data.employeepass,
            }
        )

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
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.error(error);
            });
    };
    // toggleAdmin = (user, id) => {
    //
    //     const queryParams = new URLSearchParams({
    //         action: 1,
    //         companyname: user.company,
    //         updateAction: "admin",
    //     });
    //     const url = `http://localhost:3000/employee/${id}?${queryParams}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'Authorization': `${user.token}`,
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((json) => {
    //             // Handle the API response data here
    //             console.log(json)
    //             handleEmployeelist(user)
    //         })
    //
    //         .catch((error) => {
    //             // Handle any errors here
    //             console.error(error);
    //         });
    // }
    //
    // toggleClock = (user, id) => {
    //
    //     const queryParams = new URLSearchParams({
    //         action: 0,
    //         companyname: user.company,
    //         updateAction: "clock",
    //     });
    //     const url = `http://localhost:3000/employee/${id}?${queryParams}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'Authorization': `${user.token}`,
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((json) => {
    //             // Handle the API response data here
    //             console.log(json)
    //             handleEmployeelist(user)
    //         })
    //
    //         .catch((error) => {
    //             // Handle any errors here
    //             console.error(error);
    //         });
    // }
    //
    // removeFromCompany = (user, id) => {
    //
    //     const queryParams = new URLSearchParams({
    //         companyname: user.company,
    //     });
    //     const url = `http://localhost:3000/companyemployees/${id}?${queryParams}`;
    //     fetch(url, {
    //         method: 'DELETE', // Change the method if needed (e.g., POST)
    //         headers: {
    //             'Authorization': `${user.token}`,
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then(() => {
    //             // Handle the API response data here
    //             handleEmployeelist(user)
    //         })
    //
    //         .catch((error) => {
    //             // Handle any errors here
    //             console.error(error);
    //         });
    // };
}