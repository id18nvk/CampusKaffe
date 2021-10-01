import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import * as RootNavigation from './RootNavigation';

export default function Footer() {
    return(
        <View style={styles.Footer}>
            <TouchableOpacity
            style={styles.button}
            onPress={() => RootNavigation.navigate('Campuskaffe')}
            >
                <Image source={logo} style={{width: 640, height: 140}}/>
            </TouchableOpacity>
        </View>
    );
}