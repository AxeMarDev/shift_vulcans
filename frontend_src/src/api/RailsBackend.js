

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

    userInfo
    userInfoSave
    constructor(options) {
        if( options.totalInfo ){
            this.userInfo = options.totalInfo
            this.userInfoSave = options.saved
        } else {
            this.userInfo = new UserInfo(options)
            if (options.saved ){
                this.userInfoSave = options.saved
            }else{
                this.userInfoSave = new UserInfo()
            }

        }

    }

    getAuth = async() => {
        // Construct the request data
        let value
        const queryParams = new URLSearchParams({
            username: this.userInfo.userName,
            password: this.userInfo.password,
            companyName: this.userInfo.companyName,
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
            name: this.userInfo.name,
            username: this.userInfo.userName,
            password: this.userInfo.password,
            companyName: this.userInfo.companyName,
        });
        const url = `http://localhost:3000/company?${queryParams}`;
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

}