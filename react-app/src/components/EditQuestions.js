import React, { Component } from 'react';
import './ShowQuiz.css';

class DeleteQuiz extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      submitted: false,
      deletekey:{
        id:0
        },
      part2 : true,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }



   // Lifecycle hook, runs after component has mounted onto the DOM structure
   componentDidMount() {
    const request = new Request('http://127.0.0.1:8080/allquestions/');
    fetch(request)
      .then(response => response.json())
        .then(data => this.setState({data: data}));
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

  handleSubmit(event){
    event.preventDefault();
    this.state.deletekey.id = this.getRadioVal(document.getElementById('Del'),'form-control');
    fetch('http://localhost:8080/question/'+this.state.deletekey.id,{
        method:'DELETE',
    }).then(response => {
      if(response.status >= 200 && response.status < 300)
            this.setState({submitted: true});
  });
  window.location.reload();
}



  render() {
    return (
        <div>
        {(this.state.part2) && 
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Edit Quiz</h1>
        </header>
        <form onSubmit={this.handleSubmit} id="Del">
        <center>
        <table>
          <thead>
            <tr>
            <th>Select to Delete</th>
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
              <td><input type = "radio" name = "form-control"  value={item.questionid}/></td>
              <td><h4>{item.questionid}</h4></td>
                <td><h4>{item.question}</h4></td>
                <td><h5> {item.option1}</h5> </td>
                <td><h5> {item.option2}</h5></td>
                <td><h5>{item.option3}</h5></td>
                <td><h5>{item.option4}</h5></td>
                <td><h5>{item.correctoption}</h5></td>
                </tr>
            )
            })}
          
          </tbody>
          </table><br/><br/>
          < button className="btn btn-default">Submit</button>
          </center>
          </form>
          {this.state.submitted &&
          <div>
            <h4>
              Deleting question with key {this.state.deletekey.id} refesh to see the change.
            </h4>
          </div>
        }
      </div>
      }
      </div>
    )}
}

export default DeleteQuiz;
