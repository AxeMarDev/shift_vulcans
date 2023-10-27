

class UserInfo{
    name
    userName
    password
    companyName
    image
    showPassword

    constructor(options) {
        if ( options ){
            this.name = options.name || ""
            this.userName = options.userName || ""
            this.password =options.password || ""
            this.companyName=options.companyName || ""
            this.image=options.image || ""
            this.showPassword =  options.showPassword || false
        } else{
            this.name = ""
            this.userName = ""
            this.password =""
            this.companyName=""
            this.image=  ""
            this.showPassword =   false
        }

    }

}


export default class RailsBackend {

    userInfoLogin
    userInfoSignup
    controller

    constructor(options) {
        this.userInfoLogin = new UserInfo(options)
        this.userInfoSignup = new UserInfo(options)
    }

    getAuth = async() => {
        // Construct the request data
        let value
        const queryParams = new URLSearchParams({
            username: this.userInfoLogin.userName,
            password: this.userInfoLogin.password,
            companyName: this.userInfoLogin.companyName,
            // Add more parameters as needed
        });
        const url = `http://localhost:3000/authenticate?${queryParams}`;
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
            name: this.userInfoSignup.name,
            username: this.userInfoSignup.userName,
            password: this.userInfoSignup.password,
            companyName: this.userInfoSignup.companyName,
        });
        const url = `http://localhost:3000/company?${queryParams}`;
        // Make the API request
        await fetch(url, {
            method: 'POST', // Change the method if needed (e.g., POST)
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {userImage: this.userInfoSignup.image}
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

}