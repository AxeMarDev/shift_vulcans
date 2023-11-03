export default class ActiveUser {

    isLoggedIn
    token
    username
    company
    id

    constructor(options) {
        if( options){
            this.username=  options.username || "no user active"
            this.token= options.token || "no token"
            this.company= options.company || "nocompany"
            this.isLoggedIn= options.isLoggedIn || false
            this.id = options.id || 0
        } else {
            this.username= "no user active"
            this.token="no token"
            this.company= "nocompany"
            this.isLoggedIn= false
            this.id =  0
        }
    }

}

