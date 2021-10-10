import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env';
import { selectOrigin, setDestination, setOrigin } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';

const PinPoint = () => {
    const dispatch = useDispatch();
    const navigation =useNavigation();
    return (
        <SafeAreaView  style={tw `bg-white flex-1`}>
            <Text style={tw ` text-center py-5 text-xl`}>Select exact location</Text>
            <View style={tw ` border-t border-gray-200 flex-shrink`}>
            <View>
            {/* <Text style={tw ` text-left p-0 text-lg font-semibold px-6 pt-10`}>Add a new Location
 </Text> */}

        </View>
        </View>
        
        </SafeAreaView>
    )
}

export default PinPoint

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingTop: 20,
        flex:0
    },
    textInput:{
        backgroundColor:'#f6f6f6',
        borderRadius:8,
        fontSize: 18,
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0
    }
})