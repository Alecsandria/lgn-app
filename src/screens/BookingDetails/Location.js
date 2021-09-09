import React, { useState } from 'react';
import { View, Text } from 'react-native';

import generalStyles from '../../styles/general';
import bookingStyles from '../../styles/booking';

const selectedLocation = {
  nickName: "",
  addressLine1: "Finsbury Park",
  addressLine2: "",
  city: "London",
  postCode: "N4 3NH"
}

const Location = () => {
  const [location, setLocation] = useState([])

  const displayLocation = () => {
    const address = []
    for (const [key, value] of Object.entries(selectedLocation)) {
      if (value != "") {
        address.push(value)
      }
    }
    // setLocation(address)
    // console.log(location)
    return address.map((addressValue, index) => {
      return (
        <Text key={index}>{addressValue}</Text>
      )
    })
  }

  return (
    <View style={generalStyles.card}>
      <Text style={bookingStyles.cardTitle}>Location {selectedLocation.nickName != "" ? `- ${selectedLocation.nickName}` : ""}</Text>
      <View style={bookingStyles.content}>
        {displayLocation()}
      </View>
    </View>
  )
}

export default Location