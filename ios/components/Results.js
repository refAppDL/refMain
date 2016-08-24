import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Picker,
  AsyncStorage
} from 'react-native';
const Item = Picker.Item;



class Results extends Component{
  constructor(props){
    super(props);
    this.state = {
      viewMethod:'list',
      results: [],
      qIndex: null
    };

  }
  componentDidMount(){
    AsyncStorage.getItem('answers').then(value=>{
      var resultsArr = JSON.parse(value);
      var idx;
      if(resultsArr.length > 0){
        idx = 0;
      }else{
        idx = null;
      }
      this.setState({results: resultsArr, qIndex: idx});
    });
  }
  onValueChange(key: string, value: string) {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  }


  render(){
    var buttonArr = [];
    var dataDisplay=[];
    for (var i = 0; i < this.state.results.length; i++) {
      buttonArr.push(<Item label={"Question " + i} value={i} /> );
    }
    if(this.state.results.length > 0){
      var qDisplay = this.state.results[this.state.qIndex];
      var qText = qDisplay.text;
      var answers = qDisplay.answers;
      var numberYes = 0;
      var numberNo = 0;
      for (var i = 0; i < answers.length; i++) {
        if(answers[i].value === 'yes'){
          numberYes++;
        }else{
          numberNo++;
        }
      }
    }else{
      var qText = "Nothing to display";
      var numberOfYes = null;
      var numberOfNo = null;

    }

    return(
      <View>
        <Text>This is where you see your Results</Text>
            <Picker
              style={[styles.pickStyle]}
              selectedValue={this.state.qIndex}
              onValueChange={this.onValueChange.bind(this, 'qIndex')}
              mode="dropdown">
              {buttonArr}
            </Picker>
        <Text>{qText}</Text>
        <Text>{"Number of Yes: " + numberYes}</Text>
        <Text>{"Number of No: " + numberNo}</Text>

      </View>
    )
  }
}
var styles = StyleSheet.create({
  main: {

    alignSelf: 'center',
    flexDirection: 'row'
  },
  wrapper: {
    flex: 1
  },
  pickStyle:{
    backgroundColor: 'blue'
  }
});
Results.external = true;
module.exports = Results;
