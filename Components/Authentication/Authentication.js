import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Login from './Login';


export default class Authentication extends Component {
  static navigationOptions = {
    header:null
  };

  render() {

    return (
   
     
        <Login  navigation={this.props.navigation}/>

     


    )
  }
}