import React, { Component } from 'react';
import './ShowQuiz.css';

class showQuiz extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      score: 0,
    }
    this.checkAnswer = this.checkAnswer.bind(this);
  }

   // Lifecycle hook, runs after component has mounted onto the DOM structure
   componentDidMount() {
    const request = new Request('http://127.0.0.1:8080/allquestions/');
    fetch(request)
      .then(response => response.json())
        .then(data => this.setState({data: data}));
  }

  checkAnswer()
  {
    this.state.score = 1;
  }

  render() {
    return (
      <right>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Quiz Sample</h1>
        </header>
          <tbody>{this.state.data.map(function(item, key) {
               return (
                 <center>
                  <tr key = {key}>
                  <div>
                      <h4>{item.question}</h4>
                      <td><h5><input type="radio" name={item.questionid} value = {1} /> {item.option1}</h5> </td>
                      <td><h5><input type="radio" name={item.questionid} value = {2} /> {item.option2}</h5></td>
                      <td><h5><input type="radio" name={item.questionid} value = {3}/> {item.option3}</h5></td>
                      <td><h5><input type="radio" name={item.questionid} value = {4}/> {item.option4}</h5></td>
                      <td><h5><input type="radio" name={item.questionid} value = {4}/> {item.correctoption}</h5></td>
                      </div>
                  </tr>
                  </center>
                )
               })}
             
          </tbody>
      </div>
      {this.state.score ==1 && <h1> Yes </h1>}
      </right>
    );
  }
}

export default showQuiz;
