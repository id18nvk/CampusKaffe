import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import logo from './assets/logo.png';

import colors from './config/colors';

export default function Header(){
    return(
        <SafeAreaView style={styles.header}>
            <Image source={logo} style={{width: 160, height: 35, resizeMode: 'contain'}}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: colors.primaryBlue,
        alignItems: 'center',
        justifyContent: 'center'
    },
});