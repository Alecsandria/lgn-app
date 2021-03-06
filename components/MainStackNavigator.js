import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Landing from './../screens/Landing';
import Locations from './../screens/Locations';
import MapScreen from './../screens/MapScreen';
import Bookings from './../screens/Bookings';
import Payments from './../screens/Payments';
import NewLocationCard from './NewLocationCard';
import HomeScreen from '../screens/HomeScreen';
import DrawerNaviagtion from './DrawerNaviagtion';
import Authentication from './../screens/Authentication';
import Confirmation from './../screens/Confirmation';
import List from './List';
import Sidebar from './Sidebar';

const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Landing"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="Bookings" component={Bookings} />
      <Stack.Screen name="Payments" component={Payments} />
      <Stack.Screen name="NewLocation" component={NewLocationCard} />
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="List" component={List} />

      <Stack.Screen
        name="HomeScreen"
        component={DrawerNaviagtion}
        navigationOptions={{
          headerLeft: null,
        }}
      />
      <Stack.Screen name="Locations" component={Locations} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
