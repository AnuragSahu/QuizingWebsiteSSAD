import React, { Component } from 'react';
import './QuizGenreSelect.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'



class QuizGenreSelect extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      show: false,
      selectKey:null,
      redirect: false,

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  componentDidMount() {
    const request = new Request('http://127.0.0.1:8080/genres/');
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
  this.setState({show: true })
  this.state.selectKey = this.getRadioVal(document.getElementById('Del'),'genre-select');
  /*fetch('http://localhost:8080/people/'+this.state.deletekey.id,{
    method:'DELETE',
  }).then(response => {
      if(response.status >= 200 && response.status < 300)
      this.setState({submitted: true});
  });
  window.location.reload();
  */
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select the Genre</h1>
        </header>
        <br></br><br></br>
        <form onSubmit={this.handleSubmit} id="Del">
          <table className="table-hover">
            <thead>
              <th> Select the checkBox</th>
              <th> Genre</th>
            </thead>
            {this.state.data.map(function(item,key){
              return(
                <tr key ={key}>
                  <td>
                    <input type="radio" name="genre-select" value = {item.name_of_genre}/>
                  </td>
                  <td>
                    {item.name_of_genre}
                  </td>
                </tr>
              ) 
            })}
          </table>
          <p></p>
          <button type="submit" className="btn btn-default" onClick={this.setRedirect}>Show</button>
        </form>
        {this.state.show &&
        <div>
          <h4>Select: {this.state.selectKey }</h4>
        </div> }
      </div>
    );
  }
}

export default QuizGenreSelect;
