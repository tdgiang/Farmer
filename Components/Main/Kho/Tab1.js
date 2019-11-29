import React, { Component } from 'react';
import { Text,ScroolView } from 'react-native'
import { Container, Header, Content, Card, CardItem, Icon, Right, Left } from 'native-base';
export default class CardListExample extends Component {
    render() {
        return (
            <Container>
                
                <Content style={{ margin: 5 }}>
               
                <Card>
                        <CardItem bordered >
                            <Text style={{
                                fontWeight: 'bold',
                                color: 'red',
                                fontSize: 18
                            }}>Hạt Giống</Text>

                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>Cà chua bi</Text>
                            </Left>
                            <Right>
                                <Text>2</Text>
                            </Right>
                        </CardItem>

                        <CardItem>
                            <Left><Text>Ngô nếp </Text></Left>

                            <Right>
                                <Text>3</Text>
                            </Right>
                        </CardItem>

                        <CardItem>
                            <Left><Text>Thóc </Text></Left>

                            <Right>

                                <Text> 20</Text>
                            </Right>
                        </CardItem>

                        <CardItem>
                            <Left><Text>Cải ngọt </Text></Left>

                            <Right>
                                <Text>10</Text>
                            </Right>
                        </CardItem>



                    </Card>



                    <Card>
                        <CardItem bordered >
                            <Text style={{
                                fontWeight: 'bold',
                                color: 'red',
                                fontSize: 18
                            }}>Phân bón</Text>

                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>Phân NPK</Text>
                            </Left>
                            <Right>
                                <Text>20</Text>
                            </Right>
                        </CardItem>

                        <CardItem>
                            <Left><Text>Phân bón lá </Text></Left>

                            <Right>
                                <Text>10</Text>
                            </Right>
                        </CardItem>

                        <CardItem>
                            <Left><Text>Phân NPK</Text></Left>

                            <Right>

                                <Text> 20</Text>
                            </Right>
                        </CardItem>

                        <CardItem>
                            <Left><Text>Phân bón lá </Text></Left>

                            <Right>
                                <Text>10</Text>
                            </Right>
                        </CardItem>



                    </Card>

                    <Card>
                        <CardItem bordered >
                            <Text style={{
                                fontWeight: 'bold',
                                color: 'red',
                                fontSize: 18
                            }}>Thuốc trừ sâu</Text>

                        </CardItem>
                        <CardItem>
                            <Left><Text>Thuốc bón lá </Text></Left>

                            <Right>
                                <Text>20</Text>
                            </Right>
                        </CardItem>

                        <CardItem>
                            <Left><Text>Trừ sâu đục thân </Text></Left>

                            <Right>
                                <Text>10</Text>
                            </Right>
                        </CardItem>

                        <CardItem>
                            <Left><Text>Thuốc trừ cỏ</Text></Left>

                            <Right>
                                <Text> 20</Text>
                            </Right>
                        </CardItem>

                        <CardItem>
                            <Left><Text>Phân bón lá </Text></Left>

                            <Right>
                                <Text>10</Text>
                            </Right>
                        </CardItem>



                    </Card>


                   

                </Content>
               
            </Container>
        );
    }
}