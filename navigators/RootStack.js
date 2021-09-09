import React from 'react';
import { KeyboardAvoidingView, Platform  } from 'react-native';
import { Colors } from './../components/styles';
const { primary, tertiary } = Colors;
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Landing from './../screens/Landing';
import Locations from './../screens/Locations';
import MapScreen from './../screens/MapScreen';

const Stack = createNativeStackNavigator();

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
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
        initialRouteName="Landing"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            // headerTintColor: tertiary,
            // headerTransparent: true,
            // headerTitle: 'My Locations',
            // headerLeftContainerStyle: {
            //   paddingLeft: 10,
            // },
          }}
          name="Locations"
          component={Locations}
        />
        <Stack.Screen name="MapScreen" component={MapScreen}
        />
        
      </Stack.Navigator>
      
      </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default RootStack;
