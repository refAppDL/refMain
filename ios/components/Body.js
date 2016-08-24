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
    this.state={goToSurvey: false, destination: this.props.destination};

  }
  toSurvey(e){
    e.preventDefault();
    this.setState({goToSurvey: true, destination: 'survey'});
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
    if(this.state.destination === 'survey')
      display = <Survey /> //Need to pass question props
    else
      display = <Dash
                  goToQuestions={this.toSurvey.bind(this)}
                  destination={this.props.destination}/>
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
