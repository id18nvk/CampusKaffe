import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import PopUpShop from './PopUpShop'


export default function Map() {
    return (
      
        <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
        initialRegion={{
        latitude: 63.8195311,
        longitude: 20.3077981,
        latitudeDelta: 0.00015,
        longitudeDelta: 0.0020}}
        >
            <Marker 
            coordinate={{ latitude: 63.8195311, longitude: 20.307981}} 
            onPress={() => alert("här kommer popup för gratiskaffe")}>
                <Image source={require('./assets/freeIcon.png')} style={{ width: 35, height: 49 }}/>
                
            </Marker>

            <Marker 
            coordinate={{ latitude: 63.8190311, longitude: 20.307581}} 
            onPress={() => alert("här kommer popup för köpkaffe")}>
                <Image source={require('./assets/payIcon.png')} style={{ width: 35, height: 49 }}/>
                
            </Marker>
            
        </MapView>
   
      
    );
}


