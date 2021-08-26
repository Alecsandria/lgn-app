import React from "react"
import { View, Text } from 'react-native';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';

const Navbar = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  )
}

export default Navbar