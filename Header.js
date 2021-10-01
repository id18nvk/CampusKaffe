import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './assets/logo.png';

export default function Header(){
    return(
        <View style={styles.header}>
            <Image source={logo} style={{width: 640, height: 140}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center'
    },
});