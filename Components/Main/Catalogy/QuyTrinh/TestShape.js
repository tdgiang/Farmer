import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {CheckBox} from 'native-base';
import { switchCase } from '@babel/types';


export default class Test extends Component {

    constructor(props) {
        super(props);

    }

    setColor(status) {
        if (status == '0') //chưa tơi
            return ('#66BB6A')
        else if (status == '1') //chuẩn bị
            return ('#BF0603')
        else if (status == '2') //đã xong
            return ('#3E8914')
        else if (status == '3') //Thêm vào
            return ('#048A81')
        else 
            return ('#9E9E9E')  //bỏ qua

    }
    setCheck(status)
    {
        if(status=='2' || status=="3"  )
            return(true)
        else
            return(false)
    }


    render() {
        const color = this.setColor(this.props.item.status);
        const check=this.setCheck(this.props.item.status);
        return (
            <View
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 50,
                    marginRight: 20,
                    borderLeftWidth: 5,
                    borderLeftColor: '#0D0A0B',
                    paddingLeft: 35,
                   

                }}>

                    <View style={{
                        width: 300, height: 80,
                        backgroundColor: color,
                        borderRadius: 10,
                        marginTop: 10,
                        marginBottom: 10,
                        
                    }}>

                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            opacity:0.8
                        }}>
                            <Text style={{
                                fontSize: 22,
                                color: 'white'
                            }}>{this.props.item.CongViec}</Text>

                        </View>

                        <View style={{
                            width: 80,
                            height: 80,
                            borderRadius: 80 / 2,
                            backgroundColor: 'white',
                            position: 'absolute',
                            left: -55,
                            top: 0,
                           
                        }}></View>

                        <View style={{
                            width: 80,
                            height: 80,
                            borderRadius: 80 / 2,
                            backgroundColor: color,
                            position: 'absolute',
                            left: -75,
                            top: 0,
                            
                        }} >
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            
                                    <Text style={{
                                        fontSize: 20,
                                        color: 'white'
                                    }}>{this.props.item.date}</Text>
                                
                            </View>


                        </View>
                    </View>
                  
                </View>
            </View>
        )
    }
}

