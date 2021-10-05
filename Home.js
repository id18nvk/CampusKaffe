import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'


export default function Homepage() {
    return (
      
            <MapView
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            initialRegion={{
            latitude: 63.8195311,
            longitude: 20.3077981,
            latitudeDelta: 0.00015,
            longitudeDelta: 0.0020}}
            />
   
      
    );
}


