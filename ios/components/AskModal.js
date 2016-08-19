
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';


class AskModal extends Component{
  constructor(props){
    super(props);
    this.state = {openModal: true};

  }
  yesClick(e){
    e.preventDefault();
    //Go To Survey
  }
  noClick(e){
    e.preventDefault();
    this.setState({openModal: false}); 
  }
  render(){

    return(
      <View>
        <Text> Do you want to ask your questions for the day</Text>
        <TouchableHighlight onClick={this.yesClick}>Yes!</TouchableHighlight>
        <TouchableHighlight onClick={this.noClick}>Nah</TouchableHighlight>
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
AskModal.external = true;
module.exports = AskModal;
