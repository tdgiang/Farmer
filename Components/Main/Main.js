import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Image ,Button} from 'react-native';
import Drawer from 'react-native-drawer';

import Into from './Into';
import Menu from './Menu';


export default class Main extends Component {
    
    closeControlPanel = () => {
        this.drawer.close()
    };
    openControlPanel = () => {
        this.drawer.open()
    };
    componentWillMount() {
        this.props.navigation.setParams({ openControlPanel: this.openControlPanel });
      }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#3E8914',
              },
            headerRight: () => (
                <View style={{
                    flex:1,
                    marginRight:20
                }}>
                <TouchableOpacity onPress={navigation.getParam('openControlPanel')}>
                        <Image style={{
                            height:40,
                            width:50,
                        }} source={require('../../images/menu.png')} />
                </TouchableOpacity>
            </View>

            ),

        };
      };

    render() {

        return (
            <Drawer
                ref={(ref) => this.drawer = ref}
                content={<Menu navigation={this.props.navigation} />}
                tapToClose={true}
                openDrawerOffset={0.3}
            >
                <Into open={this.openControlPanel.bind(this)} />
            </Drawer>


        )
    }
}