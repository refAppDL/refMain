import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native'

class Survey extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: "none"
    }
  }
  selectYes(){
    //yes will be the right button
    this.setState({selected: 'yes'});
  }
  selectNo(){
    //no will be the left button
    this.setState({selected: 'no'});
  }
  determineButtons(){

  }

  render(){
    var yesButton;
    var noButton;
    switch(this.state.selected){
      case("none"):
      //neither is selected, both are pressable
        yesButton = <TouchableHighlight
                      onPress={this.selectYes.bind(this)}
                      style={styles.yesButton}>
                        <Text style={styles.buttonText}>YES</Text>
                      </TouchableHighlight>

        noButton = <TouchableHighlight
                    onPress={this.selectNo.bind(this)}
                    style={styles.noButton}>
                      <Text style={styles.buttonText}>NO</Text>
                  </TouchableHighlight>;
        break;
      case("yes"):
      //yes is selected, it is no longer pressable, left(no) is still pressable
        yesButton = <View style={styles.yesButtonSelected}>
                      <View style={styles.yesButton}>
                        <Text>
                          Yes is selected
                        </Text>
                      </View>
                    </View>
        noButton = <View>
                      <TouchableHighlight
                      onPress={this.selectNo.bind(this)}
                      style={styles.noButton}>
                        <Text style={styles.buttonText}>NO</Text>
                      </TouchableHighlight>
                    </View>
        break;
      case("no"):
      //no is selected, it is no longer pressable, right(yes) is still pressable
        yesButton = <TouchableHighlight
                    onPress={this.selectYes.bind(this)}
                    style={styles.yesButton}>
                      <Text style={styles.buttonText}>YES</Text>
                    </TouchableHighlight>;
        noButton = <View style={styles.noButtonSelected}>
          <View style={styles.noButton}>
                        <Text>No is selected</Text>
                    </View>
                  </View>
        break;
      default:
        break;
    }
    return(
      <View style={styles.wrapper}>
        <View style={styles.topHalf}>
          <Text style={styles.questionText}>This is the survey - question here?</Text>
        </View>
        <View style={styles.bottomHalf}>
          <View style={styles.buttonBox}>
            <View style={styles.noButton}>
              {noButton}
            </View>
            <View style={styles.yesButton}>
              {yesButton}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "tan",
  },
  topHalf:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
  },
  bottomHalf:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonBox:{
    justifyContent: "space-around",
    flexDirection: "row",
    width: 300,
  },
  noButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "red"
  },
  yesButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "green"
  },
  noButtonSelected: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "blue"
  },
  yesButtonSelected: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "pink"
  },
  buttonText: {
    backgroundColor: 'rgba(255,0,255,0)',
    fontSize: 20,
  },
  questionText: {
    fontSize: 40,
  }
})

Survey.external = true;
module.exports = Survey;
