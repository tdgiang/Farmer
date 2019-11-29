import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Right ,Left} from 'native-base';
export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Container>
        <Content>
       
          <Card>
            <CardItem >
              <Left>
                  <Text>ID:</Text>
              </Left>
              <Right> 
                    <Text>123</Text>
              </Right>
            </CardItem>
            <CardItem>
            <Left>
                  <Text>Thời Gian:</Text>
              </Left>
              <Right> 
                    <Text>10/11/2019</Text>
              </Right>
            </CardItem>
            <CardItem footer>
            <Left>
                  <Text>Trạng thái:</Text>
              </Left>
              <Right> 
                    <Text>Xuất</Text>
              </Right>
            </CardItem>
         </Card>

         <Card>
            <CardItem >
              <Left>
                  <Text>ID:</Text>
              </Left>
              <Right> 
                    <Text>123</Text>
              </Right>
            </CardItem>
            <CardItem>
            <Left>
                  <Text>Thời Gian:</Text>
              </Left>
              <Right> 
                    <Text>10/11/2019</Text>
              </Right>
            </CardItem>
            <CardItem footer>
            <Left>
                  <Text>Trạng thái:</Text>
              </Left>
              <Right> 
                    <Text>Nhập</Text>
              </Right>
            </CardItem>
         </Card>

         <Card>
            <CardItem >
              <Left>
                  <Text>ID:</Text>
              </Left>
              <Right> 
                    <Text>123</Text>
              </Right>
            </CardItem>
            <CardItem>
            <Left>
                  <Text>Thời Gian:</Text>
              </Left>
              <Right> 
                    <Text>10/11/2019</Text>
              </Right>
            </CardItem>
            <CardItem footer>
            <Left>
                  <Text>Trạng thái:</Text>
              </Left>
              <Right> 
                    <Text>Nhập</Text>
              </Right>
            </CardItem>
         </Card>

         <Card>
            <CardItem >
              <Left>
                  <Text>ID:</Text>
              </Left>
              <Right> 
                    <Text>123</Text>
              </Right>
            </CardItem>
            <CardItem>
            <Left>
                  <Text>Thời Gian:</Text>
              </Left>
              <Right> 
                    <Text>10/11/2019</Text>
              </Right>
            </CardItem>
            <CardItem footer>
            <Left>
                  <Text>Trạng thái:</Text>
              </Left>
              <Right> 
                    <Text>Xuất</Text>
              </Right>
            </CardItem>
         </Card>

    
         
        </Content>
      </Container>
    );
  }
}