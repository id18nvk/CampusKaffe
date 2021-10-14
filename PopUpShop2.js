import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image, Pressable, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Modal from "react-native-modalbox";
import direction from './assets/direction.png';
import dollar from './assets/dollar.png';
import colors from './config/colors';
import { color } from 'react-native-reanimated';

const {width, height } = Dimensions.get("window");

const PopUpShop2 = ({ show, close }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const company = 
    {
      name: 'Unionen',

    }

  return (
    <Modal
    entry="bottom"
    backdropPressToClose={true}
    isOpen={show}
    style={styles.modalBox}
    onClosed={() => setModalVisible(false)}
  >
   <View style={styles.content}>
            
            <View style={{ height: 5, backgroundColor: '#F5EEDC' }}/>
            <View style={styles.hairline} />

            {/*<Button
              title="till kartan"
              onPress={() => navigation.goBack()
              }
            />*/}

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
  )};

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
      bottom: 100,
      width,
      height: 300,
      borderTopLeftRadius: 20,
      justifyContent: "flex-start",
      alignItems: "center",
      borderTopRightRadius: 20,
      backgroundColor: colors.primaryBlue
    },
    textStyle: {
      fontSize: 20,
      color: colors.primaryBeige,
      padding: 10,
      fontWeight: 'bold'
    },
    textStyle2: {
      fontSize: 15,
      color: colors.secondaryBeige,
      padding: 0,
     
    },
    textStyle4: {
      fontSize: 17,
      color: colors.secondaryBeige,
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
      backgroundColor: colors.secondaryBeige,
      height: 3,
      width: 80,
      paddingTop: 0,
      borderRadius: 5,
    },
    
  });
  
export default PopUpShop2;