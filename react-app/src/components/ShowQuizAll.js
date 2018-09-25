import React, { Component } from 'react';
import './ShowQuiz.css';

class ShowQuizAll extends Component {
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
        <table>
          <thead>
            <tr>
            <th>Quiz no: Genre</th>
            <th>Question Id</th>
            <th>Question</th>
            <th>Option 1 </th>
            <th>Option 2</th>
            <th>Option 3</th>
            <th>Option 4</th>
            <th>Correct Option </th>
            </tr>
          </thead>
          <tbody>{this.state.data.map(function(item, key) {
            return (      
              <tr key = {key}>
              
                {(item.genre=='Politics1') && <td><h4>Quiz 1 : Politics</h4></td>}
                {(item.genre=='Politics2') && <td><h4>Quiz 2 : Politics</h4></td>}
                {(item.genre=='Statistics1') && <td><h4>Quiz 1 : Statistics</h4></td>}
                {(item.genre=='Statistics2') && <td><h4>Quiz 2 : Statistics</h4></td>}
                <td><h4>{item.questionid}</h4></td>
                <td><h4>{item.question}</h4></td>
                <td><h5><input type="radio" name={item.questionid} value = {1} /> {item.option1}</h5> </td>
                <td><h5><input type="radio" name={item.questionid} value = {2} /> {item.option2}</h5></td>
                <td><h5><input type="radio" name={item.questionid} value = {3}/> {item.option3}</h5></td>
                <td><h5><input type="radio" name={item.questionid} value = {4}/> {item.option4}</h5></td>
                <td><h5><input type="radio" name={item.questionid} value = {4}/> {item.correctoption}</h5></td>
              </tr>
            )
            })}
          
          </tbody>
          </table>
      </div>
      {this.state.score ==1 && <h1> Yes </h1>}
      </right>
    );
  }
}

export default ShowQuizAll;
