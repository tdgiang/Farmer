import React, { Component } from 'react';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
export default class CheckBoxExample extends Component {
  render() {
    return (
      <Container>
      
  
            <CheckBox checked={false} color="green"/>
  </Container>
    );
  }
}