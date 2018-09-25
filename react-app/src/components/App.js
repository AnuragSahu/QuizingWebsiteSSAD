import React, { Component } from 'react';
import DeletePerson from './DeletePerson';
import ViewPeople from './ViewPeople';
import EditPerson from './EditPerson';
import NewPerson from './NewPerson';
import Home from './Home';
import AdminPanel from './AdminPanel';
import ShowQuizAll from './ShowQuizAll';
import QuizGenreSelect from './QuizGenreSelect';
import MyComponent from './MyComponent';
import SelectQuizPolitics from './SelectQuizPolitics';
import ShowQuizPolitics1 from './ShowQuizPolitics1';
import ShowQuizPolitics2 from './ShowQuizPolitics2';
import ShowQuizStatics1 from './ShowQuizStatics1';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to={'/'}>React App</Link>
                </div>
                <ul className="nav navbar-nav">
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/AdminPanel'}>AdminPanel</Link></li>
                  <li><Link to={'/NewPerson'}>SignUp</Link></li>
                  <li><Link to={'/QuizGenreSelect'}>NormalUser</Link></li>
                  <li><Link to={'/'}>Login</Link></li>
                </ul>
              </div>
            </nav>
            <Switch>
                 <Route exact path='/' component={Home} />
                 <Route exact path='/AdminPanel' component={AdminPanel} />
                 <Route exact path='/ShowQuizAll' component={ShowQuizAll} />
                 <Route exact path='/NewPerson' component={NewPerson} />
                 <Route exact path='/EditPerson' component={EditPerson} />
                 <Route exact path='/DeletePerson' component={DeletePerson} />
                 <Route exact path='/ViewPeople' component={ViewPeople} />
                 <Route exact path='/QuizGenreSelect' component={QuizGenreSelect}/>
                 <Route exact path='/SelectQuizPolitics' component={SelectQuizPolitics}/>
                 <Route exact path='/ShowQuiz/:quizNo' component={ShowQuizPolitics1}/>
                 <Route exact path='/ShowQuizPolitics1' component={ShowQuizPolitics1}/>
                 <Route exact path='/ShowQuizPolitics2' component={ShowQuizPolitics2}/>
                 <Route exact path='/ShowQuizStatics1' component={ShowQuizStatics1}/>
                 <Route exact path='/MyComponent' component={MyComponent}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
