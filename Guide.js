/*import { View, StyleSheet, Text } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import React from 'react';  
import colors from './config/colors';

export default function Guide () {

    return (
        <Swipeable>
            <View style={styles.container }>
                <Text>
                    Hejhej
                </Text>

            </View>
        </Swipeable>

    );

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryBlue,
        alignItems: "center",
        justifyContent: "center"
    },

});*/

import React, { Component } from 'react'
import { AppRegistry, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import colors from './config/colors';
import Swiper from 'react-native-swiper'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import color from 'color';
import logo from './assets/startlogga.png';
import Map from './Map';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryBlue
  },
  slide2: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryBlue
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
    marginLeft: 38,
    marginRight: 38,
    lineHeight: 40,
    top: 60
  },
  buttonText: {
    fontSize: 13,
    letterSpacing: 0.25,
    color: colors.buttonTextColor,
    fontWeight: "600"
    
  },
  buttonPrimary: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 19,
    paddingHorizontal: 65,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: colors.primaryBeige,
    marginTop: 100
  },
  dot: {
      backgroundColor: colors.primaryBlue,
      borderColor: colors.secondaryBeige,
      borderWidth: 1,
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 10
  },
  activeDot: {
      backgroundColor: colors.secondaryBeige,
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 10
  },
  logo: {
      width: 250,
      resizeMode: 'contain',
      alignSelf: 'center',
      top: 67
  }
})

export default class Guide extends Component {
  render() {
    return (
      <Swiper 
      style={styles.wrapper}   
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      loop={false} 
      showsButtons={false}>

        <View style={styles.slide1}>
        <Image source={logo} style={styles.logo}/>
          <Text style={styles.text}>I appen kan du få tips och tipsa andra om var och när det bjuds på kaffe på Campus. </Text>
        </View>

        <View style={styles.slide2}>
        <Image source={logo} style={styles.logo}/>
          <Text style={styles.text}>Självklart kan du även se var kaffe finns att köpa om plånboken tillåter.</Text>
          <TouchableOpacity 
          style={styles.buttonPrimary}
          onPress={() => this.props.navigation.navigate('Campuskaffe')} >
          <Text style={styles.buttonText}>TILL APPEN</Text>
        </TouchableOpacity>
        </View>
        
      </Swiper>
    )
  }
}

AppRegistry.registerComponent('myproject', () => Guide)