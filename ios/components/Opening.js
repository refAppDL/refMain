import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Swiper from 'react-native-swiper'

class Opening extends Component{
  constructor(props){
    super(props);
  }
  sendUserToPage(){
    console.log("sending user to page");
  }
  render(){
    return (
     <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
       <View style={styles.slide1}>
         <Text style={styles.text}>Welcome to Reflect</Text>
       </View>
       <View style={styles.slide2}>
         <Text style={styles.text}>Step 1: Pick Questions</Text>
       </View>
       <View style={styles.slide3}>
         <Text style={styles.text}>Step 2: Log Answers</Text>
       </View>
       <View style={styles.slide4}>
         <View style={styles.topHalf}>
           <Text style={styles.text}>Step 3: See Results</Text>
         </View>
         <View style={styles.bottomHalf}>
           <TouchableHighlight
             style={styles.button}
             underlayColor={"#ff1493"}
             onPress={this.props.sendUserToPage}>
              <Text style={styles.buttonText}>Touch Here</Text>
            </TouchableHighlight>
          </View>
       </View>
     </Swiper>
   )
  }
}

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  slide4: {
    flex: 1,
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  topHalf:{
    flex: 1,
    alignItems: "center",
    justifyContent: 'flex-end'
  },
  bottomHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 300,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 30,
    color: 'green'
  }
})

Opening.external=true;
module.exports = Opening;
