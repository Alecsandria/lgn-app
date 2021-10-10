import React from 'react'
import { SafeAreaView, StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';

import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { Colors, StyledContainerLoc2 } from './../components/styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { setDestination, setOrigin } from '../slices/navSlice';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from "../components/NavigateCard"
import { Icon } from 'react-native-elements/dist/icons/Icon';
import HomeScreenMap from '../components/HomeScreenMap';
import NewLocationCard from '../components/NewLocationCard';
import PinPoint from '../components/PinPoint';


const MapScreen = () => {
    const Stack = createNativeStackNavigator();

    return (
        <View>
            <TouchableOpacity
    style={tw` bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full  shadow-lg`}>
    <Icon name="menu"/>
   
     
     </TouchableOpacity>
            <View style={tw `h-1/2`}>
                <Map/>
                
            </View>
            
            <View style={tw `h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                    name="PinPoint"
                    component={PinPoint}
                    options={{
                        headerShown: false,
                    }}
                    >
                    </Stack.Screen>
                    {/* <Stack.Screen
                    name="NewLocation"
                    component={NewLocationCard}
                    options={{
                        headerShown: false,
                    }}
                    >
                    </Stack.Screen> */}
                    
                    
                </Stack.Navigator> 
            </View>
           
       
        </View>

    );
};

export default MapScreen

const styles = StyleSheet.create({})