import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Modal from "react-native-modalbox";


const {width, height } = Dimensions.get("window");

export default function PopUpShop() {

  const [modalVisible, setModalVisible] = useState(false);

  const getModal = () =>{
      return (
        <Modal
          entry="bottom"
          backdropPressToClose={true}
          isOpen={modalVisible}
          style={styles.modalBox}
          onClosed={() => setModalVisible(false)}
        >
          <View style={styles.content}>
            <Text style={styles.textStyle}>Kårfiket Mitum</Text>
          </View>
        </Modal>
      );
  };


  return (
    <View style={styles.container}>
      <Button title="Press Me!" onPress={() => setModalVisible(true)} />
      {getModal()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
  modalBox: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    height,
    width,
    backgroundColor: "transparent"
  },
  content: {
    position: "absolute",
    bottom: 0,
    width,
    height: 400,
    borderTopLeftRadius: 20,
    justifyContent: "top",
    alignItems: "center",
    borderTopRightRadius: 20,
    backgroundColor: "#3B555D"
  },
  textStyle: {
    fontSize: 20,
    color: '#CA9D7C',
    padding: 10,
    fontWeight: 'bold'
  }
});