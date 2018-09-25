import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      password:''
    }
    this.redir =0;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event)
  {
    //To be done:check for empty values before hitting submit
    fetch("http://localhost:8080/putpeople/", {
        method: 'POST',
        body: JSON.stringify(this.state),
       })
       .then(function (response) {
           console.log(response);
           if(response.status === 200){
               console.log("Registration successfull");
           }
           else{
               console.log("name does not exists");
               alert("Unable to register");
           }
       })
       .catch(function (error) {
       console.log(error);
       });
  }


  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;