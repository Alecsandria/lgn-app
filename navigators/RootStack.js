import React from 'react';
import { KeyboardAvoidingView, Platform  } from 'react-native';
import { Colors } from './../components/styles';
const { primary, tertiary } = Colors;
import { SafeAreaProvider } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Landing from './../screens/Landing';
import Locations from './../screens/Locations';
import MapScreen from './../screens/MapScreen';
import HomeScreen from '../screens/HomeScreen';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Sidebar
 from '../components/Sidebar';
import{createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Drawer =  createDrawerNavigator();



const DrawerRoutes = () => {
  return(
    <Drawer.Navigator drawerContent={props => <Sidebar {...props} />}
    // style={tw` bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full  shadow-lg`}
    >
    
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{
          drawerIcon:({focused, color , size}) => (
              <Icon name="home" style={{fontSize: size, color: color }} />
          )
      }}>
      </Drawer.Screen>
      <Drawer.Screen
      name="Locations"
      component={Locations}
      options={{
          drawerIcon:({focused, color , size}) => (
              <Icon name="home" style={{fontSize: size, color: color }} />
          )
      }}>
          
      </Drawer.Screen>
      <Drawer.Screen
      name="Signup"
      component={Signup}
      options={{
          drawerIcon:({focused, color , size}) => (
              <Icon name="home" style={{fontSize: size, color: color }} />
          )
      }}>
          
      </Drawer.Screen>
      </Drawer.Navigator>
  )
}

const RootStack = () => {
  return (
    <NavigationContainer>
        <SafeAreaProvider>
<KeyboardAvoidingView 
behavior={Platform.OS === "ios" ? "padding" : "height"}
style={{flex:1}}
> 
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: '',
     

        
        }}
        initialRouteName="Landing"
      >
        <Stack.Screen name="Login" component={Login}
         />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="MapScreen" component={MapScreen}/>
        <Stack.Screen name="HomeScreen" component={DrawerRoutes}
        navigationOptions={ {
          headerLeft: null,
               
        }} />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: tertiary,
            headerTransparent: true,
            headerTitle: 'My Locations',
          }}
          name="Locations"
          component={Locations}
        />
      
        
      </Stack.Navigator>
 
      </KeyboardAvoidingView>
      </SafeAreaProvider>
      
    </NavigationContainer>

     
  );
};


export default RootStack;

