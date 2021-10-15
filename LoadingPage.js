import React from 'react';
import { Component } from "react";
import { View, StyleSheet, Image } from 'react-native';
import text from './assets/textloadingpage.png'

export default class LoadingPage extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={text} style={{width: 200, resizeMode: 'contain', marginBottom: 80 }}/>
                <Image source={require('./assets/GifBack3.gif')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B555D',
        alignItems: 'center',
        justifyContent: 'center'
    },
   
})