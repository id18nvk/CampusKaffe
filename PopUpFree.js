import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image, Pressable, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Modal from "react-native-modalbox";
import direction from './assets/direction.png';
import dollar from './assets/dollar.png';
import milk from './assets/milk.png';
import godis from './assets/godis.png';
import varning from './assets/varning.png';

const {width, height } = Dimensions.get("window");

export default function PopUpFree() {

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

            <Text style={styles.textStyle}>Unionen</Text>

            <View style={styles.flexBox2}>
              <Image style={styles.image} source={varning} style={{width: 19, height: 18 }}/>
              <View style={{ width: 5, backgroundColor: '#F5EEDC' }}/>
              <Text style={styles.textStyle2}>Rapporterat stängt 11:30</Text>
            </View>

            <View style={styles.flexBox}>
              <Image style={styles.image} source={godis} style={{width: 37, height: 30 }}/>
              <View style={{ width: 20, backgroundColor: '#F5EEDC' }}/>
              <Image style={styles.image} source={milk} style={{width: 30, height: 35 }}/>
              
            </View>

            <View style={styles.flexBox}>
              <Text style={styles.textStyle4}>Teknikhuset, Plan 1, Sal 103 </Text>
              <Image source={direction} style={{width: 39, height: 39 }}/>
            </View>

            <Text style={styles.textStyle5}>Delas det fortfarande ut kaffe här? </Text>

            <View style={styles.flexBox}>
              <TouchableOpacity style={styles.buttonSecondary} >
                <Text style={styles.text}>NEJ</Text>
              </TouchableOpacity>
              <View style={{ width: 25, backgroundColor: '#F5EEDC' }}/>
              <TouchableOpacity style={styles.buttonPrimary} >
                <Text style={styles.text}>JA</Text>
              </TouchableOpacity>
              
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
    height: 460,
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
  textStyle5: {
    fontSize: 17,
    color: '#F5EEDC',
    paddingTop: 50,
  },
  flexBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  flexBox2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
  },
  hairline: {
    backgroundColor: '#F5EEDC',
    height: 3,
    width: 80,
    paddingTop: 0,
    borderRadius: 5,
  },
  buttonSecondary: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 19,
    paddingHorizontal: 65,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#F5EEDC',
  },
  buttonPrimary: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 19,
    paddingHorizontal: 65,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#CA9D7C',
    
  },
  text: {
    fontSize: 13,
   
    letterSpacing: 0.25,
    color: '#363636',
  },
  
});