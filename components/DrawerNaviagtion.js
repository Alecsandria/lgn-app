import React from 'react';
import Signup from '../screens/Signup';
import Locations from '../screens/Locations';
import HomeScreen from '../screens/HomeScreen';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Bookings from './../screens/Bookings';
import Payments from './../screens/Payments';
import Sidebar from './Sidebar';
import{createDrawerNavigator} from '@react-navigation/drawer';

import tw from 'tailwind-react-native-classnames';
import { NavigationContainer } from '@react-navigation/native';
const Drawer =  createDrawerNavigator();



const DrawerNaviagtion = () => {
  return(
    <Drawer.Navigator drawerContent={props => <Sidebar {...props} />}
    screenOptions={{
      }}>
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
              <Icon name="location-pin" style={{fontSize: size, color: color }} />
          )
      }}>
          
          
      </Drawer.Screen>
      <Drawer.Screen
      name="Bookings"
      component={Bookings}
      options={{
          drawerIcon:({focused, color , size}) => (
              <Icon name="book" style={{fontSize: size, color: color }} />
          )
      }}>
          
      </Drawer.Screen>
      <Drawer.Screen
      name="Payments"
      component={Payments}
      options={{
          drawerIcon:({focused, color , size}) => (
              <Icon name="payment" style={{fontSize: size, color: color }} />
          )
      }}>
          
      </Drawer.Screen>
    
      </Drawer.Navigator>
  )
}

export default DrawerNaviagtion;
