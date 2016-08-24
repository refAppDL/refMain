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
      this.addAnswer(this.state.text);
      this.updateAppData(qs.length);
      this.setState({questions: qs, isOpen: false, text: ''});
    })

  }
  addAnswer(text){
    AsyncStorage.getItem('answers').then(value=>{
      var resultsArr = JSON.parse(value);
      var questionObj = {question_id: resultsArr.length, text: text, answers:[]};
      resultsArr.push(questionObj);
      console.log(resultsArr);
      AsyncStorage.setItem('answers', JSON.stringify(resultsArr));
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
    if(this.state.questions.length === 0){
      display.push(<Text> There are no questions to Display, add some</Text>);
    }else{
      for (var i = 0; i < this.state.questions.length; i++) {
        display.push(<Text style={styles.qList} key={this.state.questions[i].text}> {this.state.questions[i].text } </Text>);
      }
    }
    var BContent = <Button onPress={this.closeModal.bind(this)} style={styles.btnModal}>X</Button>;

    return(
      <View style={styles.wrapper}>
        <Text style={styles.header}>Your Questions:</Text>
        {display}
        <TouchableHighlight style={styles.addButton} onPress={this.openModal.bind(this)}><Text style={styles.plus}>+</Text></TouchableHighlight>
          <Modal isOpen={this.state.isOpen} onClosed={this.closeModal.bind(this)} style={[styles.modal, styles.modal4]} position={"center"} >
            {BContent}
            <Text style={styles.text}>Add a question:</Text>
            <TextInput style={styles.inputText} onChangeText={(text)=>this.setState({text:text})} value ={this.state.text} />
            <Button style={styles.submitButton} onPress={this.addQuestion.bind(this)}>Submit Question</Button>
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
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  modal: {
   justifyContent: 'center',
   alignItems: 'center',
   width: 350,
   backgroundColor: '#3B5998'
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
   height: 30,
   width: 300,
   justifyContent: 'center',
   margin: 20,
   alignItems: 'center',
   borderColor: 'black',
   padding: 3,
   borderWidth: 1
 },

 btn: {
   margin: 10,
   backgroundColor: "#3B5998",
   color: "white",
   padding: 10
 },

 btnModal: {
   position: "absolute",
   top: -70,
   right: -150,
   width: 20,
   height: 20,
   backgroundColor: "transparent",
   color: 'black'
 },
 submitButton: {
   backgroundColor: 'teal',
   color: 'blue',
   padding: 10,
   borderRadius: 5,
   margin: 5,
   justifyContent: 'center',
   alignItems: 'center'
 },

 text: {
   color: "black",
   fontSize: 22
 },
 qList:{
   fontSize: 20,
   textAlign: 'center',
   margin: 5
 },
 addButton: {
   backgroundColor: 'teal',
   height: 40,
   width: 40,
   borderRadius: 20
 },
 plus: {
   fontSize: 20
 }
});
QuestionManager.external = true;
module.exports = QuestionManager;
