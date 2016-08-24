import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Calendar from 'react-native-calendar';


class Results extends Component{
  constructor(props){
    super(props);
    this.state = {};

  }


  render(){

    return(
      <View>
        <Text>This is where you see your Results</Text>
          <View style={styles.container}>
         <Calendar
           ref="calendar"
           eventDates={['2016-07-03', '2016-07-05', '2016-07-28', '2016-07-30']}
           scrollEnabled
           showControls
           dayHeadings={customDayHeadings}
           monthNames={customMonthNames}
           titleFormat={'MMMM YYYY'}
           prevButtonText={'Prev'}
           nextButtonText={'Next'}
           onDateSelect={(date) => this.setState({ selectedDate: date })}
           onTouchPrev={() => console.log('Back TOUCH')}     // eslint-disable-line no-console
           onTouchNext={() => console.log('Forward TOUCH')}  // eslint-disable-line no-console
           onSwipePrev={() => console.log('Back SWIPE')}     // eslint-disable-line no-console
           onSwipeNext={() => console.log('Forward SWIPE')}  // eslint-disable-line no-console
         />
      </View>
    )
  }
}
var styles = StyleSheet.create({
  main: {
    color: 'blue',
    alignSelf: 'center',
    flexDirection: 'row'
  }
});
Results.external = true;
module.exports = Results;
