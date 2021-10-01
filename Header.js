import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import logo from './assets/logo.png';

import colors from './config/colors';

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
        backgroundColor: colors.primaryBlue,
        alignItems: 'center',
        justifyContent: 'center'
    },
});