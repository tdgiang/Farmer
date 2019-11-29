import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
export default class TabsExample extends Component {

  render() {
    return (
      <Container >
        <Tabs   >
          <Tab   heading="Kho">
            <Tab1 />
          </Tab>
          <Tab heading="Nhập xuất">
            <Tab2 />
          </Tab>
          <Tab heading="Lịch sử">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}