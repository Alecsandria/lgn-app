import React, { useState } from "react"
import { Text, View } from "react-native"

import generalStyles from '../../styles/general';
import bookingStyles from '../../styles/booking';

const Services = () => {
  const [service, setService] = useState([])

  const services = [{
    service: "Acrylics",
    price: "£50"
  },
  {
    service: "Hand Gel",
    price: "£50"
  },
  {
    service: "Acrylic Gel",
    price: "£50"
  },
  {
    service: "Express Nails",
    price: "£50"
  },
  {
    service: "Silk Wrap",
    price: "£50"
  },
  {
    service: "SNS",
    price: "£50"
  }]

  return (
    <View style={generalStyles.card}>
      <Text style={bookingStyles.cardTitle}>Services</Text>
    </View>
  )
}

export default Services