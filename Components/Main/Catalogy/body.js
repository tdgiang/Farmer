import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,ImageBackground,TouchableOpacity,ScrollView} from 'react-native';


export default class Body extends Component{
    render(){
        return(
            <ScrollView>
            <View style={styles.container}>


                <View style={{height:250}}>
                    <View style={styles.row}>
                        <View style={styles.col}>

                            <TouchableOpacity onPress={()=>{this.props.navigation.push('QuyTrinh')}}>
                                <ImageBackground style={styles.img}  source={require('../../../images/buoi.jpg')}>
                                <View style={styles.down}>
                                    <View style={styles.content}>
                                        <Text style={styles.txt}>Bưởi da xanh</Text>
                                    </View>
                                </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={styles.col}>
                            <TouchableOpacity>
                                <ImageBackground style={styles.img}  source={require('../../../images/ngo.jpg')}>
                                <View style={styles.down}>
                                    <View style={styles.content}>
                                        <Text style={styles.txt}>Ngô</Text>
                                    </View>
                                </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            
                        </View>

                      
                        
                
                    </View>
                </View>

                <View style={{height:230}}>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <TouchableOpacity>
                            <ImageBackground style={styles.img}  source={require('../../../images/cachua.jpg')}>
                            <View style={styles.down}>
                                <View style={styles.content}>
                                    <Text style={styles.txt}>Cà chua</Text>
                                </View>
                            </View>
                            
                            </ImageBackground>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={styles.col}>
                            <TouchableOpacity>
                            <ImageBackground style={styles.img}  source={require('../../../images/caingot.jpg')}>
                            <View style={styles.down}>
                                <View style={styles.content}>
                                    <Text style={styles.txt}>Cải ngọt</Text>
                                </View>
                            </View>
                            </ImageBackground>
                            </TouchableOpacity>
                            
                        </View>

                      
                        
                
                    </View>
                </View>       

                 <View style={{height:230}}>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <TouchableOpacity>
                            <ImageBackground style={styles.img}  source={require('../../../images/cachua.jpg')}>
                            <View style={styles.down}>
                                <View style={styles.content}>
                                    <Text style={styles.txt}>Cà chua</Text>
                                </View>
                            </View>
                            
                            </ImageBackground>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={styles.col}>
                            <TouchableOpacity>
                            <ImageBackground style={styles.img}  source={require('../../../images/caingot.jpg')}>
                            <View style={styles.down}>
                                <View style={styles.content}>
                                    <Text style={styles.txt}>Cải ngọt</Text>
                                </View>
                            </View>
                            </ImageBackground>
                            </TouchableOpacity>
                            
                        </View>

                      
                        
                
                    </View>
                </View>                  
                


            </View>
            </ScrollView>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        flexDirection:'column',
        
    },
    row:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        marginRight:10,
        marginLeft:10,
        
    
    },
    col:{
        flex:1,
        margin:10,
        borderWidth:1,
        borderColor:'#3E8914',
        justifyContent:'flex-end',
        flexDirection:'column',
        borderRadius:5,
    },
    img:{
        width: '100%', 
        height: '100%',
        borderRadius:5,
    },
    content:{
        height:40,
        backgroundColor:'black',
        opacity:0.7
    },
    down:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end'
    },
    txt:{
        textAlign:"center",
        color:'white',
        fontSize:20,
        margin:5
        
    }

})