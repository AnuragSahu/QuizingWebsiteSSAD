import React, { Component } from 'react';
import './QuizGenreSelect.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'



class QuizGenreSelect extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      attempt :{
        genre : '',
        score : '',
        personid : '',
      },
      submitted : false,
      to_ckh :'',
      idEntered : true,
      genreSelection : false,
      quizSelectionPolitics : false,
      quizSelectionStatistics : false,
      finalQuiz : false,
      showQuizPolitics1 : false,
      showQuizPolitics2 : false,
      showQuizStastics1 : false,
      showQuizStastics2 : false,
    }
    this.score=0;
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
    this.handleClickPolitics = this.handleClickPolitics.bind(this);
    this.handleClickStatistics = this.handleClickStatistics.bind(this);
    this.handleClickPoliticsQuiz1 = this.handleClickPoliticsQuiz1.bind(this);
    this.handleClickPoliticsQuiz2 = this.handleClickPoliticsQuiz2.bind(this);
    this.handleClickStatisticsQuiz1 = this.handleClickStatisticsQuiz1.bind(this);
    this.handleClickStatisticsQuiz2 = this.handleClickStatisticsQuiz2.bind(this);
    this.retake = this.retake.bind(this);
    this.updateUid = this.updateUid.bind(this);
    this.EnterID = this.EnterID.bind(this);
    this.genreID ='';
  }

  
  componentDidMount() {
    const request = new Request('http://127.0.0.1:8080/allquestions/');
    fetch(request)
      .then(response => response.json())
        .then(data => this.setState({data: data}));
  }

  handleClickPolitics(event){
    this.setState({quizSelectionPolitics:true});
    this.setState({genreSelection:false});
  }

  updateUid(event){
    this.setState({personid : this})
  }

  retake(event){
    this.score=0;
    event.preventDefault({ });
    this.setState({ score : this.score });
    //this.setState({ genre : genre});
    fetch('http://localhost:8080/putscore/', {
     method: 'POST',
     body: JSON.stringify(this.state.attempt),
   })
      .then(response => {
        if(response.status >= 200 && response.status < 300)
          this.setState({submitted: true});
          this.setState({
            genreSelection : true,
            quizSelectionPolitics : false,
            quizSelectionStatistics : false,
            finalQuiz : false,
            showQuizPolitics1 : false,
            showQuizPolitics2 : false,
            showQuizStastics1 : false,
            showQuizStastics2 : false,
          });
      });

    
  }
  handleChangeRadio(key,event){
    this.setState({
        to_ckh : event.target.value
    });

    if(key.correctoption === event.target.value)
      this.score +=1;
  this.id+=1;
  }

  handleClickStatistics(event){
    this.setState({quizSelectionStatistics:true});
    this.setState({genreSelection:false});
  }

  handleClickPoliticsQuiz1(event){
    this.setState({finalQuiz : true});
    this.setState({quizSelectionPolitics: false});
    this.setState({showQuizPolitics1 : true});
  }

  handleClickPoliticsQuiz2(event){
    this.setState({finalQuiz : true});
    this.setState({quizSelectionPolitics: false});
    this.setState({showQuizPolitics2 : true});
  }

  handleClickStatisticsQuiz1(event){
    this.setState({finalQuiz : true});
    this.setState({quizSelectionStatistics:false});
    this.setState({showQuizStastics1:true});
  }

  handleClickStatisticsQuiz2(event){
    this.setState({finalQuiz : true});
    this.setState({quizSelectionStatistics:false});
    this.setState({showQuizStastics2:true});
  }
  
  EnterID(event){
    this.setState({genreSelection : true});
    this.setState({idEntered : false});
  }
  
  render() {
    return (
      <div className="App">

        {(this.state.idEntered) &&
          <div>
          <header className="App-header">
            <h1 className="App-title">Enter the ID</h1>
          </header>
          
          <br/><br/>Enter the your Name Before hitting Submit : <input type="text" size ="5" onChange={this.updateUid}/><br/> 
        <button onClick= {this.EnterID} className="btn btn-default">Next </button>
        </div>
        }

        {(this.state.genreSelection) &&
          <div>
          <header className="App-header">
            <h1 className="App-title">Select the Genre</h1>
          </header>
          
          <br></br><br></br>
        <button onClick= {this.handleClickPolitics} className="btn btn-default" >Politics </button>
        <br/><br/>
        <button onClick= {this.handleClickStatistics} className="btn btn-default">Statistics </button>
        </div>
        }

        {(this.state.quizSelectionPolitics) &&
          <div>
          <header className="App-header">
            <h1 className="App-title">Select the Quiz</h1>
          </header>
          
          <br></br><br></br>
        <button onClick= {this.handleClickPoliticsQuiz1} className="btn btn-default" >Quiz 1 </button>
        <br/><br/>
        <button onClick= {this.handleClickPoliticsQuiz2} className="btn btn-default">Quiz 2 </button>
        </div>
        }

        {(this.state.quizSelectionStatistics) &&
          <div>
          <header className="App-header">
            <h1 className="App-title">Select the Quiz</h1>
          </header>
          
          <br></br><br></br>
        <button onClick= {this.handleClickStatisticsQuiz1} className="btn btn-default" >Quiz 1 </button>
        <br/><br/>
        <button onClick= {this.handleClickStatisticsQuiz2} className="btn btn-default">Quiz 2 </button>
        </div>
        }

        {(this.state.finalQuiz) &&
          <div className="App">
          <header className="App-header">
            <h1 className="App-title">Questions </h1>
          </header>
  
          
            <tbody>{this.state.data.map((item, key)=> {
                 return (
                  <tr key = {key}>
                      {(((this.state.showQuizPolitics1) && (item.genre==="Politics1") )||((this.state.showQuizPolitics2) && (item.genre==="Politics2")) ||
                      ((this.state.showQuizStastics1) && (item.genre==="Statistics1")) || ((this.state.showQuizStastics2) && (item.genre==="Statistics2"))) &&
                      <div>
                        <label><h3>{item.question}</h3></label>
                        <h4> <input type ="radio" name = {item.questionid} value = {1} onChange = {(event) => this.handleChangeRadio(item,event)} /> {item.option1}</h4>
                        <h4> <input type ="radio" name = {item.questionid} value = {2} onChange = {(event) => this.handleChangeRadio(item,event)} /> {item.option2}</h4>
                        <h4> <input type ="radio" name = {item.questionid} value = {3} onChange = {(event) => this.handleChangeRadio(item,event)} /> {item.option3}</h4>
                        <h4> <input type ="radio" name = {item.questionid} value = {4} onChange = {(event) => this.handleChangeRadio(item,event)} /> {item.option4}</h4>
                        </div>
                      }
                    </tr>
                  )
               })}
          </tbody>
         <button className="btn btn-default" onClick={this.retake}>Submit</button>
         <h2>Score = {this.score}</h2>
        </div>
        }

        

      </div>
    );
  }
}

export default QuizGenreSelect;
