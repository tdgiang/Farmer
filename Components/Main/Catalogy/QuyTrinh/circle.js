import React,{Component} from 'react';
import {View} from 'react-native';
import {Container,Icon} from 'native-base';

export default class Circle extends Component{
    render(){
        return(
          
                <View style={{flex:1,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <View style={{
                        width:100,
                        height:100,
                        borderRadius: 100/2,
                        backgroundColor:'#3E8914',
                        justifyContent:'center',
                        alignItems:'center'
                        }}
                    >
                    <Icon type='FontAwesome' name='check'
                        style={{fontSize: 40, color: 'white'}}
                    />
                     </View>
                </View>
        )
    }
}