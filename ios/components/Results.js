import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';



class Results extends Component{
  constructor(props){
    super(props);
    this.state = {};

  }


  render(){

    return(
      <View>
        <Text>This is where you see your Results</Text>


      </View>
    )
  }
}
var styles = StyleSheet.create({
  main: {
    color: 'blue',
    alignSelf: 'center',
    flexDirection: 'row'
  }
});
Results.external = true;
module.exports = Results;
