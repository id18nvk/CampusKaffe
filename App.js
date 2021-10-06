import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Homepage from './Home';
import Map from './Map';

import { Platform, useColorScheme, View } from 'react-native';
import { AppLoading } from 'expo';
import Header from './Header';

//import Alla sidor
import { navigationRef } from './RootNavigation';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import colors from './config/colors';
import PopUpShop from './PopUpShop';
import PopUpFree from './PopUpFree';
import CoffeeForm from './CoffeeForm';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator 
      screenOptions={{ headerShown: false,  }} 
      tabBarOptions={{
        showLabel: false, 
        activeTintColor: colors.primaryBeige,
        activeBackgroundColor: colors.primaryBlue,
        inactiveTintColor: colors.primaryBlue,
        inactiveBackgroundColor: colors.primaryBeige}}>

      <Tab.Screen name="Map" component={Map} options={{
        tabBarIcon: ({focused}) =>(
          <View>
            <MaterialIcons name='map' size={30} style={{ color: focused ? colors.primaryBeige : colors.primaryBlue }} />
          </View>
        ),
      }}/>

      {/*OBS ÄNDRA TILL LISTA HÄR*/}
      <Tab.Screen name="PopUpShop" component={PopUpShop} options={{
        tabBarIcon: ({focused}) =>(
          <View>
            <MaterialIcons name='list' size={30} style={{ color: focused ? colors.primaryBeige : colors.primaryBlue }} />
          </View>
        ),
      }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  //Lägg en if/else-sats här om något behöver laddas in
  //innan appen kan starta 
  return (
    <NavigationContainer 
      ref={navigationRef}
    >
      <Stack.Navigator 
        initialRouteName="Home"
        headerMode="float"
      >

        <Stack.Screen 
          name="Home"
          component={Home}
          options={{
            header: () => <Header headerDisplay="Campuskaffe" />
          }}
        />
        {/*<Stack.Screen 
          name="PopUpShop"
          component={PopUpShop}
        options={{
          header: () => <Header headerDisplay="PopUpShop" />
        }}
      />*/}
        
        <Stack.Screen 
          name="PopUpFree"
          component={PopUpFree}
        />

        {/* Lägg till "lägg till kaffe"
        <Stack.Screen 
          name="CoffeeForm"
          component={CoffeeForm}
        options={{
          header: () => <Header headerDisplay="Lägg till kaffe" />
        }}
        />*/}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
