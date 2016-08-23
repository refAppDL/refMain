var Button = require('react-native-button');

import React, {Component} from 'react'
import {Text, View,StyleSheet, TouchableHighlight} from 'react-native';

class Lounge extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  leave(){
    console.log('banana');
    this.props.leave();
  }
  render(){
    return(
      <View style={styles.wrapper}>
        <Text>this is the Lounge, sit down and relax</Text>
        <Button onClick={this.leave.bind(this)}>Leave Lounge</Button>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "purple",
    borderWidth: 2,
    flex: .07,
  }
})

Lounge.external = true;
module.exports = Lounge;
