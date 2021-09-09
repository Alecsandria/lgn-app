import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const navbarStyles = StyleSheet.create({
  navbar: {
    // marginTop: Constants.statusBarHeight,
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15
  },
  title: {
    fontSize: 20,
    fontFamily: "Nunito_600SemiBold",
    paddingLeft: 18
  }
})

export default navbarStyles