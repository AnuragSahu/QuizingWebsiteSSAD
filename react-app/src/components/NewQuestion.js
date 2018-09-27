import React, { Component } from 'react';
import './NewPerson.css';

class NewQuestion extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        genre: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correctoption: "",
      },
      submitted: false,
    }
    this.handleGChange = this.handleGChange.bind(this);
    this.handleQChange = this.handleQChange.bind(this);
    this.handleOP1Change = this.handleOP1Change.bind(this);
    this.handleOP2Change = this.handleOP2Change.bind(this);
    this.handleOP3Change = this.handleOP3Change.bind(this);
    this.handleOP4Change = this.handleOP4Change.bind(this);
    this.handleCAChange = this.handleCAChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    fetch('http://localhost:8080/putquestion/', {
     method: 'POST',
     body: JSON.stringify(this.state.formData),
   })
      .then(response => {
        if(response.status >= 200 && response.status < 300)
          this.setState({submitted: true});
      });
      this.state.formData.question ='';
      this.state.formData.option1 = '';
      this.state.formData.option2 = '';
      this.state.formData.option3 = '';
      this.state.formData.option4 = '';
      this.state.formData.correctoption = '';
  }

  handleGChange(event) {
    this.state.formData.genre = event.target.value;
  }

  handleQChange(event) {
    this.state.formData.question = event.target.value;
  }

  handleOP1Change(event) {
    this.state.formData.option1 = event.target.value;
  }


  handleOP2Change(event) {
    this.state.formData.option2 = event.target.value;
  }


  handleOP3Change(event) {
    this.state.formData.option3 = event.target.value;
  }

  handleOP4Change(event) {
    this.state.formData.option4 = event.target.value;
  }

  handleCAChange(event) {
    this.state.formData.correctoption = event.target.value;
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Enter the Details</h1>
        </header>
        <br/><br/>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
          <table className="table-hover">
           
            <tr>
                <td> Genre: </td>
                <td> <input type="text" className="form-control" value={this.state.genre} onChange={this.handleGChange}/> </td>
            </tr>
            <tr>
                <td> Question: </td>
                <td> <input type="text" className="form-control" value={this.state.question} onChange={this.handleQChange}/> </td>
            </tr>
            <tr>
                <td> Option 1: </td>
                <td> <input type="text" className="form-control" value={this.state.option1} onChange={this.handleOP1Change}/> </td>
            </tr>
            
            <tr>
                <td>Option 2: </td>
                <td> <input type="text" className="form-control" value={this.state.option2} onChange={this.handleOP2Change}/> </td>
            </tr>

            <tr>
                <td>Option 3: </td>
                <td> <input type="text" className="form-control" value={this.state.option3} onChange={this.handleOP3Change}/> </td>
            </tr>
            <tr>
                <td>Option 4: </td>
                <td> <input type="text" className="form-control" value={this.state.option4} onChange={this.handleOP4Change}/> </td>
            </tr>
            <tr>
                <td>Correct Option </td>
                <td> <input type="text" className="form-control" value={this.state.correctoption} onChange={this.handleCAChange}/> </td>
            </tr>
           
            </table>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>

        {this.state.submitted &&
          <div>
              <table className="table-hover">
                  <tr><td>{this.state.formData.genre }</td> </tr>
                  <tr><td>{this.state.formData.question }</td> </tr>
                  <tr><td>{this.state.formData.option1 }</td> </tr>
                  <tr><td>{this.state.formData.option2 }</td> </tr>
                  <tr><td>{this.state.formData.option3 }</td> </tr>
                  <tr><td>{this.state.formData.option4 }</td> </tr>
                  <tr><td>{this.state.formData.correctoption }</td></tr>
              </table>

            <h2>
              New person successfully added.
            </h2>
             This has been printed using conditional rendering.
          </div>
        }

      </div>
    );
  }
}

export default NewQuestion;
