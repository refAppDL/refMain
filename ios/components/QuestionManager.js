var AskModal = require("./AskModal.js");
var Modal = require('react-native-modalbox');
var Button = require('react-native-button');

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  TextInput
} from 'react-native';


class QuestionManager extends Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      questions: [],
      text: ''
    };
  }
  componentDidMount(){
    this.getQuestionsFromAsync();
  }
  getQuestionsFromAsync(){
    AsyncStorage.getItem('questions').then(value=>{
      var qs = JSON.parse(value);
      this.setState({questions: qs});
    })
  }
  addQuestion(){
    var newQ = {type: 'binary', frequency: 'daily', text: this.state.text};
    AsyncStorage.getItem('questions').then(value=>{
      var qs = JSON.parse(value);
      qs.push(newQ);
      AsyncStorage.setItem('questions', JSON.stringify(qs));
      this.updateAppData(qs.length);
      this.setState({questions: qs, isOpen: false, text: ''});
    })

  }
  updateAppData(numberOfActive){
    AsyncStorage.getItem('appData').then(value=>{
      var dataObj = JSON.parse(value);
      dataObj.numberOfActive = numberOfActive;
      AsyncStorage.setItem('appData', JSON.stringify(dataObj)); 
    })
  }
  closeModal(){
    this.setState({isOpen: false});
  }
  openModal(){
    this.setState({isOpen: true});
  }

  render(){
    var display = [];
    console.log(this.state.questions);
    if(this.state.questions.length === 0){
      display.push(<Text> There are no questions to Display, add some</Text>);
    }else{
      for (var i = 0; i < this.state.questions.length; i++) {
        display.push(<Text key={this.state.questions[i].text}> {this.state.questions[i].text } </Text>);
      }
    }
    var BContent = <Button onPress={this.closeModal.bind(this)} style={[styles.btn, styles.btnModal]}>X</Button>;

    return(
      <View>
        <Text>This is the questions page</Text>
        {display}
        <TouchableHighlight onPress={this.openModal.bind(this)}><Text>+</Text></TouchableHighlight>
          <Modal isOpen={this.state.isOpen} onClosed={this.closeModal.bind(this)} style={[styles.modal, styles.modal4]} position={"center"} backdropContent={BContent}>
            <Text style={styles.text}>Add a question:</Text>
            <TextInput style={styles.inputText} onChangeText={(text)=>this.setState({text:text})} value ={this.state.text} />
            <Button onPress={this.addQuestion.bind(this)}>Submit Question</Button>
          </Modal>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  main: {
    color: 'blue',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  modal: {
   justifyContent: 'center',
   alignItems: 'center'
 },

 modal2: {
   height: 230,
   backgroundColor: "#3B5998"
 },

 modal3: {
   height: 300,
   width: 300
 },

 modal4: {
   height: 300
 },
 inputText:{
   height: 20,
   width: 200
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
   backgroundColor: "transparent",
   color: 'black'
 },

 text: {
   color: "black",
   fontSize: 22
 }
});
QuestionManager.external = true;
module.exports = QuestionManager;
