import React from 'react';
import {  Text, View ,FlatList,TouchableOpacity, Image, StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { StatusBar } from 'expo-status-bar';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { selectOrigin, setDestination, setOrigin } from '../slices/navSlice';
import { Colors, StyledContainerLoc,LocationContainer, AddButton } from './../components/styles';
import { SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {FontAwesome5} from '@expo/vector-icons';
import {Octicons, Ionicons, Fontisto, EvilIcons} from '@expo/vector-icons';
import NavFavourites from '../components/NavFavourites';
// import PickerPage from '../components/PickerPage';

// import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import NewLocationCard from '../components/NewLocationCard'
import {
  
  ButtonText
} from './../components/styles';
import { paddingLeft } from 'styled-system';
const { landing, primary, brand, brand2 } = Colors;

const Locations  = ({navigation}) => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);

  return (
    <SafeAreaView>
 <View style={tw `h-3/5 bg-white`}>
 <Text style={tw ` text-left p-0 text-lg font-semibold px-6 pt-10		`}>Add a Location
 </Text>
 <TouchableOpacity onPress={() => navigation.navigate('NewLocation')}>
 <Ionicons name={ 'add-circle' } size={20} style={tw ` pl-10	flex flex-row justify-between`} />
 </TouchableOpacity>
 {/* <GooglePlacesAutocomplete

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
enablePoweredByContainer={false}
minLength={2}
query={{
  key: GOOGLE_MAPS_APIKEY,
  language: 'en',
}}
nearbyPlacesAPI="GooglePlacesSearch"
debounce={400}
/> */}
         </View>
         
   <View style={tw `h-2/5 bg-white`}>
   
   <NavFavourites/>


      </View>

    </SafeAreaView>
  );
};

export default Locations;


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

