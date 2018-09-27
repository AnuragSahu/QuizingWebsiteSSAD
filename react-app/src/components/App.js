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
import ShowQuizPolitics11 from './ShowQuizPolitics11';
import ShowQuizPolitics2 from './ShowQuizPolitics2';
import ShowQuizStatics1 from './ShowQuizStatics1';
import Login from './Login';
import Register from './Register';
import NewQuestion from './NewQuestion';
import DeleteQuiz from './DeleteQuiz';
import EditQuestions from './EditQuestions';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <center>
        <Router>
          <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to={'/'}>Anurag Sahu</Link>
                </div>
                <ul className="nav navbar-nav">
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/AdminPanel'}>AdminPanel</Link></li>
                  <li><Link to={'/QuizGenreSelect'}>NormalUser</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
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
                 <Route exact path='/ShowQuizPolitics11' component={ShowQuizPolitics11}/>
                 <Route exact path='/ShowQuizPolitics2' component={ShowQuizPolitics2}/>
                 <Route exact path='/ShowQuizStatics1' component={ShowQuizStatics1}/>
                 <Route exact path='/MyComponent' component={MyComponent}/>
                 <Route exact path='/Login' component={Login}/>
                 <Route exact path='/Register' component={Register}/>
                 <Route exact path='/NewQuestion' component={NewQuestion}/>
                 <Route exact path='/DeleteQuiz' component={DeleteQuiz}/>
                 <Route exact path='/EditQuestions' component={EditQuestions}/>
            </Switch>
          </div>
        </Router>
        </center>
      </div>
    );
  }
}

export default App;
