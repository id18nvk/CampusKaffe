import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import PopUpShop from './PopUpShop'
import PopUpFree from './PopUpFree'
import Modal from "react-native-modalbox";
import direction from './assets/direction.png';
import dollar from './assets/dollar.png';
import milk from './assets/milk.png';
import godis from './assets/godis.png';
import varning from './assets/varning.png';
import colors from './config/colors';
import { ColorAndroid } from 'react-native/Libraries/StyleSheet/PlatformColorValueTypesAndroid';

const {width, height } = Dimensions.get("window");

export default function Map() {

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
      
        <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation = {true}
        showsMyLocationButton
        initialRegion={{
        latitude: 63.8195311,
        longitude: 20.3077981,
        latitudeDelta: 0.00015,
        longitudeDelta: 0.0020}}
        >
            
            <Marker 
            coordinate={{ latitude: 63.8195311, longitude: 20.307981}} 
            onPress={() =>  setModalVisible(true) } >
                <Image source={require('./assets/freeIcon.png')} style={{ width: 35, height: 49 }}/>
            </Marker>
            {getModal()}

            <Marker 
            coordinate={{ latitude: 63.8190311, longitude: 20.307581}} 
            onPress={() => alert("här kommer popup för köpkaffe")}>
                <Image source={require('./assets/payIcon.png')} style={{ width: 35, height: 49 }}/>
                
            </Marker>

            <View style={styles.flexbox}>
                <TouchableOpacity style={styles.coffeeButton} >
                    <Text style={styles.textCoffeeButton}>LÄGG TILL KAFFE</Text>
                </TouchableOpacity>
            </View>
        </MapView>
      
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
      bottom: 100,
      width,
      height: 500,
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
    textStyle5: {
      fontSize: 17,
      color: colors.secondaryBeige,
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
      backgroundColor: colors.secondaryBeige,
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
      backgroundColor: colors.secondaryBeige,
    },
    buttonPrimary: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 19,
      paddingHorizontal: 65,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: colors.primaryBeige,
    },
    coffeeButton: {
        position: "absolute",
        bottom: 100,
        paddingVertical: 19,
        paddingHorizontal: 5,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: colors.brown,
    },
    textCoffeeButton: {
        fontSize: 13,
      letterSpacing: 0.25,
      color: colors.secondaryBeige,
    },
    text: {
      fontSize: 13,
     
      letterSpacing: 0.25,
      color: colors.buttonTextColor,
    },
    
  });
