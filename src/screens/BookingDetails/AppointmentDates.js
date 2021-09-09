import React, { useState } from "react"
import { View, Text } from "react-native"
import { Picker } from "@react-native-picker/picker";
import moment from "moment";

import generalStyles from '../../styles/general';
import bookingStyles from '../../styles/booking';

const AppointmentDates = () => {
  const today = new Date()
  const [date, setDate] = useState("")

  const formatDate = (date) => {
    return moment(date).format('MMMM DD YYYY')
  }

  const addDays = (dd, days) => {
    const date = new Date(dd)
    date.setDate(date.getDate() + days);
    return date;
  }

  const getDates = (startDate, endDate) => {
    const dateArray = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
        let date = new Date(currentDate);
        dateArray.push(formatDate(date));
        currentDate = addDays(currentDate, 1);
    }
    return dateArray;
  }

  const renderDates = () => {
    const dates = getDates(today, addDays(today, 14));
    
    return dates.map((date, index) => {
      return (
        <Picker.Item key={index} label={date} value={date} />
      )
    })
  }


  return (
    <View style={generalStyles.card}>
      <Text style={bookingStyles.cardTitle}>Schedule Date</Text>
      <View style={bookingStyles.content}>
        <Picker
          selectedValue={date}
          onValueChange={(date) =>
            setDate(date)
          }>
         {renderDates()}
        </Picker>
      </View>
    </View>
  )
}

export default AppointmentDates