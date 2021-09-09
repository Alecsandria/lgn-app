import React, { useState } from "react"
import { View, Text } from "react-native";
import moment from "moment";

import generalStyles from '../../styles/general';
import bookingStyles from '../../styles/booking';

const AppointmentTimes = () => {
  const [time, setTime] = useState("")
  const startTime = "9:00", endTime = "5:00"

  const getTime = () => {
    
  }

  return (
    <View style={generalStyles.card}>
      <Text style={bookingStyles.cardTitle}>Schedule Time</Text>
    </View>
  )
}

export default AppointmentTimes