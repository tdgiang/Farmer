import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,StatusBar} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

StatusBar.setHidden(true)

import Home from './Home/Home';
import Catalogy from './Catalogy/AppCatalogy';
import Kho from './Kho/Kho';
import Setting from './Setting/Setting';



export default class Navigator extends Component{
    constructor(props){
        super(props);

        this.state={
            selectedTab:'home'
        }
    }

    render(){
        return(
        <TabNavigator tabBarStyle={{backgroundColor:'#3E8914'}}>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                
                renderIcon={() => <Image style={styles.icon} source={require('../../images/home.png')} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={require('../../images/homecolor.png')} />}
                onPress={() => this.setState({ selectedTab: 'home' })}>
                <Home />
            </TabNavigator.Item>
            
            
            <TabNavigator.Item
                selected={this.state.selectedTab === 'catalogry'}
                
                renderIcon={() => <Image style={styles.icon} source={require('../../images/maycay.png')} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={require('../../images/maycaycolor.png')} />}
                onPress={() => this.setState({ selectedTab: 'catalogry' })}>
                <Catalogy />
            </TabNavigator.Item>


            <TabNavigator.Item
                selected={this.state.selectedTab === 'storehouse'}
                
                renderIcon={() => <Image style={styles.icon} source={require('../../images/boxx.png')} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={require('../../images/boxcolor.png')} />}
                onPress={() => this.setState({ selectedTab: 'storehouse' })}>
                <Kho />
            </TabNavigator.Item>

            <TabNavigator.Item
                selected={this.state.selectedTab === 'setting'}
               
                renderIcon={() => <Image style={styles.icon} source={require('../../images/setting.png')} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={require('../../images/settingcolor.png')} />}
                onPress={() => this.setState({ selectedTab: 'setting' })}>
                <Setting />
            </TabNavigator.Item>




        </TabNavigator>

        )
    }
}




//Style 

const styles=StyleSheet.create({
    icon:{
        width:32,
        height:30
    }
})