import React,{Component} from 'react';
import {View,FlatList} from 'react-native';
import Item from './Shapes'
import Data from '../../../../data/CongViec';


export default class ListTest extends Component{
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
                <View style={{
            

                }}>
                    <FlatList 
                        data={Data}
                        renderItem={({item,index})=>{
                        return(
                        <Item item={item} index={index} >
                        
                        </Item>
                        )
                        }}
                     >

                    </FlatList>
                    

                </View>

            </View>


        )
    }
}