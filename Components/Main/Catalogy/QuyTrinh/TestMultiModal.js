import React, {Component} from 'react';
import {Text, TouchableHighlight, View, Alert,FlatList} from 'react-native';
import ModalExample from './TestModal';
import Data from '../../../../data//dataTest';



export default class MultiModal extends Component{
    static navigationOptions = {
        header:null
      };
    render(){
        return(
            <View style={
                {
                    flex:1,
                    justifyContent:'center',
                    flexDirection:'column',
                    alignItems:'center'
                }
            }>
     
                    <FlatList 
                        data={Data}
                        renderItem={({item,index})=>{
                        return(
                        <ModalExample item={item} index={index} >
                        
                       </ModalExample>
                        )
                        }}
                     >

                    </FlatList>
            </View>
        )
    }
}