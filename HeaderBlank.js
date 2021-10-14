import React from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import logo from './assets/logo.png';

import colors from './config/colors';

export default function HeaderBlank(){
        if (Platform.OS === 'android') {
            return(            
                <View style={styles.header}>
                    
                </View>);
        } else {
            return(
                <SafeAreaView style={styles.header}>
                   
                </SafeAreaView>
            );
        }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 0,
        backgroundColor: colors.primaryBlue,

    },
});