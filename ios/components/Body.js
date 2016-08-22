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
    this.state={goToSurvey: false};

  }
  toSurvey(e){
    e.preventDefault();
    this.setState({goToSurvey: true});
  }
  render(){
    var pageKeep;

    if(this.state.goToSurvey)
      pageKeep = <Survey />
    else
      pageKeep = <Dash goToQuestions={this.toSurvey.bind(this)} />
    return(
      <View style={styles.wrapper}>
        {pageKeep}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff00f',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    color: "#00f0ff"
  }

})


Body.external = true;
module.exports = Body;
