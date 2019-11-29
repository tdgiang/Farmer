import React,{Component} from 'react';
import {View,Text,Button,TouchableOpacity} from 'react-native';

import Tabnavigator from './Tabnavigator';

export default class Into extends Component{



    openMenu(){
        const {open}=this.props;
        open();
    }


    render(){
        return(
           
            <Tabnavigator />

        )
    }
}