import React from 'react'
import { SafeAreaView, StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';

import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import HomeScreenMap from '../components/HomeScreenMap';

import { Colors, StyledContainerLoc2 } from './../components/styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { setDestination, setOrigin } from '../slices/navSlice';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from "../components/NavigateCard"
import { Icon } from 'react-native-elements/dist/icons/Icon';

const HomeScreen = () => {
    const Stack = createNativeStackNavigator();

    return (
        <View>
{/*             
            <TouchableOpacity 
    style={tw` bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full  shadow-lg`}>
    <Icon name="menu"/>
   
     
     </TouchableOpacity> */}
            <View style={tw `h-1/2`}>
                <HomeScreenMap/>
            </View>
            
            <View style={tw `h-1/2`}>
                <Stack.Navigator >
                    <Stack.Screen
                    name="NavigationCard"
                    component={NavigateCard}
                    options={{
                        headerShown: false,
                        
                    }}
                
                    >
                    </Stack.Screen>
                </Stack.Navigator>
            </View>
           
       
        </View>

    );
};

export default HomeScreen

const styles = StyleSheet.create({})