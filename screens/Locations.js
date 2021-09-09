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
import PickerPage from '../components/PickerPage';

import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';

import {
  
  ButtonText
} from './../components/styles';
const { landing, primary, brand, brand2 } = Colors;

const Locations = () => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const navigation =useNavigation();

  return (
    <SafeAreaView>

 <View style={tw `h-full bg-white`}>
 <Text style={tw ` text-left p-0 text-lg font-semibold px-6 pt-10		`}>Add a Location</Text>
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
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
                 <Text style={tw ` text-left p-0 text-lg font-semibold px-6 pt-10	`}>Pick a nickname</Text>

         <PickerPage/>
         <AddButton>
  <ButtonText>
    Add
  </ButtonText>
</AddButton>
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

