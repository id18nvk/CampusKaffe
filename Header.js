import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import logo from './assets/logo.png';

export default function Header(){
    return(
        <View style={styles.header}>
            <Image source={logo} style={{width: 160, height: 35, resizeMode: 'contain'}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        backgroundColor: '#3B555D',
        alignItems: 'center',
        justifyContent: 'center'
    },
});