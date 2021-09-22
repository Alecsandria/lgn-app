import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env';
import { selectOrigin, setDestination, setOrigin } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation =useNavigation();
    return (
        <SafeAreaView  style={tw `bg-white flex-1`}>
            <Text style={tw ` text-center py-5 text-xl`}>Where would you like to book your appointment?</Text>
            <View style={tw ` border-t border-gray-200 flex-shrink`}>
            <View>
            <Text style={tw ` text-left p-0 text-lg font-semibold px-6 pt-10`}>Add a new Location
 </Text>
<GooglePlacesAutocomplete 
placeholder="Location"
styles={toInputBoxStyles}
fetchDetails= {true}
returnKeyType={"search"}
minLength={2}
onPress={(data, details = null) =>  {
    dispatch
    (setDestination({
        location: details.geometry.location,
        description: data.description,
    })
    );
    navigation.navigate('NewLocation')
  
  }}
enablePoweredByContainer={false}
nearbyPlacesAPI="GooglePlacesSearch"
query={{
    key: GOOGLE_MAPS_APIKEY,
    language: 'en',
  }}
debounce={400}
/>
        </View>
            <NavFavourites/>
        </View>
        
        </SafeAreaView>
    )
}

export default NavigateCard

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
