import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import Modal from "react-native-modalbox";
import direction from './assets/direction.png';


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
            <Text style={styles.textStyle2}>ÖPPET - Stänger 14:30</Text>
            <Text style={styles.textStyle3}>Kaffe från 12 kr</Text>
            <Text style={styles.textStyle3}>Teknikhuset, Plan 1, Sal 103 </Text>
            <Image style={styles.imageStyle} source={direction} style={{width: 39, height: 39 }}/>
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
    bottom: 80,
    width,
    height: 400,
    borderTopLeftRadius: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    borderTopRightRadius: 20,
    backgroundColor: "#3B555D"
  },
  textStyle: {
    fontSize: 20,
    color: '#CA9D7C',
    padding: 10,
    fontWeight: 'bold'
  },
  textStyle2: {
    fontSize: 17,
    color: '#F5EEDC',
    padding: 10,
   
  },
  textStyle3: {
    fontSize: 17,
    color: '#F5EEDC',
    padding: 30,
    
  },
  imageStyle: {
    float: 'right',
  }
});