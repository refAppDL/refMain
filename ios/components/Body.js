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
      questions: [{text:''}],
      currentlyShowing: 0,
      numberOfActive: 0,
      results:[]
    };

  }
  componentDidMount(){
    this.getStateFromAsync();
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
  endSurvey(){
    AsyncStorage.getItem("appData").then(value => {
      var dataObj = JSON.parse(value);
      dataObj.hasAnsweredToday = true;
      AsyncStorage.setItem('appData', JSON.stringify(dataObj));
    }).done();
    var toAdd = this.state.results;
    AsyncStorage.getItem('answers').then(value=>{
      var resultsArr = JSON.parse(value);
      for (var i = 0; i < toAdd.length; i++) {
        var currentQ = resultsArr[i];
        var d = new Date();
        currentQ.answers.push({
          date: d,
          value: toAdd[i]
        })
      }
      AsyncStorage.setItem('answers', JSON.stringify(resultsArr));
    });

  }
  getStateFromAsync(){
    // AsyncStorage.getItem('questions').then(value=>{
    //   var dataArray = JSON.parse(value);
    //   this.setState({questions: dataArray, numberOfActive: dataArray.length})
    // }).done();
    // AsyncStorage.getItem('appData').then(value=>{
    //   var dataObj = JSON.parse(value);
    //   this.setState({currentlyShowing: dataObj.currentlyShowing})
    // }).done();
    AsyncStorage.multiGet(['questions', 'appData']).then(dataArr=>{
      var qs = JSON.parse(dataArr[0][1]);
      var dataObj = JSON.parse(dataArr[1][1]);
      this.setState({questions: qs, numberOfActive: qs.length});
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
           getResultFromUser={this.endSurvey.bind(this)}
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
