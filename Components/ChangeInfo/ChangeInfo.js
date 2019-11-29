import React, { Component } from 'react';
import {Image,View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right ,Left} from 'native-base';
export default class CardListExample extends Component {
  render() {
    return (
      <Container>
        
        <Content>
          <Card style={{marginLeft:5,marginRight:5}}>
            <CardItem style={{borderBottomColor:'gray',borderBottomWidth:1}}>
              
                  <Image source={require('../../images/address.png')} />
                  
              <Right>
                <Text>66 Trâu Quỳ,Gia Lâm,Hà Nội</Text>
              </Right>
             </CardItem>

             <CardItem style={{borderBottomColor:'gray',borderBottomWidth:1}} >
             <Image source={require('../../images/phone.png')} />
              <Right>
                <Text>0866912436</Text>
              </Right>
             </CardItem>

             <CardItem style={{borderBottomColor:'gray',borderBottomWidth:1}}>
             <Image source={require('../../images/gmail.png')} />
              <Right>
                <Text>tdgiangdev@gmail.com</Text>
              </Right>
             </CardItem>

             <CardItem style={{borderBottomColor:'gray',borderBottomWidth:1}}>
             <Image source={require('../../images/facebook.png')} />
              <Right>
                <Text> https://www.facebook.com </Text>
              </Right>
             </CardItem>

             
           </Card>

        </Content>
      </Container>
    );
  }
}