

class EmployeeData{
    employeePassword
    employeeName
    image
    constructor(options) {
        if(options){
            this.employeeName = options.employeeName || "empty"
            this.employeePassword = options.employeePassword ||  "empty"
            this.image = options.image ||  "empty"
        } else{
            this.employeeName =  ""
            this.employeePassword =  ""
            this.image = ""
        }

    }
}

export default class Employee{
    data
    target
    auth
    constructor(options) {
        if(options){
            this.data = options ||  new EmployeeData()
            this.target = options.target || -1
            this.auth = options.auth || {}
        } else{
            this.employeeName = new EmployeeData()
            this.target = -1
            this.auth = {}
        }
    }

    addToCompany = async () => {

        const secondData = `${this.data.image}`
        const queryParams = new URLSearchParams(
            {
                companyname: this.auth.company,
                employeename: this.data.employeeName,
                employeepass: this.data.employeepass,
            }
        )

        const url = `http://localhost:3000/companyemployees?${queryParams}`;

        await fetch(url, {
            method: 'POST', // Change the method if needed (e.g., POST),
            headers: {
                'Authorization': `${this.auth.token}`,
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
    toggleAdmin = async () => {

        let value
        const queryParams = new URLSearchParams({
            action: 1,
            companyname: this.auth.company,
            updateAction: "admin",
        });
        const url = `http://localhost:3000/employee/${this.target.id}?${queryParams}`;
        await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `${this.auth.token}`,
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                // Handle the API response data here
                value = json
            })
        return value
    }

    toggleClock = async () => {

        let value
        const queryParams = new URLSearchParams({
            action: 0,
            companyname: this.auth.company,
            updateAction: "clock",
        });
        const url = `http://localhost:3000/employee/${this.target.id}?${queryParams}`;
        await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `${this.auth.token}`,
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                value = json
            })

            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
        return value
    }

    removeFromCompany = async() => {

        let value
        const queryParams = new URLSearchParams({
            companyname: this.auth.company,
        });
        const url = `http://localhost:3000/companyemployees/${this.target.id}?${queryParams}`;
        await fetch(url, {
            method: 'DELETE', // Change the method if needed (e.g., POST)
            headers: {
                'Authorization': `${this.auth.token}`,
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                // Handle the API response data here
                value = json
            })

            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
        return value
    };
}