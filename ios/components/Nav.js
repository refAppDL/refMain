import React, {Component} from 'react'
import {Text, View,StyleSheet, TouchableHighlight} from 'react-native';

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <Text> Hi from nav</Text>
    )
  }
}

var styles = StyleSheet.create({
  wrapper: {

  }
})

Nav.external = true;
module.exports = Nav;
