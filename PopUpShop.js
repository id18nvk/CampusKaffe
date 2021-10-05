import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import Modal from "react-native-modalbox";
import direction from './assets/direction.png';
import dollar from './assets/dollar.png';


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
            
            <View style={{ height: 5, backgroundColor: '#F5EEDC' }}/>
            <View style={styles.hairline} />

            <Text style={styles.textStyle}>Kårfiket Mitum</Text>
            <Text style={styles.textStyle2}>ÖPPET - Stänger 14:30</Text>
            
            <View style={styles.flexBox}>
              <Image style={styles.image} source={dollar} style={{width: 13, height: 13 }}/>
              <Text style={styles.textStyle4}>Kaffe från 12 kr</Text>
            </View>

            <View style={styles.flexBox}>
              <Text style={styles.textStyle4}>Teknikhuset, Plan 1, Sal 103 </Text>
              <Image style={styles.image} source={direction} style={{width: 39, height: 39 }}/>
            </View>
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
    height: 330,
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
    fontSize: 15,
    color: '#F5EEDC',
    padding: 0,
   
  },
  textStyle4: {
    fontSize: 17,
    color: '#F5EEDC',
    padding: 5,
  },
  flexBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  hairline: {
    backgroundColor: '#F5EEDC',
    height: 3,
    width: 80,
    paddingTop: 0,
    borderRadius: 5,
  },
  
});