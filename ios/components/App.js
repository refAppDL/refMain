import React, { Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nothing: "nada"
    }
  }
  render(){
    return(
      <Text style={styles.color}>Now we begin the App process</Text>
    )
  }
}

var styles = StyleSheet.create({
  color: "green",
})


App.external = true;
module.exports = App;
