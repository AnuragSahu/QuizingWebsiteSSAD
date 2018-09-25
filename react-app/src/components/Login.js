import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { BrowserRouter as Router, Switch,Redirect, Route, Link } from 'react-router-dom';


class Login extends Component {
constructor(){
  super();
  this.state={
      data : {
        name:'',
        password:'',
      },    
      logIn : false,
  }
  this.loggedIn = 0;
  this.handleClick = this.handleClick.bind(this);
 }

 handleClick(event)
 {
    // event.preventDefault();
    var URLtoQuery = "http://localhost:8080/userpresent/";
    fetch(URLtoQuery, {
     method: 'POST',
     body: JSON.stringify(this.state),
    })
    .then(function (response) {
        console.log(response);
        if(response.status == 200){
            console.log("Login successfull");
            //this.loggedIn=1;
            this.setState({logIn:true})
            //var uploadScreen=[];
           // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
           // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
        }
        else{
            console.log("name does not exists");
            alert("name does not exist");
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
             title="Login"
           />
           <TextField
             hintText="Enter your name"
             floatingLabelText="name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
         {(this.state.logIn) &&
            <div>
                <Redirect to = "/Register"/>
            </div>
          }   
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;