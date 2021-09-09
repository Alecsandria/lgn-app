import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
 
import Booking from './src/screens/BookingDetails/BookingDetails';
import styles from "./src/styles/general"

export default function App() {
  return (
    <View style={styles.mainBackgroundColour}>
      <View>
        <StatusBar style="dark" />
      </View>
      <View>
        <Booking/>
      </View>
    </View>
  );
}
