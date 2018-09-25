import React, { Component } from 'react';
import './QuizGenreSelect.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class SelectQuizPolitics extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select a Quiz</h1>
        </header>

        <button><Link to={'/ShowQuizPolitics1'}>Quiz1</Link></button>
        <button><Link to={'/ShowQuizPolitics2'}>Quiz2</Link></button>
      </div>
    );
  }
}

export default SelectQuizPolitics;
