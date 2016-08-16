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
      <Text style={styles.main}>Now we begin the App process</Text>
    )
  }
}

var styles = StyleSheet.create({
  main: {
    color: 'green',
    marginTop: 300,
  }
})


App.external = true;
module.exports = App;
