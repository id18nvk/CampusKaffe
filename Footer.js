import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as RootNavigation from './RootNavigation';
import { Icon } from 'react-native-vector-icons';

import colors from './config/colors';


export default function Footer() {
    <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => RootNavigation.navigate('CampusKaffe')}>
            <Icon 
            name='map-outline'
            type='ionicon'/>
        </TouchableOpacity>

    </View>

}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'flex-start',

    }
});
