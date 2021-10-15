import React from 'react';
import { Component } from "react";
import { View, StyleSheet, Image } from 'react-native';

export default class LoadingPage extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('./assets/GifBack2.gif')}/>
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
    }
})