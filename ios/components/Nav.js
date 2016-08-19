import React, {Component} from 'react'
import {Text, View,StyleSheet, TouchableHighlight} from 'react-native';

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <View style={styles.wrapper}>
        <Text>Hi from the nav</Text>
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

Nav.external = true;
module.exports = Nav;
