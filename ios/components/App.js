import React, { Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native';

var Page = require("./Page.js")
var Opening = require("./Opening.js");
var TitlePage = require("./TitlePage.js");
var Survey = require("./Survey.js");
var Nav = require("./Nav.js");


class App extends Component {
  //when the component mounts, it will have to check async to see if it has been
  //tripped or not (ie, whether or not the user has been on the app before).
  constructor(props){
    super(props);
    this.state = {
      results: [],
      shownAll: false,
      goToOpening: 'false',
      tripped: 'false',
      currentlyShowing: 0,
      numberOfActive: 3,
      numberOfRetired: 2,
      activeQuestions: ["did you workout today?", "did you eat sushi today?", "have you done your laundry?"]
    }
  }
  getResultFromUser(result){
    this.setState({results: this.state.results.concat(result)});

  }
  showNextSurveyQuestion(){
    if (this.state.currentlyShowing < this.state.numberOfActive - 1){
      this.setState({currentlyShowing: this.state.currentlyShowing + 1});
    } else {
      this.setState({shownAll: true})
    }
  }
  sendUserToOpening(){
    console.log("user was sent to opening");
    this.setState({goToOpening: 'true'});
  }
  sendUserToPage(){
    this.setState({tripped: 'true'});
  }
  render(){
    var display;
    if (this.state.tripped === "false"){
      //it is the users first time on the app, the trip-wire has not been tripped yet.
      if(this.state.goToOpening === "true"){
        //They should go to opener once they have cliked get started
        //on titlepage
        display = <Opening sendUserToPage={this.sendUserToPage.bind(this)}/>
      } else {
        display = <TitlePage sendUserToOpening={this.sendUserToOpening.bind(this)}/>
      }
    } else {
      display = <Page/>
      // if (this.state.shownAll === false){
      //   display = <Survey
      //     getResultFromUser={this.getResultFromUser.bind(this)}
      //     nextSurvey={this.showNextSurveyQuestion.bind(this)}
      //     currentQuestion={this.state.activeQuestions[this.state.currentlyShowing]}
      //     questionIndex={this.state.currentlyShowing}
      //     questionTotal={this.state.numberOfActive}/>
      // } else {
      //   display = <Survey
      //     nextSurvey={this.showNextSurveyQuestion.bind(this)}
      //     currentQuestion={"NO MORE QUESTIONS. ANSWERS: " + this.state.results.toString()}
      //     />
      }
    }
    return(
      <View style={styles.main}>
        <Nav/>
        {display}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  main: {
    flex: 1,
    color: 'green',
    marginTop: 300
  }
})


App.external = true;
module.exports = App;
