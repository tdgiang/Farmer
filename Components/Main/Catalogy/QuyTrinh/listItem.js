import React, { Component } from 'react';
import {FlatList,View} from 'react-native';
import Item from './item';
import Data from '../../../../data/flatListData';


export default class listItem extends Component {
    constructor(props) {
      super(props);     
      this.state = ({
          deletedRowKey: null,            
      });
  }
  refreshFlatList = (deletedKey) => {
      this.setState((prevState) => {
          return {
              deletedRowKey: deletedKey
          };
      });
  }
  render() {
    return (
      
        <View style={{
            flex:1,
        }}> 
            
            <FlatList 
              data={Data}
              renderItem={({item,index})=>{
                return(
                  <Item item={item} index={index} parentFlatList={this} >
                    
                  </Item>
                )
              }}
            >

            </FlatList>

        </View>
     
    );
  }
}