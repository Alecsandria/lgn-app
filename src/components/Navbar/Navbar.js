import React from "react"
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts, Nunito_600SemiBold } from "@expo-google-fonts/nunito"; 

import generalStyles from "../../styles/general";
import navbarStyles from "./navbarStyles";


const Navbar = (props) => {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleNavigation = () => {
    alert('Will be nagivigated back to previous page')
  }

  return (
    <TouchableWithoutFeedback onPress={handleNavigation}>
      <View style={[generalStyles.container, navbarStyles.navbar]}>
        <View style={{justifyContent: "center"}}>
          <AntDesign name="left" size={20} color="#020413" />
        </View>
        <View style={{justifyContent: "center"}}>
          <Text style={navbarStyles.title}>{props.title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Navbar