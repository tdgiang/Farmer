import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';



export default class FeedBack extends Component {
  static navigationOptions = {
    header:null
  };
  render() {

    return (
        <View>
            <Text> This is Feed Back</Text>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                <Text>Come back</Text>
            </TouchableOpacity>

        </View>


    )
  }
}