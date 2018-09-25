import React, { Component } from 'react';
import './QuizGenreSelect.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class QuizGenreSelect extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select the Genre</h1>
        </header>

        <button><Link to={'/SelectQuizPolitics'}>Politics</Link></button>
        <button><Link to={'/ShowQuizStatics1'}>Science</Link></button>
      </div>
    );
  }
}

export default QuizGenreSelect;
