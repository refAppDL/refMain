var Results = require("./Results.js");
var QuestionManager = require("./QuestionManager");

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';


class Dash extends Component{
  constructor(props){
    super(props);
    this.state = {resultsSelected: true};

  }

  resultsSelect(event){
    event.preventDefault();
    if(!this.state.resultsSelected){
      this.setState({resultsSelected: true});
    }
  }
  questionsSelect(event){
    event.preventDefault();
    if(this.state.resultsSelected){
      this.setState({resultsSelected: false});
    }
  }


  render(){

    var pageShow, resultsButtonClass, questionsButtonClass;
    if(resultsSelected){
      pageShow = <Results />
      resultsButtonClass= "selected";
      questionsButtonClass = "unselected";
    }else{
      pageShow = <QuestionManager />
      resultsButtonClass = "selected";
      questionsButtonClass = "unselected";

    }
    return(
      <View>
        <TouchableHighlight
          className={resultsButtonClass}
          onClick={this.resultsSelect}>
            Results
        </TouchableHighlight>
        <TouchableHighlight
          className={questionsButtonClass}
          onClick={this.questionsSelect}>
            Manage Questions
        </TouchableHighlight>
        {pageShow}
      </View>
    )
  }
}
var styles = StyleSheet.create({
  selected: {
    color: 'blue',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  unselected: {
    color: 'yellow',
    alignSelf: 'center'
  }
});
Dash.external = true;
module.exports = Dash;
