import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';
import Circle from './circle';
import List from './listItem';

export default class BodyModal extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.upper}>
                    <Circle />
                </View>
                <View style={styles.below}>
                    <List  />
                </View>

            </View>

        )
            
    }
}

const styles=StyleSheet.create({

    container:{
        flex:1,
       
    },

    upper:{
        flex:2,
        alignItems:'center',
        justifyContent:'center',
        marginTop:15,
        marginBottom:15
        
    },

    below:{
        
        
    }

})