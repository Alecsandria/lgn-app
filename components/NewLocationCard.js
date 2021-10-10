import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectOrigin, setDestination, setOrigin } from '../slices/navSlice';


const NewLocationCard  = ({navigation}) => {
    const dispatch = useDispatch();
    const origin = useSelector(selectOrigin);
    return (
        <SafeAreaView  style={tw `bg-white flex-1`}>
        <Text style={tw ` text-center py-5 text-xl`}>New Location</Text>
        <View style={tw ` border-t border-gray-200 flex-shrink`}>
        <View>
        <Text style={tw ` text-left p-0 text-lg font-semibold px-6 pt-10`}>Enter Location
</Text>

 <GooglePlacesAutocomplete

placeholder="Add Location"
styles={toInputBoxStyles}

onPress={(data, details = null) =>  {
  dispatch(setOrigin({
    location: details.geometry.location,
    description: data.description,
  }))
  dispatch(setDestination(null));
  navigation.navigate('MapScreen')
  
}}
fetchDetails={true}
returnKeyType={'search'}
enablePoweredByContainer={false} //removes "powered by google"
minLength={2}
query={{
  key: GOOGLE_MAPS_APIKEY,
  language: 'en',
}}
nearbyPlacesAPI="GooglePlacesSearch"
debounce={400}// once stopped typing will it execute a search
/>
<Text style={tw ` text-left p-0 text-lg font-semibold px-6 pt-10`}>Add Nickname
</Text>
</View>
</View>
        </SafeAreaView>
    )
}

export default NewLocationCard


const toInputBoxStyles = StyleSheet.create({
    container:{
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
    },
   
  })
  
  