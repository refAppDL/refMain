var Dash = require("./Dash.js");
var Survey = require("./Survey.js");

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native';

class Body extends Component {
  constructor(props){
    super(props);
    this.state={
      destination: this.props.destination,
      questions: ["nothing"],
      currentlyShowing: 0,
      numberOfActive: 0,
      results:[]
    };

  }
  componentDidMount(){
// <<<<<<< HEAD
    // AsyncStorage.getItem('questions').then(value=>{
    //   var qs = JSON.parse(value);
    //   this.setState({activeQuestions: qs, numberOfActive: qs.length});
    // });
// =======
    this.getStateFromAsync();
// >>>>>>> brad
  }
  getResultFromUser(result){
    this.setState({results: this.state.results.concat(result)});
  }
  toSurvey(){
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
    AsyncStorage.getItem('questions').then(value=>{
      var dataArray = JSON.parse(value);
      this.setState({questions: dataArray, numberOfActive: dataArray.length})
    })
    AsyncStorage.getItem('appData').then(value=>{
      var dataObj = JSON.parse(value);
      this.setState({currentlyShowing: dataObj.currentlyShowing})


    }).done();
  }
  render(){
    var display;
    if(this.state.destination === 'survey'){
      if (!this.state.shownAll){
         display = <Survey
           getResultFromUser={this.getResultFromUser.bind(this)}
           nextSurvey={this.showNextSurveyQuestion.bind(this)}
           currentQuestion={this.state.questions[this.state.currentlyShowing].text}
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
