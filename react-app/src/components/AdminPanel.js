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
        <tr><Link to={'/NewPerson'}>Add Person</Link></tr>
        <tr><Link to={'/ShowQuizAll'}>ViewQuizes</Link></tr>
        <tr><Link to={'/ViewPeople'}>View All People</Link></tr>
        <tr><Link to={'/MyComponent'}>MyComponent</Link></tr>
        <tr><Link to={'/ShowQuizPolitics1'}>Add Person</Link></tr>
        <tr><Link to={'/ShowQuizPolitics1'}>Add Person</Link></tr>
        <tr><Link to={'/ShowQuizPolitics1'}>Add Person</Link></tr>
        <tr></tr><button><Link to={'/ShowQuizPolitics2'}>Quiz2</Link></button>
        </table>
      </div>
    );
  }
}

export default AdminPanel;
