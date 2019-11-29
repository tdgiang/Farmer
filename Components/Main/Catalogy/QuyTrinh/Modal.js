import React,{Component} from 'react';
import {StyleSheet,ScrollView} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title,
     Footer, FooterTab } from 'native-base';
import BodyModal from './BodyModal';

export default class Modal extends Component{

    render(){
        return(
        <Container>
            <Header style={styles.styleHeader}>
            <Left>
                <Button transparent 
                        onPress={()=>{this.props.modalVisible(false)}}
                >
                <Icon name='arrow-back'  style={styles.Icons}/>
                </Button>
            </Left>
            <Body>
        <Title style={styles.txt}>{this.props.item.CongViec}</Title>
            </Body>
            <Right>
                <Button transparent>
                <Icon name='menu' style={styles.Icons} />
                </Button>
            </Right>
            </Header>
            <ScrollView>
                 <BodyModal />
            </ScrollView>

                

            
           

        </Container>

        );
    }
}

const styles=StyleSheet.create({
    txt:{
        color:'black',
        fontSize:22
    },
    styleHeader:{
        backgroundColor:'#EBF5EE',
     
    }, 
    end:{
        backgroundColor:'#EBF5EE',
       
    },
    Icons:{
        color:'black',
    }
}
)
