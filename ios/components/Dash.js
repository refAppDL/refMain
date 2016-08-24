var Results = require("./Results.js");
var QuestionManager = require("./QuestionManager");
var Lounge = require('./Lounge.js');
var Button  = require('react-native-button');
var Modal   = require('react-native-modalbox');

// var Slider  = require('react-native-slider');

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';


class Dash extends Component{
  constructor(props){
    super(props);
    this.state = {resultsSelected: true,
        goToLounge: true,
        destination: this.props.destination,
        isOpen: false,
        isDisabled: false,
        swipeToClose: true,
        sliderValue: 0.3};

  }
  getStateFromAsync(){
    AsyncStorage.getItem('appData').then(value=>{
      console.log(value);
      var dataObj = JSON.parse(value);
      console.log(dataObj);
      // if(dataObj.tripped && dataObj.numberOfActive > 0 && dataObj.hasAnsweredToday){
      //   this.setState({tripped: true, destination: 'lounge'});
      // }else if(dataObj.tripped && dataObj.numberOfActive > 0){
      //   this.setState({tripped:true, destination: 'survey'});
      // }else if(dataObj.tripped){
      //   this.setState({tripped: true, destination: 'addQuestion'});
      // }else{
      //   this.setState({tripped: false, destination: 'opener'});
      // }

    }).done();
  }
  openModal1(id) {
   this.refs.modal1.open();
  }
  toggleDisable() {
    this.setState({isDisabled: !this.state.isDisabled});
  }

  toggleSwipeToClose() {
    this.setState({swipeToClose: !this.state.swipeToClose});
  }

  resultsSelect(event){
    event.preventDefault();
    if(this.state.destination !== 'results'){
      this.setState({resultsSelected: true, goToLounge: false, destination: 'results'});
    }
  }
  questionsSelect(){
    if(this.state.destination !== 'addQuestion'){
      this.setState({resultsSelected: false, goToLounge: false, destination: 'addQuestion'});
    }
  }
  clearAsync(){
    AsyncStorage.clear();
  }

  leaveLounge(){
    this.setState({goToLounge: false, destination: "results"});
  }
  render(){
    var pageShow, resultsButtonStyle, questionsButtonStyle;

    if(this.state.destination === 'lounge'){
      pageShow = <Lounge leave={this.leaveLounge.bind(this)} />
      resultsButtonStyle = styles.kSelected;
      questionsButtonStyle = styles.kSelected;
    }else if(this.state.destination === 'addQuestion'){
      pageShow = <QuestionManager />
      resultsButtonStyle = styles.kSelected;
      questionsButtonStyle = styles.rSelected;
    }else{
      pageShow = <Results />
      resultsButtonStyle = styles.rSelected;
      questionsButtonStyle = styles.kSelected;
    }
    return(
      <View style={styles.wrapper}>
        <View style={styles.buttonBox}>
          <TouchableHighlight
            style={[styles.resultsButton, styles.navD, resultsButtonStyle]}
            onPress={this.resultsSelect.bind(this)}>
              <Text>Results</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.questionsButton, styles.navD, questionsButtonStyle]}
            onPress={this.questionsSelect.bind(this)}>
              <Text>Manage Questions</Text>
          </TouchableHighlight>
        </View>
        {pageShow}
      </View>
    )
  }
}
var styles = StyleSheet.create({
  wrapper:{
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 2,
    flex: 1
  },
  buttonBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 3,
    flex: .2,
    flexDirection: "column"
  },
  resultsButton:{
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    alignSelf: 'flex-end'
  },
  questionsButton:{
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignSelf: 'flex-start'
  },
  navD: {
    backgroundColor: 'teal',
    height: 40,
    width: 100,
    borderColor: 'black'
  },
  rSelected: {
    backgroundColor: 'red'
  },
  kSelected: {
    backgroundColor: 'teal'
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },
  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },
  text: {
    color: "black",
    fontSize: 22
  }

});
Dash.external = true;
module.exports = Dash;
