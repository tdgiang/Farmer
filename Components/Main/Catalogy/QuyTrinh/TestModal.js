import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, Alert} from 'react-native';
import CongViec from './TestShape';
import ModalChild from './Modal';



export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>


            <ModalChild item={this.props.item}  modalVisible={this.setModalVisible.bind(this)} />



            
        </Modal>

        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <CongViec  item={this.props.item} visible={this.state.modalVisible} >
              
          </CongViec>
          
        </TouchableOpacity>
       


      </View>
    );
  }
}