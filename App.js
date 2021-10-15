import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './Home';
import Map from './Map';
import ListView from './ListView';
import { MaterialIcons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import Header from './Header';
import HeaderBlank from './HeaderBlank';
import { Platform, useColorScheme, View, SafeAreaView, StyleSheet, Text} from 'react-native';
//import Alla sidor
import { navigationRef } from './RootNavigation';
import colors from './config/colors';
import PopUpShop from './PopUpShop';
import PopUpFree from './PopUpFree';
import CoffeeForm from './CoffeeForm';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Guide from './Guide';
import LoadingPage from './LoadingPage';
import { useState, useEffect } from 'react'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator 
      screenOptions={{ headerShown: false,  }} 
      tabBarOptions={{
        showLabel: false, 
        activeTintColor: colors.secondaryBeige,
        activeBackgroundColor: colors.primaryBlue,
        inactiveTintColor: colors.primaryBlue,
        inactiveBackgroundColor: colors.secondaryBeige}}>

      <Tab.Screen name="Map" component={Map} options={{
        tabBarIcon: ({focused}) =>(
          <View>
            <MaterialIcons name='map' size={30} style={{ color: focused ? colors.secondaryBeige : colors.primaryBlue }} />
          </View>
        ),
      }}/>

      {/*OBS ÄNDRA TILL LISTA HÄR*/}
      <Tab.Screen name="ListView" component={ListView} options={{
        tabBarIcon: ({focused}) =>(
          <View>
            <MaterialIcons name='list' size={30} style={{ color: focused ? colors.secondaryBeige : colors.primaryBlue }} />
          </View>
        ),
      }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  if (!loading){
    return (
      <NavigationContainer 
        ref={navigationRef}
      >
        <Stack.Navigator 
          initialRouteName="Guide"
          headerMode="float"
        >
          <Stack.Screen 
            name="Guide"
            component={Guide}
          options={{
            header: () => <HeaderBlank headerDisplay="Guide" />
          }}
          />
  
          <Stack.Screen 
            name="Campuskaffe"
            component={Home}
          options={{
            header: () => <Header headerDisplay="Campuskaffe" />
          }}
          />
  
          <Stack.Screen 
            name="Home"
            component={Home}
          />
          <Stack.Screen 
            name="PopUpShop"
            component={PopUpShop}
          options={{
            header: () => <Header headerDisplay="PopUpShop" />
          }}
        />
          
          <Stack.Screen 
            name="PopUpFree"
            component={PopUpFree}
          options={{
            header: () => <Header headerDisplay="PopUpShop" />
          }}
          />
  
          
          <Stack.Screen 
            name="CoffeeForm"
            component={CoffeeForm}
          options={{
            header: () => <Header headerDisplay="Lägg till kaffe" />
          }}
          />
  
          <Stack.Screen 
            name="ListView"
            component={ListView}
          />
  
          <Stack.Screen 
            name="LoadingPage"
            component={LoadingPage}
            options={{
              header: () => <Header/>
            }}
          />
  
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  else{
    return(<LoadingPage />);
  }
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBlue,
  },
});


