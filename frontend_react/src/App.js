
import React from "react";
import './App.css';

class App extends React.Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      bio: "",
      username: "",
      items: [],
      DataisLoaded: false,

    };
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    this.setState({name: event.target.value});
  }
  handleChange(event) {
    this.setState({name: event.target.value});
}



  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    this.getEmployees()
  }

  getEmployees() {
    fetch("http://localhost:3000/companyemployees", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            adminname: "user1",
            adminpassword: "2002068",
            companyname: "axellelectric",
        })
    })
        .then((response) => response.json())
        .then((json) => {
          // Handle the data, e.g., update the component's state
          this.setState({
            items: json,
            DataisLoaded: true
          });
        })
        .catch((error) => {
          // Handle any errors here
          console.error(error);
        });
  }
//curl --header "Content-Type: application/json" --request POST --data '{"name":"user1", "bio":"worker", "clockin":"false", "password":"2002068"}' http://localhost:3000/employees
  createEmployee(){

    fetch("http://localhost:3000/employees", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},// Add any other headers if needed },
      body: JSON.stringify({
        name: this.state.name,
        bio: "worker",
        clockin: false,
        password: "2002068",
        company_id: 0
      }),
    })
        .then((response) => response.json())
        .then(() => { this.getEmployees(); })
        .catch((error) => {
          // Handle any errors here
          console.error(error);
        });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div class="loginform">
        <h1> Welcome to Shift </h1>
        <input class="loginfield" name="Company name" value={this.state.name}  onChange={this.handleChange}/>
        <input  class="loginfield" name="username" value={this.state.username}  onChange={this.handleChange}/>
        <input  class="loginfield" name="password" value={this.state.name}  onChange={this.handleChange}/>
        <button  class="loginfield" onClick={() => this.getEmployees()}>  log in</button>
    </div> ;

    return (
        <div className = "App">

          <h1> Admin panel </h1>  {
          items.map((item) => (
              this.cardEmployee(item)
          ))
        }
          <input name="name" value={this.state.name}  onChange={this.handleChange}/>
          <input name="bio" value={this.state.bio}/>

          <button onClick={() => this.createEmployee()}>create employee</button>
        </div>
    );
  }

  cardEmployee( item ) {
    return(
        <div class="employeePanelItem">
          <h2> Name: {item.name} </h2>
          <p> ID  = {item.id} </p>
          <p> status  = {String(item.clockin)}  </p>

        </div>
    );
  }

}

export default App;
