import React from "react"
import { Button, View, TouchableOpacity, Text } from "react-native"
import * as Device from 'expo-device';

const PrimaryBtn = (props) => {

  return (
    <View>
      {
        Device.brand === "Apple" ?
          <TouchableOpacity
            style={{
              backgroundColor: '#7246A6',
              borderRadius: 14,
              padding: 14,
              marginTop: 50,
              marginBottom: 20
            }}
            onPress={() => alert(`Navigate to ${props.title} view`)}
            underlayColor='#fff'>
            <Text style={{
              color:'#fff',
              textAlign:'center', 
              fontSize: 18}}>{props.title}</Text>
          </TouchableOpacity>
          :
          <Button
            onPress={() => { alert(`Navigate to ${props.title} view`) }}
            title={props.title}
            color="#7246A6" />
      }
    </View>
  )
}

export default PrimaryBtn