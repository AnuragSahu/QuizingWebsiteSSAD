import React, { Component } from 'react';
import './QuizGenreSelect.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class AdminPanel extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select a Quiz</h1>
        </header>
        <table>
        <tr><Link to={'/NewPerson'}>  <h3>Add Person</h3></Link></tr>
        <tr><Link to={'/ShowQuizAll'}><h3>ViewQuizes</h3></Link></tr>
        <tr><Link to={'/ViewPeople'}><h3>View All People</h3></Link></tr>
        <tr><Link to={'/MyComponent'}><h3>MyComponent</h3></Link></tr>
        <tr><Link to={'/NewQuestion'}><h3>Add Question</h3></Link></tr>
        <tr><Link to={'/DeleteQuiz'}><h3>Delete Questions</h3></Link></tr>
        <tr><Link to={'/EditQuestions'}><h3>EditQuestions</h3></Link></tr>
        </table>
      </div>
    );
  }
}

export default AdminPanel;
