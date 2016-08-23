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
  TouchableHighlight
} from 'react-native';


class Dash extends Component{
  constructor(props){
    super(props);
    this.state = {resultsSelected: true,
        goToLounge: true,
        isOpen: false,
        isDisabled: false,
        swipeToClose: true,
        sliderValue: 0.3};

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
    if(!this.state.resultsSelected){
      this.setState({resultsSelected: true, goToLounge: false});
    }
  }
  questionsSelect(event){
    event.preventDefault();
    if(this.state.resultsSelected){
      this.setState({resultsSelected: false, goToLounge: false});
    }
  }

  leaveLounge(){
    this.setState({goToLounge: false});
  }
  render(){
    var pageShow, resultsButtonStyle, questionsButtonStyle;

    if(this.state.goToLounge){
      pageShow = <Lounge leave={this.leaveLounge.bind(this)} />
      resultsButtonStyle = styles.rUnselected;
      questionsButtonStyle = styles.qUnselected;
    }else if(this.state.resultsSelected){
      pageShow = <Results />
      resultsButtonStyle = styles.rSelected;
      questionsButtonStyle = styles.qUnselected;
    }else{
      pageShow = <QuestionManager />
      resultsButtonStyle = styles.rUnselected;
      questionsButtonStyle = styles.qSelected;
    }
    return(
      <View>
          <Button onPress={this.openModal1.bind(this)} style={styles.btn}>Basic modal</Button>
          <Modal style={[styles.modal, styles.modal1]} ref={"modal1"} swipeToClose={this.state.swipeToClose} onClosed={this.onClose} onOpened={this.onOpen} onClosingState={this.onClosingState}>
            <Text style={styles.text}>Would you like to answer the days questions?</Text>
            <Button onPress={this.props.goToSurvey} style={styles.btn}>Take Days Survey</Button>
          </Modal>
          <TouchableHighlight
            style={resultsButtonStyle}
            onPress={this.resultsSelect.bind(this)}>
              <Text>Results</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={questionsButtonStyle}
            onPress={this.questionsSelect.bind(this)}>
              <Text>Manage Questions</Text>
          </TouchableHighlight>
        {pageShow}
      </View>
    )
  }
}
var styles = StyleSheet.create({
  rSelected: {
    backgroundColor: 'blue',
    height: 80,
    width: 80,
    borderColor: 'black',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: 'center'
    // position: 'absolute',
    // top: 30,

  },
  rUnselected: {
    backgroundColor: 'red',
    height: 80,
    width: 80,
    borderColor: 'black',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: 'center'
  },
  qSelected: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    borderColor: 'black',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40
  },
  qUnselected: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40
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
