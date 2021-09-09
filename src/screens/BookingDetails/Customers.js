import React, { useState } from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';

import generalStyles from '../../styles/general';
import bookingStyles from '../../styles/booking';

const Customers = () => {
  const [numOfCustomers, setNumOfCustomers] = useState("1");

  return (
    <View style={generalStyles.card}>
      <Text style={bookingStyles.cardTitle}>Number of Customers</Text>
      <TextInput
        style={bookingStyles.content}
        onChangeText={text => setNumOfCustomers(text)}
        value={numOfCustomers}
        keyboardType="number-pad"
        returnKeyLabel="Done"
        returnKeyType='done'
        onSubmitEditing={Keyboard.dismiss} />
    </View>
  )
}

export default Customers