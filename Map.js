import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Modal from "react-native-modalbox";
import colors from './config/colors';
import { ColorAndroid } from 'react-native/Libraries/StyleSheet/PlatformColorValueTypesAndroid';
import PopUpFree2 from './PopUpFree2';
import PopUpShop2 from './PopUpShop2';

const {width, height } = Dimensions.get("window");

export default function Map({ navigation }) {

    //const [modalVisible, setModalVisible] = useState(false);

    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);

    const [modal2, setModal2] = useState(false);
    const Toggle2 = () => setModal2(!modal2);

    return (
      
        <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation = {true}
        showsMyLocationButton
        initialRegion={{
        latitude: 63.8195311,
        longitude: 20.3077981,
        latitudeDelta: 0.00015,
        longitudeDelta: 0.0020}}
        >
            
            {/*<Marker 
            coordinate={{ latitude: 63.8195311, longitude: 20.307981}} 
            onPress={() =>  setModalVisible(true) } >
                <Image source={require('./assets/freeIcon.png')} style={{ width: 35, height: 49 }}/>
            </Marker>
            {getModal()}*/}

            <Marker 
            coordinate={{ latitude: 63.8195311, longitude: 20.307981}} 
            onPress={() =>  Toggle() } >
                <Image source={require('./assets/freeIcon.png')} style={{ width: 35, height: 49 }}/>
            </Marker>

            <PopUpFree2 show={modal} close={Toggle}/>

            {/*<Marker 
            coordinate={{ latitude: 63.8190311, longitude: 20.307581}} 
            onPress={() => {
              navigation.navigate('PopUpShop', { 
                state: true 
              });
            }}
            >
                <Image source={require('./assets/payIcon.png')} style={{ width: 35, height: 49 }}/>
                
          </Marker>*/}

            <Marker 
            coordinate={{ latitude: 63.8190311, longitude: 20.307581}} 
            onPress={() => Toggle2() }
            >
                <Image source={require('./assets/payIcon.png')} style={{ width: 35, height: 49 }}/>
            </Marker>

            <PopUpShop2 show={modal2} close={Toggle2}/>

            <View style={styles.buttonPosition}>
                <TouchableOpacity 
                style={styles.coffeeButton}
                onPress={() => { navigation.navigate('CoffeeForm')}}  
                >
                    <Text style={styles.textCoffeeButton}>LÄGG TILL KAFFE</Text>
                </TouchableOpacity>
            </View>
  
        </MapView>
        
      
    );


}

const styles = StyleSheet.create({
    modalBox: {
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
      height,
      width,
      backgroundColor: "transparent"
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
    map: {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center"
    },
    buttonPosition: {
      display: "flex",
      alignSelf: "flex-end",
      //justifyContent: "center",
      bottom: 20,
      //top: 570
    },
    coffeeButton: {
        alignItems: "center",
        //justifyContent: "flex-end",
        //alignContent: "center",
        // FLyttar enbart knappen till mitten, ej text. alignSelf: "center",
        shadowColor: "#000000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset : { width: 0, height: 4},
        padding: 20,
        width: 200,
        paddingVertical: 19,
        paddingHorizontal: 5,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: colors.brown,
    },
    textCoffeeButton: {
      fontSize: 13,
      letterSpacing: 1.2,
      color: colors.secondaryBeige,
      fontWeight: "600"
    },
    text: {
      fontSize: 13,
      letterSpacing: 0.25,
      color: colors.buttonTextColor,
    },
    
  });
