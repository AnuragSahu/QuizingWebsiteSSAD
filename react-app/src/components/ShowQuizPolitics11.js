import React, { Component } from 'react';
import './ShowQuiz.css';

class ShowQuizPolitics11 extends Component {
  constructor() {
    super();
    console.log("constructor called");
    this.state = {
      data: [],
      to_ckh :'',
    }
    this.score=0;
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
  }

  componentDidMount() {
    const request = new Request('http://127.0.0.1:8080/allquestions/');
    fetch(request)
      .then(response => response.json())
        .then(data => this.setState({data: data}));
  }

  handleChangeRadio(key,event){
      this.setState({
          to_ckh : event.target.value
      });

      if(key.correctoption === event.target.value)
        this.score +=1;
    this.id+=1;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Questions Politics1 </h1>
        </header>

        <table className="table-hover" >
          <thead>
            <tr>
              <th>Question</th>
              <th>Option 1</th>
              <th>Option 2</th>
              <th>Option 3</th>
              <th>Option 4</th>
            </tr>
          </thead>
          <tbody>{this.state.data.map((item, key)=> {
               return (
                  <tr key = {key}>
                      <td>{item.question}</td>
                      <td> <input type ="radio" name = {item.questionid} value = {1} onChange = {(event) => this.handleChangeRadio(item,event)} /> {item.option1}</td>
                      <td> <input type ="radio" name = {item.questionid} value = {2} onChange = {(event) => this.handleChangeRadio(item,event)} /> {item.option2}</td>
                      <td> <input type ="radio" name = {item.questionid} value = {3} onChange = {(event) => this.handleChangeRadio(item,event)} /> {item.option3}</td>
                      <td> <input type ="radio" name = {item.questionid} value = {4} onChange = {(event) => this.handleChangeRadio(item,event)} /> {item.option4}</td>
                  </tr>
                )
             })}
          </tbody>
       </table>
       <h2>Score = {this.score}</h2>
      </div>
    );
  }
}

export default ShowQuizPolitics11;
