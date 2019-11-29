import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Container, Header, Left, Body, Right, Button, Icon, Title,
    Footer, FooterTab
} from 'native-base';
import NoiDung from './body';



export default class Home extends Component {
    static navigationOptions = {
        header:null
      };
    render() {
        return (
            <Container>
                <Container>
                    <NoiDung navigation={this.props.navigation} />


                </Container>

            </Container>

        );
    }
}

