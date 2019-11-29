import React,{Component} from 'react';
import {StyleSheet} from 'react-native';
import { Container, Text,Header, Left, Body, Right, Button, Icon, Title,
     Footer, FooterTab } from 'native-base';

import TestDeck from './Deck';


export default class Home extends Component{
    render(){
        return(
        <Container>
            <Container>
                <Text>This is Home</Text>
               <TestDeck />
            </Container>            

        </Container>

        );
    }
}

