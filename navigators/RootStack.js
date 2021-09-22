import React from 'react';
import { KeyboardAvoidingView, Platform  } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from '../components/MainStackNavigator';


const RootStack = () => {
  return (
    <NavigationContainer>
        <SafeAreaProvider>
<KeyboardAvoidingView 
behavior={Platform.OS === "ios" ? "padding" : "height"}
style={{flex:1}}
> 
     <MainStackNavigator/>
 
      </KeyboardAvoidingView>
      </SafeAreaProvider>
      
    </NavigationContainer>

  );
};


export default RootStack;

