import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import Navbar from '../components/Navbar';
import bookingStyles from '../styles/booking';

const Booking = () => {
  const [selectedTechnician, setselectedTechnician] = useState("Select");

  const nailTechnicians = [{ label: "Barbra", value: "babra"}]

  return (
    <>
      <Navbar title="Booking Details" />
      <ScrollView style={{ padding: 10 }}>
        <Text style={{ paddingBottom: 10 }}>Location</Text>
        <View style={bookingStyles.card}>
          <View style={{ padding: 10 }}>
            <Text style={{ paddingBottom: 10, fontWeight: "600" }}>Location Name | Nick Name</Text>
            <Text>Address</Text>
          </View>
        </View>

        <Text style={{ paddingTop: 25, paddingBottom: 10 }}>Number of Customers</Text>
        <View style={bookingStyles.card}>
          <TextInput
            style={{ height: 50, padding: 10 }}
            keyboardType="number-pad"
            placeholder="Enter number of customers" />
        </View>

        <Text style={{ paddingTop: 25, paddingBottom: 10 }}>Select Nail Technican</Text>
        <View>
        <RNPickerSelect
            value = {selectedTechnician}
            onValueChange={(name) => setselectedTechnician(name)}
            items={nailTechnicians}
        />
        </View>
      </ScrollView>
    </>
  )
}

export default Booking