var Dash = require("./Dash.js");
var Survey = require("./Survey.js");

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class Body extends Component {
  constructor(props){
    super(props);
    this.state={
      goToSurvey: false,
      destination: "survey",
      numberOfActive: 3,
      numberOfRetired: 4,
      activeQuestions: ["did you eat today?", "did you drink today?", "did you breathe today?"],
      results: [],
      shownAll: false,
      currentlyShowing: 0
    };

  }
  getResultFromUser(result){
    this.setState({results: this.state.results.concat(result)});

  }
  toSurvey(e){
    e.preventDefault();
    this.setState({goToSurvey: true, destination: 'survey'});
  }
  goToLounge(){
    this.setState({goToSurvey: false, destination: 'lounge'})
  }
  showNextSurveyQuestion(){
    if (this.state.currentlyShowing < this.state.numberOfActive - 1){
      this.setState({currentlyShowing: this.state.currentlyShowing + 1});
    } else {
      this.setState({shownAll: true})
    }
  }
  doNothing(){
    console.log("nada");
  }
  getStateFromAsync(){
    AsyncStorage.getItem('appData').then(value=>{
      var dataObj = JSON.parse(value);
      if(dataObj.tripped && dataObj.numberOfActive > 0 && dataObj.hasAnsweredToday){
        this.setState({tripped: true, destination: 'lounge'});
      }else if(dataObj.tripped && dataObj.numberOfActive > 0){
        this.setState({tripped:true, destination: 'survey'});
      }else if(dataObj.tripped){
        this.setState({tripped: true, destination: 'addQuestion'});
      }else{
        this.setState({tripped: false, destination: 'opener'});
      }

    }).done();
  }
  render(){
    var display;
    if(this.state.destination === 'survey'){
      if (!this.state.shownAll){
         display = <Survey
           getResultFromUser={this.getResultFromUser.bind(this)}
           nextSurvey={this.showNextSurveyQuestion.bind(this)}
           currentQuestion={this.state.activeQuestions[this.state.currentlyShowing]}
           questionIndex={this.state.currentlyShowing}
           questionTotal={this.state.numberOfActive}/>
       } else {
         display = <Survey
           getResultFromUser={this.doNothing.bind(this)}
           nextSurvey={this.goToLounge.bind(this)}
           currentQuestion={"NO MORE QUESTIONS. ANSWERS: " + this.state.results.toString()}
           />
       }
    } else {
      display = <Dash
                  goToQuestions={this.toSurvey.bind(this)}
                  destination={this.props.destination}/>
              }
    return(
      <View style={styles.wrapper}>
        {display}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'lightblue'
  },
  text: {
    fontSize: 40,
    color: "#00f0ff"
  }

})


Body.external = true;
module.exports = Body;
