import React from 'react';
 
const Admin = () => {
    return (
        <h1>Transfer admin code to here</h1>
    );
};
 
export default Admin;
// class App extends React.Component {

//     // Constructor
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         name: "",
//         bio: "",
//         items: [],
//         DataisLoaded: false,
  
//       };
//       this.handleChange = this.handleChange.bind(this);
  
//     }
//     handleChange(event) {
//       this.setState({name: event.target.value});
//     }
  
  
  
//     // ComponentDidMount is used to
//     // execute the code
//     componentDidMount() {
//       this.getEmployees()
//     }
  
//     getEmployees() {
//       fetch("http://localhost:3000/employees", {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json'},// Add any other headers if needed },
//       })
//           .then((response) => response.json())
//           .then((json) => {
//             // Handle the data, e.g., update the component's state
//             this.setState({
//               items: json,
//               DataisLoaded: true
//             });
//           })
//           .catch((error) => {
//             // Handle any errors here
//             console.error(error);
//           });
//     }
//   //curl --header "Content-Type: application/json" --request POST --data '{"name":"user1", "bio":"worker", "clockin":"false", "password":"2002068"}' http://localhost:3000/employees
//     createEmployee(){
  
//       fetch("http://localhost:3000/employees", {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json'},// Add any other headers if needed },
//         body: JSON.stringify({
//           name: this.state.name,
//           bio: "worker",
//           clockin: false,
//           password: "2002068",
//           company_id: 0
//         }),
//       })
//           .then((response) => response.json())
//           .then(() => { this.getEmployees(); })
//           .catch((error) => {
//             // Handle any errors here
//             console.error(error);
//           });
//     }
  
//     render() {
//       const { DataisLoaded, items } = this.state;
//       if (!DataisLoaded) return <div>
//         <h1> Pleses wait some time.... </h1> </div> ;
  
//       return (
//           <div className = "App">
  
//             <h1> Admin panel </h1>  {
//             items.map((item) => (
//                 this.cardEmployee(item)
//             ))
//           }
//             <input name="name" value={this.state.name}  onChange={this.handleChange}/>
//             <input name="bio" value={this.state.bio}/>
  
//             <button onClick={() => this.createEmployee()}>create employee</button>
//           </div>
//       );
//     }
  
//     cardEmployee( item ) {
//       return(
//           <div class="employeePanelItem">
//             <h2> Name: {item.name} </h2>
//             <p> ID  = {item.id} </p>
//             <p> status  = {String(item.clockin)}  </p>
  
//           </div>
//       );
//     }
  
//   }
  
//   export default App;
  