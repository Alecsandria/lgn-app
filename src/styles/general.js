import { StyleSheet } from "react-native";

const generalStyles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 5,
    elevation: 7,
    borderRadius: 10
  }
});

export default generalStyles