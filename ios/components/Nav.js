import React, {Component} from 'react';
import {Text, View,StyleSheet, TouchableHighlight, AsyncStorage} from 'react-native';

// var SideMenu = require("react-native-side-menu");

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  clearAsync(){
    AsyncStorage.clear();
  }
  render(){
    return(
      <View style={styles.wrapper}>
        <Text>Hi from the nav</Text>
        <TouchableHighlight onPress={this.clearAsync.bind(this)}><Text>Clear dat syna</Text></TouchableHighlight>
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
    flex: .1,
  },
  menuPage: {
    height: 300,
    backgroundColor: 'white',
    width: 200,
    zIndex: 1
  }
})

Nav.external = true;
module.exports = Nav;
