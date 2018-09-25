import React, { Component } from 'react';
import './ShowQuiz.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import QuizGenreSelect from './QuizGenreSelect';

class ShowQuizPolitics1 extends Component {
  constructor() {
    super();
    console.log("constructor called");
    this.state = {
      data: [],
      checked: null,
    }
    this.questionid = 1;  
    this.score = 0;
    this.fetchedFirst = 0;
    this.answered = "-1";
    this.handleChange = this.handleChange.bind(this);
    this.Retake = this.Retake.bind(this);
    this.ReturnToHome = this.ReturnToHome.bind(this);
  }

  Retake(event){
    window.location.reload();
  }

  ReturnToHome(event){
    <Route exact path='/QuizGenreSelect' component={QuizGenreSelect}/>
  }

  componentWillUpdate(){
  //this.questionid+=1;
  //console.log('compoenetWillUpdate');
  //console.log(this.state.data);
  const request = new Request('http://127.0.0.1:8080/question/'+this.questionid);
    fetch(request,{method:'GET',})
      .then( response=>response.json())
        .then(data => this.setState({data : data}));
      //  console.log(this.state.data);
  }

  // Lifecycle hook, runs after component has mounted onto the DOM structure
  componentDidMount() {
    console.log('component did mount');
    const request = new Request('http://127.0.0.1:8080/question/'+this.questionid);
    fetch(request,{method:'GET',})
      .then( response=>response.json())
        .then(data => this.setState({data : data}));
       // console.log(this.state.data);
  }

  getRadioVal(form,name){
    var val;
   var radios = form.elements[name];
   for (var i=0, len=radios.length; i<len; i++) {
       if ( radios[i].checked ) { 
           val = radios[i].value; 
           break;
       }
   }
   return val;
  }

 handleChange(event){
  this.setState({
     checked: event.target.value
   });
   if(this.state.data.correctoption === event.target.value)
      this.score +=1;
   this.questionid+=1;
  }

  render() {
    return (
      <center>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Politics Quiz 1 Sample</h1>
        </header>
          <tbody>
            <form  id="Chk">
            <center>
            <tr>
            {(this.state.data.genre=='Politics1') &&
            <div>
              <h2>{this.state.data.question}</h2>
              <tr><h4><input 
                        type="radio" 
                        name={this.questionid} 
                        value = "1"
                        checked = {false}
                        onChange = {this.handleChange}
                      /> {this.state.data.option1}  </h4></tr>
              <tr><h4><input 
                        type="radio" 
                        name={this.questionid} 
                        value = "2"
                        checked = {false}
                        onChange = {this.handleChange}
                        /> {this.state.data.option2} </h4></tr>
              <tr><h4><input 
                        type="radio" 
                        name={this.questionid} 
                        value = "3"
                        checked = {false}
                        onChange = {this.handleChange}
                        /> {this.state.data.option3} </h4></tr>
              <tr><h4><input 
                        type="radio" 
                        name={this.questionid} 
                        value = "4"
                        checked = {false}
                        onChange = {this.handleChange}
                        /> {this.state.data.option4} </h4></tr>
              </div>
            }
            {(this.state.data.genre!=='Politics1') && (this.updateScoreBoard) &&
            <div>
              <center>
              <br></br><h2> Finished the Quiz <br></br> Your Final Score is = {this.score}</h2>
              </center>
            </div>
            }
            </tr>
            </center>
            </form>
          </tbody>
      </div>
      </center>
    );
  }
}

export default ShowQuizPolitics1;
