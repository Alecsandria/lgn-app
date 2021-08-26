import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker'

import Navbar from '../components/Navbar';
import generalStyles from '../styles/general';
import bookingStyles from '../styles/booking';

const getYYYYMMdd = (date) => {
  return date.toISOString().substring(0,10);
}

const Booking = () => {
  const today = new Date()
  const [selectedTechnician, setselectedTechnician] = useState("Select");
  const [date, setDate] = useState(today)

  const nailTechnicians = [{ label: "Barbra", value: "babra" }]
  const times = ["9:00", "9:30", "10:00", "10:30"]
  const fortnightAway = new Date(Date.now() + 12096e5)

  return (
    <>
      <Navbar title="Booking Details" />
      <ScrollView style={{ padding: 10 }}>
        <Text style={bookingStyles.heading}>Location</Text>
        <View style={generalStyles.card}>
          <View style={{ padding: 10 }}>
            <Text style={{ paddingBottom: 10, fontWeight: "600" }}>Location Name | Nick Name</Text>
            <Text>Address</Text>
          </View>
        </View>

        <Text style={bookingStyles.heading}>Number of Customers</Text>
        <View style={generalStyles.card}>
          <TextInput
            style={{ height: 50, padding: 10 }}
            keyboardType="number-pad"
            placeholder="Enter number of customers" />
        </View>

        <Text style={bookingStyles.heading}>Select Nail Technican</Text>
        <View>
        <RNPickerSelect
            value = {selectedTechnician}
            onValueChange={(name) => setselectedTechnician(name)}
            items={nailTechnicians}
        />
        </View>

        <Text style={bookingStyles.heading}>Select Date</Text>
        <View>
          <DatePicker 
            date={date} 
            onDateChange={setDate} 
            mode="date"
            androidVariant="nativeAndroid"
            minimumDate={today}
            maximumDate={fortnightAway}
          />
        </View>

        <Text style={bookingStyles.heading}>Select Time</Text>
        <View style={generalStyles.card}>

        </View>

      </ScrollView>
    </>
  )
}

export default Booking