import { StyleSheet } from "react-native";

const generalStyles = StyleSheet.create({
  mainBackgroundColour: {
    backgroundColor: "#FAF7FD"
  },
  container: {
    marginLeft: 10,
    marginRight: 10,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#FAF7FD"
  },
  card: {
    margin: 10,
    padding: 24,
    backgroundColor: '#F5EFFB', 
    shadowColor: "#7246A6",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 7,
    borderRadius: 10,
  }
});

export default generalStyles