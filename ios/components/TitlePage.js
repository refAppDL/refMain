import React, {Component} from 'react';
import {Text, View, TouchableHighlight, StyleSheet, Image} from 'react-native';

class TitlePage extends Component{
  constructor(props){
    super(props);
  }
  sendUserToOpener(){
    console.log("sending user to opener")
    //in reality, the button will call this.props.sendUserToOpener which
    //will be a bound function from app.js, switching the title page component
    //for the opener. The same will happen when the opener is done, switching
    //app.js's sub component to be dash (or body or whatever it is after opener, i think dash)
  }
  render(){
    return(
      <View style={styles.wrapper}>
        <View style={styles.topHalf}>
          <Text>
            Welcome to REFLECT
          </Text>
        </View>
        <View style={styles.bottomHalf}>
          <TouchableHighlight
            underlayColor={"#ff00f0"}
            onPress={this.props.sendUserToOpening}
            stlye={styles.button}>
            <Text style={styles.buttonText}>
              Get Started
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "orange"
  },
  topHalf:{
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
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
    color: 'blue'
  }

})

TitlePage.external = true;
module.exports = TitlePage;
