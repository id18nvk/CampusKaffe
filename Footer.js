import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as RootNavigation from './RootNavigation';

import colors from './config/colors';


export default function Footer() {
    return (
    <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => RootNavigation.navigate('CampusKaffe')}>
            <Text>Hej</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text>Då</Text>
        </TouchableOpacity>

    </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    button: {
        padding: 20
    }
});
