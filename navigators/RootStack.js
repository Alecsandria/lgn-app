import React from 'react';

import {Colors} from './../components/styles';
const {primary, tertiary} = Colors;

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Landing from './../screens/Landing';
import Locations from './../screens/Locations';


const Stack = createNativeStackNavigator();


  
const RootStack = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle:{
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle:{
                        paddingLeft: 20
                    }
                }}
                initialRouteName="Landing"
                >

                <Stack.Screen  name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Landing" component={Landing} />   
                <Stack.Screen  
                    options={{
                    headerStyle:{
                    backgroundColor: ''
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: 'My Locations',
                    headerLeftContainerStyle:{
                        paddingLeft: 10
                    }

                }}name="Locations" component={Locations} />          

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;