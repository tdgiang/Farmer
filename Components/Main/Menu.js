import React, { Component } from 'react';
import { View, Text, TouchableOpacity ,StyleSheet,Image} from 'react-native';



export default class Menu extends Component {
    constructor(props) {
        super(props);
    }



    gotoAuthentication() {
        this.props.navigation.push('Authentication')
    }
    gotoFeedBack() {
        this.props.navigation.push('FeedBack')
    }
    gotoOrderChangeInfo() {
        this.props.navigation.push('ChangeInfo')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:3}}>
                    <View style={styles.BoxImg}>
                        <Image style={styles.img} source={require('../../images/anhGai.jpg')} />
                    </View>

                    <View style={styles.BoxName}>
                            <Text style={styles.name}>Cần Thị Cù</Text>
                    </View>

                </View>

                <View style={{flex:4}}>
                    <View >
                        <TouchableOpacity style={styles.item} onPress={() => this.gotoOrderChangeInfo() }>
                            <Text style={styles.txt}>Thông tin cá nhân</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={() => this.gotoFeedBack()}>
                            <Text style={styles.txt}>Phải hồi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={() => this.gotoAuthentication()}>
                            <Text style={styles.txt}>Đăng Xuất</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>


        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#3E8914'
    },
    item:{
        backgroundColor:'white',
        margin:15,
        height:50,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    txt:{
        color:'#3E8914',
        fontSize:20,
        fontWeight:'bold'

    },
    img:{
        height:180,
        width:180,
        borderRadius:90

    },
    BoxImg:{
        flex:5,
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center'

    },
    name:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'

    },
    BoxName:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    }
}
)