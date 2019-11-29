import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import cards from '../../../data/dataTin';


export default class DeckSwiperExample extends Component {
  render() {
    return (
      <Container>
        <View style={{flex:1}}>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 1}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>Giá:20.000/kg</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{height:200,flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="globe" type='FontAwesome5'  />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}