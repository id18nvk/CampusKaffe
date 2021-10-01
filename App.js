import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './Home';
import { Platform, View } from 'react-native';
import { AppLoading } from 'expo';
//import Header from './Header';
//import Footer from './Footer';
//import Alla sidor
import { navigationRef } from './RootNavigation';



const Stack = createStackNavigator();


export default function App() {
  //Lägg en if/else-sats här om något behöver laddas in
  //innan appen kan starta 
  return (
    <NavigationContainer 
      ref={navigationRef}
    >
      <Stack.Navigator 
        initialRouteName="Campuskaffe"
        headerMode="screen"
      >
        
        <Stack.Screen 
          name="Campuskaffe"
          component={Homepage}
        /*options={{
          header: () => <Header headerDisplay="Campuskaffe" />
        }}*/
        />

        {/* Lägg till listvy
        <Stack.Screen 
          name="Campuskaffe"
          component={Homepage}
        options={{
          header: () => <Header headerDisplay="Listvy" />
        }}
        />*/}

        {/* Lägg till kartvy 
        <Stack.Screen 
          name="Map"
          component={Map}
        options={{
          header: () => <Header headerDisplay="Kartvy" />
        }}
        />*/}

        {/* Lägg till "lägg till kaffe"
        <Stack.Screen 
          name="CoffeeForm"
          component={CoffeeForm}
        options={{
          header: () => <Header headerDisplay="Lägg till kaffe" />
        }}
        />*/}

      </Stack.Navigator>
     {/* <Footer />*/}
    </NavigationContainer>
  );
}


