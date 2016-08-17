import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

class Opening extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return(
      <Text>Hello</Text>
    )
  }
}

Opening.external=true;
module.exports = Opening;
