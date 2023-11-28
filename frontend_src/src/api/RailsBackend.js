import ActiveUser from "./ActiveUser";


class UserInfo{
    name
    userName
    password
    companyName
    image
    position
    showPassword
   

    constructor(options) {
        if ( options ){
            this.name = options.name || ""
            this.userName = options.userName || ""
            this.password =options.password || ""
            this.companyName=options.companyName || ""
            this.image=options.image || ""
            this.showPassword =  options.showPassword || false
            this.position = options.position || ""
        } else{
            this.name = ""
            this.userName = ""
            this.password =""
            this.companyName=""
            this.image=  ""
            this.showPassword =   false
            this.position= ""
        }

    }

}


export default class RailsBackend {
    auth
    userInfo
    constructor(options) {
        if( options ){
            if( options.totalInfo ){
                this.userInfo = options.totalInfo
                this.auth = options.auth || new ActiveUser()
            } else {
                this.auth =  options.auth || new ActiveUser()
                this.userInfo = new UserInfo(options)
            }
        } else {
            this.auth = new ActiveUser()
            this.userInfo = new UserInfo(options)
        }
    }

    getAuth = async() => {
        // Construct the request data
        let value
        const queryParams = new URLSearchParams({
            username: this.userInfo.userName,
            password: this.userInfo.password,
            companyName: this.userInfo.companyName,
            position: this.userInfo.position,
            // Add more parameters as needed
        });
        const url = `https://audiodivisions.com/authenticate?${queryParams}`;
        // Make the API request
        await fetch(url, {
            method: 'POST', // Change the method if needed (e.g., POST)
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response)=> response.json() )
            .then((data) => {

                value = data

            })

            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
        return value
    };


    addCompanyWithUser = async () =>{

        let value
        const queryParams = new URLSearchParams({
            name: this.userInfo.name,
            username: this.userInfo.userName,
            password: this.userInfo.password,
            companyName: this.userInfo.companyName,
            position: this.userInfo.position,
        });
        const url = `https://audiodivisions.com/company?${queryParams}`;
        // Make the API request
        await fetch(url, {
            method: 'POST', // Change the method if needed (e.g., POST)
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {userImage: this.userInfo.image}
            )
        })
            .then((response)=> response.json() )
            .then((data) => {
                value = data
            })

            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });

            return value
    }

    getEmployees = async() => {

        let value
        const queryParams = new URLSearchParams({
            companyname: this.auth.company,
        });

        const url = `https://audiodivisions.com/companyemployees?${queryParams}`;
        await fetch(url, {
            method: 'GET', // Change the method if needed (e.g., POST)
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.auth.token}`
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
    };

}