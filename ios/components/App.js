import React, { Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native';

var Page = require("./Page.js")
var Opening = require("./Opening.js");
var TitlePage = require("./TitlePage.js");
var Survey = require("./Survey.js");


class App extends Component {
  //when the component mounts, it will have to check async to see if it has been
  //tripped or not (ie, whether or not the user has been on the app before).
  constructor(props){
    super(props);
    this.state = {
      goToOpening: 'false',
      tripped: 'false',
      numberOfActive: 3,
      numberOfRetired: 2,
    }
  }
  sendUserToOpening(){
    console.log("user was sent to opening");
    this.setState({goToOpening: 'true'});
  }
  sendUserToPage(){
    this.setState({tripped: 'true'});
  }
  render(){
    var display;
    if (this.state.tripped === "false"){
      //users first time on the app
      if(this.state.goToOpening === "true"){
        //They should go to opener once they have cliked get started
        //on titlepage
        display = <Opening sendUserToPage={this.sendUserToPage.bind(this)}/>
      } else {
        display = <TitlePage sendUserToOpening={this.sendUserToOpening.bind(this)}/>
      }
    } else {
      display = <Survey/>
    }
    return(
      <View style={styles.main}>
        {display}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  main: {
    flex: 1
  }
})


App.external = true;
module.exports = App;
