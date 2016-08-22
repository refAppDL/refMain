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
    if(this.state.resultsSelected){
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
        <View className="resultsButton">
          <TouchableHighlight
            className={resultsButtonClass}
            onPress={this.resultsSelect.bind(this)}>
              <Text>Results</Text>
          </TouchableHighlight>
        </View>
        <View className="QButton">
          <TouchableHighlight
            className={questionsButtonClass}
            onPress={this.questionsSelect.bind(this)}>
              <Text>Manage Questions</Text>
          </TouchableHighlight>
        </View>
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
