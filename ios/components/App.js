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
      goToOpening: false,
      tripped: false,
      currentlyShowing: 0,
      hasAnsweredToday: false,
      numberOfActive: 3,
      numberOfRetired: 2
    }
    //AsyncStorage.setItem('appData', JSON.stringify(this.state));

  }
  componentDidMount(){
    this.getStateFromAsync();
  }
  getStateFromAsync(){
    AsyncStorage.getItem('appData').then(value=>{
      var dataObj = JSON.parse(value);
      if(dataObj === null){
        return;
      }
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
    this.setState({goToOpening: true});
  }
  sendUserToPage(){
    this.setState({tripped: true, destination: 'addQuestion'});
    AsyncStorage.setItem('dataObj', JSON.stringify(this.state))
  }
  render(){
    var display;
    switch(this.state.destination){
      case('opener'):
        display = <Opening sendUserToPage={this.sendUserToPage.bind(this)}/>
      break;
      default:
        display = <Page destination={this.state.destination}/>
      break;

    }
    // if (this.state.tripped === false){
    //   //it is the users first time on the app, the trip-wire has not been tripped yet.
    //   if(this.state.goToOpening === true){
    //     //They should go to opener once they have cliked get started
    //     //on titlepage
    //   } else {
    //     display = <TitlePage sendUserToOpening={this.sendUserToOpening.bind(this)}/>
    //   }
    // } else {
    //   // if (this.state.shownAll === false){
    //   //   display = <Survey
    //   //     getResultFromUser={this.getResultFromUser.bind(this)}
    //   //     nextSurvey={this.showNextSurveyQuestion.bind(this)}
    //   //     currentQuestion={this.state.activeQuestions[this.state.currentlyShowing]}
    //   //     questionIndex={this.state.currentlyShowing}
    //   //     questionTotal={this.state.numberOfActive}/>
    //   // } else {
    //   //   display = <Survey
    //   //     nextSurvey={this.showNextSurveyQuestion.bind(this)}
    //   //     currentQuestion={"NO MORE QUESTIONS. ANSWERS: " + this.state.results.toString()}
    //   //     />
    //   //}
    // }
    return(
      <View style={styles.main}>
        {display}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'green',
  }
})


App.external = true;
module.exports = App;
