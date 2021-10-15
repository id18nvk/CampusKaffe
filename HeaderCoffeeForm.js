import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import logo from './assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons';

import colors from './config/colors';

export default function HeaderCoffeeForm({ navigation }){
        if (Platform.OS === 'android') {
            return(            
                <View style={styles.header}>
                    <TouchableOpacity style={styles.exit}
                onPress={() => { navigation.navigate('Map')}} >
                    <MaterialIcons name='close' size={30} style={{ color: colors.primaryBeige}} />
                </TouchableOpacity>
                    
                </View>);
        } else {
            return(
                <SafeAreaView style={styles.header}>
                     <TouchableOpacity style={styles.exit}
                onPress={() => { navigation.navigate('Map')}} >
                    <MaterialIcons name='close' size={30} style={{ color: colors.primaryBeige}} />
                </TouchableOpacity>
                   
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
    exit: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
      },
});