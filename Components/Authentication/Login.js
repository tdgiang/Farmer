import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'

export default class Login extends Component {
    render() {
        return (
           
                
               <View style={styles.container}>

         
                    
                    <KeyboardAvoidingView  style={styles.container}>
                        <TouchableWithoutFeedback style={styles.container} 
                                onPress={Keyboard.dismiss}>
                            <View style={styles.logoContainer}>
                                <View style={styles.logoContainer}>
                                    <Image style={styles.logo}
                                        source={require('./images/logo.jpg')}>
                                    </Image>
                                  
                                    <Text style={styles.title}>Farmer</Text>
                                    
                                </View>
                                <View style={styles.infoContainer}>
                                    <TextInput style={styles.input}
                                        placeholder="Enter username/email"
                                        placeholderTextColor='rgba(255,255,255,0.8)'
                                        keyboardType='email-address'
                                        returnKeyType='next'
                                        autoCorrect={false}
                                        onSubmitEditing={()=> this.refs.txtPassword.focus()}
                                    />


                                    <TextInput style={styles.input} 
                                        placeholder="Enter password"
                                        placeholderTextColor='rgba(255,255,255,0.8)'
                                        returnKeyType='go'
                                        secureTextEntry
                                        autoCorrect={false}
                                        ref={"txtPassword"}
                                    />

                                    <View style={styles.loginContainer}>
                                        <TouchableOpacity style={styles.buttonLeftContainer} onPress={()=>{
                                            this.props.navigation.goBack()
                                        }}>
                                            <Text style={styles.buttonSelectText}>Login</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.buttonRightContainer} onPress={()=>{
                                            alert("Go to dang ky")
                                        }}>
                                            <Text style={styles.buttonText}>Sign Up</Text>
                                        </TouchableOpacity>
                                    </View>
                                    
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                    </View>
               
           
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#37474F',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 140,
        height: 130,
        borderRadius:128/2,
    },
    title: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9
    },
    infoContainer: {
       
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius:10
    },
    loginContainer:{
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    buttonLeftContainer: {
        backgroundColor: '#3E8914',
        height:40,
        width:120,
        marginRight:2,
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
    },
    buttonRightContainer: {
        backgroundColor: '#3E8914',
        height:40,
        width:120,
        marginLeft:2,
        borderTopRightRadius:15,
        borderBottomRightRadius:15
    },
    buttonText: {
        textAlign: 'center',
        color :'white',
        fontSize: 18,
        paddingTop:8
    },
    buttonSelectText: {
        textAlign: 'center',
        color :'white',
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop:8
    }
})