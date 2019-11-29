import React,{Component} from 'react';
import {StyleSheet,View,Text,Alert} from 'react-native';
import Swipeout from 'react-native-swipeout';
import flatListData from '../../../../data/flatListData';

export default class Item extends Component{
    constructor(props) {
        super(props);   
        this.state = {
            activeRowKey: null
        };          
      }
      

    render(){

        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }              
            },          
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.Key });
            },      
            right: [
                { 
                    onPress: () => {    
                        const deletingRow = this.state.activeRowKey;          
                        Alert.alert(
                            'Thông báo',
                            'Bạn có chắc chắn xóa không?',
                            [                              
                              {text: 'Không', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                              {text: 'Có', onPress: () => {        
                                flatListData.splice(this.props.index, 1); 
                                //Refresh FlatList ! 
                                this.props.parentFlatList.refreshFlatList(deletingRow);
                              }},
                            ],
                            { cancelable: true }
                          ); 
                    }, 
                    text: 'Delete', type: 'delete' 
                }
            ],  
            rowId: this.props.index, 
            sectionId: 1    
          };
        return(

            <Swipeout  {...swipeSettings}>
                <View style={{
                    flex:1,
                    marginLeft:20,
                    marginRight:20,
                    height:100,
                    backgroundColor:'#3E8914',
                    borderRadius:15,
                    marginTop:15,
                    marginBottom:15
                }}>
                    <View style={{
                        flex:1,
                        textAlign:"center",
                        justifyContent:'center',
                        alignItems:'center',
                        flexDirection:'column'
                        
                    }}>
                        <Text style={{
                            fontSize:20,
                            color:'white',
                            paddingLeft:10,
                            paddingRight:10,
                        }}>
                        {this.props.item.value} 
                        </Text> 
                    </View>
                </View>
            </Swipeout>

        )
    }
}