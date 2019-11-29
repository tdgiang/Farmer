import React,{Component} from 'react';
import {View,Text} from 'react-native';


export default class Setting extends Component{
    render(){
        return(

            <View style={{
                backgroundColor:'yellow',
                flex:1,
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
            }}>
                <Text>This is setting</Text>
            </View>


        )
    }
}